import { useCallback, useEffect, useState } from 'react'

export function useSearch() {
	const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
		if (typeof window !== 'undefined') {
			return new URLSearchParams(window.location.search)
		}
		return new URLSearchParams()
	})

	// Get a specific search parameter value
	const getParam = useCallback((key: string): string | null => {
		return searchParams.get(key)
	}, [searchParams])

	// Get all search parameters as an object
	const getAllParams = useCallback((): Record<string, string> => {
		const params: Record<string, string> = {}
		searchParams.forEach((value, key) => {
			params[key] = value
		})
		return params
	}, [searchParams])

	// Set a search parameter
	const setParam = useCallback((key: string, value: string) => {
		const newParams = new URLSearchParams(searchParams)
		newParams.set(key, value)
		setSearchParams(newParams)

		if (typeof window !== 'undefined') {
			const newUrl = `${window.location.pathname}?${newParams.toString()}`
			window.history.replaceState({}, '', newUrl)
		}
	}, [searchParams])

	// Delete a search parameter
	const deleteParam = useCallback((key: string) => {
		const newParams = new URLSearchParams(searchParams)
		newParams.delete(key)
		setSearchParams(newParams)

		if (typeof window !== 'undefined') {
			const newUrl = newParams.toString()
				? `${window.location.pathname}?${newParams.toString()}`
				: window.location.pathname
			window.history.replaceState({}, '', newUrl)
		}
	}, [searchParams])

	// Clear all search parameters
	const clearParams = useCallback(() => {
		setSearchParams(new URLSearchParams())

		if (typeof window !== 'undefined') {
			window.history.replaceState({}, '', window.location.pathname)
		}
	}, [])

	// Listen for popstate events (back/forward navigation)
	useEffect(() => {
		const handlePopState = () => {
			if (typeof window !== 'undefined') {
				setSearchParams(new URLSearchParams(window.location.search))
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('popstate', handlePopState)
			return () => window.removeEventListener('popstate', handlePopState)
		}
	}, [])

	return {
		searchParams,
		getParam,
		getAllParams,
		setParam,
		deleteParam,
		clearParams,
	}
}
