# First Motors — Used Car Dealer Website

Official website for **First Motors**, a trusted pre-owned car dealer located in Bulandshahr, Uttar Pradesh, India.

**Live site:** [https://firstmotorsbsr.com](https://firstmotorsbsr.com)

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed on Hostinger (Node.js hosting)

## Development

```bash
npm install
npm run dev        # Development server on http://localhost:3001
npm run build      # Production build
npm run start      # Start production server
```

## Environment Variables

Create a `.env.local` file (never commit this file):

```
# Google Analytics 4 (get from analytics.google.com)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Optional email notifications (for lead form submissions):
```
# Resend email service API key
RESEND_API_KEY=re_XXXXXXXXXX
```

## Project Structure

```
app/           — Next.js App Router pages
components/    — Reusable UI components
data/          — Business config and vehicle inventory
lib/           — Utility functions and type definitions
public/        — Static assets (logos, vehicle images, showroom photo)
```

## Key Configuration

All business details (name, phone, address, social links) are centralised in `data/config.ts`.

Vehicle inventory is managed in `data/inventory.ts`.

## Deployment (Hostinger)

1. Push to GitHub
2. Connect GitHub repo in Hostinger → Node.js hosting panel
3. Set environment variables in Hostinger control panel
4. Build command: `npm run build`
5. Start command: `npm run start`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
