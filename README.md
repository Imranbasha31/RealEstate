# MS Estates

MS Estates is a Tamil Nadu-focused real-estate marketplace prototype built with React and Vite. It helps buyers discover plots, homes, farmland, and commercial properties with clearer listing information, documented verification status, and a direct enquiry workflow.

## Product scope

- Public property search with category, district, budget, facing, keyword, sorting, grid, and map-style views.
- Property details with photos, pricing, amenities, approval references, verification scope, and site-visit requests.
- Saved properties and a buyer dashboard for favourites and enquiry history.
- Owner property-posting flow for submitting a listing.
- Founder admin portal for adding listings, changing availability, featuring properties, and managing leads.
- Tamil/English language toggle across the main experience.
- Supporting services for rent payments, rental agreements, home loans, and live chat.

## Trust and verification model

The site distinguishes marketing information from legal advice. Listings can carry statuses such as `New lead`, `Owner confirmed`, `Documents collected`, or `Professionally reviewed`, together with a last-confirmed date.

The recommended operating process is:

1. Confirm the owner or authorised representative.
2. Record location, size, price, availability, approvals, and marketing permission.
3. Collect relevant documents for review.
4. Arrange site checks and independent professional review where appropriate.
5. Publish only accurate, authorised information.
6. Reconfirm availability before sharing a listing with a buyer.

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build   # production build
npm test        # Vitest tests
npm run lint    # Oxlint checks
npm run preview # preview the production build
```

## Project structure

- `src/App.jsx` — application state, views, filters, saved properties, and lead flow.
- `src/data/properties.js` — sample districts, categories, and listing data.
- `src/components/` — marketplace, admin, dashboard, posting, service, and modal components.
- `src/index.css` — responsive MS Estates design system.
- `public/` — logo, property imagery, icons, and static assets.

## Current prototype limitations

Listings, users, saved properties, and leads are held in React state and reset on refresh. A production phase should add authenticated roles, a database, protected admin access, document storage, audit history, notifications, and professional verification workflows before real customer data or legal claims are used.

Sample data is illustrative and must not be treated as a real property offer, title opinion, approval certificate, or investment advice.
