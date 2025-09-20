# Mahwari Justice Website

A modern, responsive website for Mahwari Justice - a grassroots student-led organization ensuring access to safe periods across Pakistan.

## About Mahwari Justice

Mahwari Justice provides menstrual health products, education, and advocacy, especially during disasters and emergencies. The organization has distributed over 150,000 relief kits and mobilized 300+ volunteers nationwide.

## Technology Stack

- **Framework**: Astro.js 5.x
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.x
- **Components**: shadcn/ui
- **Language**: TypeScript

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site header with navigation
│   ├── Hero.tsx        # Hero section with CTA
│   ├── About.tsx       # About organization
│   ├── Impact.tsx      # Impact statistics and awards
│   ├── Projects.tsx    # Key projects (PadCraft, workshops, comics)
│   ├── Team.tsx        # Team members
│   ├── Donate.tsx      # Donation information
│   └── Footer.tsx      # Site footer
├── pages/
│   └── index.astro     # Main landing page
└── styles/
    └── global.css      # Global styles with custom color scheme
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, accessible design using shadcn/ui components
- **Custom Theme**: Mahwari Justice brand colors (crimson red, deep teal)
- **Interactive Elements**: Tabs, cards, and hover effects
- **Performance Optimized**: Built with Astro for fast loading
- **SEO Ready**: Meta tags, Open Graph, and Twitter cards

## Key Sections

1. **Hero**: Mission statement with impact statistics
2. **About**: Organization overview and SDG alignment
3. **Impact**: Key achievements and recognition
4. **Projects**: PadCraft, educational workshops, comic books
5. **Team**: Founder and key members
6. **Donate**: Campaign information for Pakistani and international donors
7. **Footer**: Contact information and social links

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

Content is sourced from the `docs/` directory:

- `campaign-info.md` - Donation account details
- `members.md` - Team member information
- `socials-links.md` - Social media links
- `portfolio.md` - Organization achievements and projects
- `assets-comics.md` - CDN links for resources

## Customization

The website uses a custom color scheme defined in `src/styles/global.css`:

- **Primary**: Deep Crimson Red (`oklch(0.48 0.18 25)`)
- **Secondary**: Deep Teal (`oklch(0.45 0.12 195)`)
- **Accent**: Warm Coral (`oklch(0.65 0.15 35)`)

## Deployment

The website is optimized for deployment on:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is built for Mahwari Justice. All rights reserved.

---

**Period rights are human rights. 🩸**
