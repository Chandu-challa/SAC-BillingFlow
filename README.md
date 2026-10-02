# SAC BillFlow

SAC BillFlow is a modern, professional, highly responsive SaaS billing and invoicing website homepage built for the Technical Round 2 assignment of SAC Info Tech Solutions.

## Project Overview

This project demonstrates a production-quality frontend implementation with a focus on UI/UX, responsive design, component architecture, accessibility, and clean code. The application allows users to experience a functional invoice calculator and view a simulated billing dashboard.

### Features
- **Interactive Invoice Demo**: A mini invoice calculator that supports dynamic item addition/removal, GST calculation, discounts, and real-time total updates.
- **Invoice Preview**: A print-friendly modal to view the generated invoice.
- **Responsive Dashboard**: Data-driven, stacked dashboard visual adapting from 320px up to 1920px.
- **Monthly/Yearly Pricing Toggle**: Interactive toggle adjusting plan prices dynamically.
- **FAQ Accordion**: Fully accessible and animated FAQ section.
- **Data-Driven UI**: Feature cards, pricing, and FAQs are driven by typed data structures to ensure easy maintainability.

## Technology Stack

- **Framework**: Next.js (App Router, Server & Client Components)
- **Library**: React 
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Interactive Features

1. **Mobile Navigation**: Smooth animated drawer that closes correctly on interactions and Escape key.
2. **Invoice Calculator**: Add/remove items, update quantities and prices with form validation, and calculate GST (5%, 12%, 18%, 28%).
3. **Pricing Toggle**: Instant recalculation for yearly discount.
4. **Accessible Modals**: Focus trap and proper ARIA labels used for the Invoice Preview.

## Responsive Design

The application is rigorously designed mobile-first and tested to ensure zero horizontal overflow across:
- **Mobile**: 320px to 414px (stacked cards, overflow-x tables, collapsed menus)
- **Tablet**: 768px to 1024px (balanced two-column grid layouts)
- **Desktop**: 1280px to 1920px (controlled maximum width, optimized typography scale using Tailwind classes)

## Accessibility

- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`).
- Proper ARIA attributes for dynamic interactive elements (buttons, modals, accordions).
- Sufficient color contrast utilizing the custom indigo/navy branding.
- Reduced motion support utilizing Framer Motion's best practices.

## Project Structure

```
sac-billflow/
├── app/
│   ├── layout.tsx         # Global layout with Navbar & Footer
│   ├── page.tsx           # Main homepage composing all sections
│   └── globals.css        # Tailwind config & global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── DashboardPreview.tsx
│   ├── BillingDemo.tsx    # Invoice form & preview logic
│   ├── Features.tsx
│   ├── AnalyticsSection.tsx
│   ├── HowItWorks.tsx
│   ├── Solutions.tsx
│   ├── GSTSection.tsx
│   ├── PaymentTracking.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── FinalCTA.tsx
├── data/
│   └── features.ts        # Data for features section
├── types/
│   └── billing.ts         # TypeScript interfaces for Invoice functionality
└── README.md
```

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Future Backend Architecture

This project is built as a frontend demonstration, avoiding over-engineering. However, the architecture is designed to seamlessly integrate with a real backend later. 

Suggested API Routes for future implementation:
- `POST /api/invoices` - Generate and save a new invoice.
- `GET /api/invoices` - Fetch recent invoices for the dashboard.
- `GET /api/customers` - Fetch customer list.
- `POST /api/customers` - Add a new customer.
- `GET /api/dashboard` - Fetch aggregated revenue and payment status statistics.

The `InvoiceItem` and `Invoice` interfaces in `types/billing.ts` can be easily mapped to a database ORM (like Prisma) in the future.

## Demo Disclaimer

SAC BillFlow is a fictional/demo product created strictly for a technical assessment. All data, customer names, pricing, and testimonials are placeholders. The GST calculations shown are for demonstration logic purposes only and do not constitute legal or tax compliance.
