# SAC BillFlow

### Smart Billing. Faster Payments. Better Business.

**SAC BillFlow** is a modern, responsive SaaS billing and invoice management platform created as a **Technical Round 2 assignment for SAC Info Tech Solutions**.

The project focuses on demonstrating practical frontend engineering skills including **React, Next.js, TypeScript, responsive UI/UX, component architecture, accessibility, interactive business logic, and clean maintainable code**.

> **Note:** SAC BillFlow is a fictional demonstration product created specifically for the technical assessment. It is not a production billing service.

---

## 🚀 Live Demo

**Live Application:**
https://sac-billflow.vercel.app/

**Source Code:**
https://github.com/Chandu-challa/SAC-BillingFlow

---

## 📌 Project Overview

SAC BillFlow is designed as a billing and invoicing SaaS platform for small businesses, freelancers, agencies, retailers, and service-based businesses.

The homepage provides a complete product experience rather than being only a static landing page.

Users can:

* Explore the billing platform
* View a simulated business dashboard
* Create invoice items
* Calculate discounts and GST dynamically
* Preview an invoice
* Track simulated payment statuses
* Switch between monthly and yearly pricing
* Explore product features and business solutions
* Interact with an accessible FAQ section
* Experience the application across mobile, tablet, and desktop devices

The project intentionally focuses on **frontend product experience** without introducing unnecessary backend complexity for the assessment.

---

# ✨ Key Features

## 🧾 Interactive Invoice Calculator

A functional invoice creation experience supporting:

* Customer information
* Multiple invoice items
* Product/service name
* Quantity
* Unit price
* Item-level discount
* GST selection
* Dynamic subtotal calculation
* Discount calculation
* Taxable amount calculation
* GST calculation
* Grand total calculation
* Add item
* Remove item
* Edit item
* Form validation

Supported GST rates:

```text
5%
12%
18%
28%
```

All calculations update in real time without requiring a page refresh.

---

## 📄 Invoice Preview

Users can preview the generated invoice through an accessible modal.

The preview includes:

* SAC BillFlow branding
* Invoice number
* Invoice date
* Customer information
* Invoice items
* Quantity
* Unit price
* Discount
* GST
* Subtotal
* Grand total
* Payment status

The invoice preview is designed to be **print-friendly** and structured so that it can later be connected to a real PDF-generation or backend invoice service.

---

## 📊 Business Dashboard

The homepage contains a simulated billing dashboard demonstrating how business information could be presented in a real SaaS application.

Example metrics include:

* Total Revenue
* Paid Invoices
* Pending Payments
* Overdue Payments
* Total Customers
* Revenue growth
* Monthly revenue trends
* Invoice payment status

The dashboard uses fictional data for demonstration purposes.

---

## 💰 Pricing Toggle

The pricing section supports:

* Monthly pricing
* Yearly pricing
* Dynamic price updates
* Different pricing plans
* Feature comparisons

Example plans:

| Plan         |      Monthly |
| ------------ | -----------: |
| Starter      |   ₹499/month |
| Business     |   ₹999/month |
| Professional | ₹1,999/month |

> Pricing is fictional demonstration data created for the assessment.

---

## ❓ Accessible FAQ

The FAQ section provides an interactive accordion experience with:

* Expand/collapse functionality
* Keyboard accessibility
* ARIA attributes
* Smooth animations
* Responsive layout

---

# 🎨 UI/UX Design

The interface follows a modern SaaS product design approach focused on:

* Clear visual hierarchy
* Professional business-oriented styling
* Consistent spacing
* Responsive layouts
* Strong typography
* Clear call-to-action buttons
* Reusable cards and components
* Subtle animations
* Accessible interaction states

### Design Direction

The visual language uses:

* Deep navy/indigo for the primary brand
* Light neutral backgrounds
* Teal accents
* Semantic success/warning/error colors
* Subtle borders
* Moderate corner radius
* Controlled shadows
* Minimal decorative elements

The design intentionally avoids excessive:

* Gradients
* Glassmorphism
* Neon effects
* Large decorative animations
* Unnecessary visual clutter

The goal is to maintain a **professional financial SaaS appearance**.

---

# 📱 Responsive Design

The application follows a mobile-first responsive approach.

The layout has been designed for:

### Mobile

```text
320px
360px
375px
390px
414px
```

### Tablet

```text
768px
820px
1024px
```

### Desktop

```text
1280px
1366px
1440px
1536px
1920px
```

Responsive behavior includes:

* Mobile navigation drawer
* Stacked billing forms
* Responsive dashboard
* Responsive invoice preview
* Flexible pricing cards
* Responsive analytics sections
* Mobile-friendly tables
* Appropriate touch targets
* No intentional horizontal page overflow

---

# ♿ Accessibility

Accessibility has been considered throughout the application.

Implemented practices include:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Form labels
* ARIA attributes where required
* Keyboard navigation
* Visible focus states
* Accessible accordion controls
* Accessible modal interaction
* Escape-key modal handling
* Focus management
* Reduced-motion considerations
* Responsive touch-friendly controls
* Color contrast considerations

The application aims to provide a consistent experience for both mouse and keyboard users.

---

# 🏗️ Technology Stack

| Technology        | Purpose                                      |
| ----------------- | -------------------------------------------- |
| **Next.js**       | React framework and application architecture |
| **React**         | UI development                               |
| **TypeScript**    | Type safety and maintainability              |
| **Tailwind CSS**  | Responsive styling                           |
| **Framer Motion** | UI animations and transitions                |
| **Lucide React**  | Consistent icon system                       |
| **Vercel**        | Deployment                                   |

### Framework Architecture

The project uses the **Next.js App Router** and follows a component-based architecture.

Server and Client Components are used where appropriate.

Interactive sections such as invoice calculations and pricing interactions use client-side React state, while static content can remain server-rendered.

---

# 📂 Project Structure

```text
sac-billflow/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── DashboardPreview.tsx
│   ├── BillingDemo.tsx
│   ├── InvoiceForm.tsx
│   ├── InvoicePreview.tsx
│   ├── Features.tsx
│   ├── AnalyticsSection.tsx
│   ├── HowItWorks.tsx
│   ├── Solutions.tsx
│   ├── GSTSection.tsx
│   ├── PaymentTracking.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── data/
│   ├── features.ts
│   ├── pricing.ts
│   ├── faq.ts
│   └── solutions.ts
│
├── types/
│   └── billing.ts
│
├── public/
│   └── ...
│
├── package.json
├── README.md
└── ...
```

---

# 🧩 Component Architecture

The application is divided into reusable UI sections instead of placing the entire homepage inside a single component.

### Navigation

`Navbar.tsx`

Handles:

* Desktop navigation
* Mobile navigation
* Menu interactions
* Keyboard behavior

### Hero

`Hero.tsx`

Contains:

* Main product messaging
* Primary CTAs
* Product value propositions
* Dashboard preview

### Dashboard

`DashboardPreview.tsx`

Displays:

* Revenue
* Invoice statistics
* Customers
* Payment information
* Revenue visualization

### Billing

`BillingDemo.tsx`

Provides the main interactive billing experience.

It coordinates:

* Invoice items
* Calculations
* Validation
* Invoice preview

### Invoice

`InvoiceForm.tsx`

Responsible for invoice item input and editing.

`InvoicePreview.tsx`

Responsible for displaying the generated invoice preview.

### Product Sections

The remaining components provide focused product sections:

```text
Features
Analytics
How It Works
Solutions
GST
Payment Tracking
Pricing
Testimonials
FAQ
Final CTA
Footer
```

This structure keeps individual components focused and easier to maintain.

---

# 🧠 Type-Safe Billing Model

The invoice functionality uses TypeScript interfaces rather than untyped objects.

Example conceptual model:

```ts
interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  gstRate: number;
}
```

This makes the billing logic easier to understand, maintain, and extend.

---

# 🧮 Invoice Calculation Flow

The invoice calculation follows a predictable sequence:

```text
Item Quantity × Unit Price
            ↓
       Item Subtotal
            ↓
        Apply Discount
            ↓
       Taxable Amount
            ↓
         Apply GST
            ↓
        Grand Total
```

Example:

```text
Quantity       = 2
Unit Price     = ₹5,000
Discount       = 5%
GST            = 18%

Subtotal       = ₹10,000
Discount       = ₹500
Taxable Amount = ₹9,500
GST            = ₹1,710
Grand Total    = ₹11,210
```

All values are recalculated dynamically when the user changes invoice inputs.

---

# 🔐 Validation

The invoice form validates important input conditions including:

* Customer name is required
* Item name is required
* Quantity must be valid
* Unit price must be valid
* Discount must be within the allowed range
* GST must use a supported rate
* Invalid numeric values are prevented
* Empty invoice items are handled appropriately

Validation messages are displayed through the UI rather than relying on browser alert dialogs.

---

# ⚡ Performance Considerations

The implementation considers frontend performance through:

* Component-based rendering
* Appropriate Server/Client Component usage
* Lightweight icon library
* Controlled animations
* No unnecessary large image assets
* Responsive CSS instead of excessive JavaScript calculations
* Avoiding unnecessary client-side state
* Reusable data-driven components

The application is designed to remain lightweight while still providing an interactive SaaS experience.

---

# 🔎 SEO

The application includes basic SEO configuration including:

* Page title
* Meta description
* Semantic HTML
* Proper heading hierarchy
* Open Graph metadata
* Twitter metadata
* Responsive viewport configuration

Primary page concept:

> **Smart Billing. Faster Payments. Better Business.**

---

# 🧪 Testing & Verification

The application was designed and tested across different viewport sizes to identify:

* Layout issues
* Text wrapping problems
* Horizontal overflow
* Mobile navigation issues
* Form usability problems
* Modal behavior
* Responsive card layouts
* Touch interaction issues

Core interactive functionality includes:

* Mobile navigation
* Invoice item creation
* Invoice item editing
* Invoice item removal
* GST calculation
* Discount calculation
* Invoice preview
* Pricing toggle
* FAQ accordion

---

# 🏭 Production Build

The project can be run locally using:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production application:

```bash
npm start
```

---

# ☁️ Deployment

The application is deployed using **Vercel**.

Live deployment:

https://sac-billflow.vercel.app/

The project can also be deployed to other Next.js-compatible hosting platforms.

---

# 🔮 Future Backend Architecture

The current implementation intentionally focuses on the frontend because the technical assessment requires a working homepage and frontend product experience.

However, the architecture can be extended into a complete billing application.

A possible backend architecture could expose APIs such as:

```text
POST   /api/invoices
GET    /api/invoices
GET    /api/invoices/:id

POST   /api/customers
GET    /api/customers
GET    /api/customers/:id

GET    /api/dashboard

POST   /api/payments
GET    /api/payments

GET    /api/reports
```

A future implementation could add:

* User authentication
* Role-based access control
* Customer management
* Persistent invoices
* Invoice numbering
* PDF generation
* Payment gateway integration
* Email invoices
* Business reports
* Expense management
* Database persistence
* GST configuration
* Audit logs

A backend could be implemented using technologies such as:

```text
Next.js API Routes / Backend API
        ↓
Authentication
        ↓
Business Services
        ↓
Prisma ORM
        ↓
PostgreSQL / SQL Server
```

The existing TypeScript billing models can be extended to support persistent database entities.

---

# 📈 Scalability Considerations

Although this project is a frontend assessment, several design decisions keep future scaling in mind:

* Reusable components
* Typed data models
* Separated data and UI
* Modular billing logic
* Clear component responsibilities
* API-ready data structures
* Minimal coupling between UI sections

This allows the frontend to evolve without requiring a complete rewrite when backend functionality is introduced.

---

# 🎯 Assessment Objectives Demonstrated

This project demonstrates practical experience with:

### Frontend Development

* React
* Next.js
* TypeScript
* Tailwind CSS
* Responsive UI
* Component architecture
* State management
* Form handling

### Business Logic

* Invoice calculations
* GST calculations
* Discount calculations
* Dynamic pricing
* Data-driven UI

### UI/UX

* SaaS product design
* Responsive layouts
* Mobile navigation
* Interactive dashboards
* Modal interfaces
* Micro-interactions
* Visual hierarchy

### Engineering Practices

* Type-safe development
* Reusable components
* Separation of concerns
* Validation
* Accessibility
* SEO
* Production build verification

---

# ⚠️ Demo Disclaimer

SAC BillFlow is a **fictional product created specifically for the SAC Info Tech Solutions Technical Round 2 assessment**.

The following are demonstration data:

* Customer names
* Invoice numbers
* Revenue figures
* Pricing
* Testimonials
* Payment information
* GST examples

The GST calculations are implemented only to demonstrate frontend business logic and **do not represent legal, accounting, or tax advice or compliance**.

No real customer, payment, financial, or personal data is processed by this demonstration.

---

# 👨‍💻 Developer

**Chandu Challa**

Full Stack Developer

Focused on:

```text
React.js
Next.js
TypeScript
JavaScript
Python
Django
FastAPI
SQL Server
REST APIs
```

---

# 📬 Project Links

| Resource  | Link                                             |
| --------- | ------------------------------------------------ |
| Live Demo | https://sac-billflow.vercel.app/                 |
| GitHub    | https://github.com/Chandu-challa/SAC-BillingFlow |

---

## ⭐ Final Note

SAC BillFlow was created with the goal of demonstrating how a real-world billing SaaS product could be designed and structured from a frontend engineering perspective.

The implementation prioritizes:

**Clean UI + Responsive UX + Functional Business Logic + Accessibility + Maintainable Architecture**

while keeping the project appropriately scoped for the technical assessment.
