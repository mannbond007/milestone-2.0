# MileStone Scholarship

**A Modern Scholarship, Education & Admission Guidance Platform**

MileStone Scholarship is a web platform designed to help students explore scholarship opportunities, discover educational pathways, and access admission guidance after Class 12 and graduation.

The platform aims to simplify the process of finding relevant scholarships, exploring academic programs, understanding eligibility requirements, and navigating admission opportunities through a clean, accessible, and user-friendly interface.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Objectives](#key-objectives)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Development Workflow](#development-workflow)
- [Project Roadmap](#project-roadmap)
- [Security Considerations](#security-considerations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

MileStone Scholarship focuses on scholarship discovery, educational opportunities, and admission guidance for students pursuing higher education.

The platform covers the following categories:

### Scholarships
- Scholarships after Class 12
- Scholarships after graduation
- Scholarship test information
- Eligibility requirements and application guidance

### Medical Education
- MBBS in India
- MBBS Abroad
- Bachelor of Dental Surgery (BDS)
- Bachelor of Ayurvedic Medicine and Surgery (BAMS)
- Bachelor of Homeopathic Medicine and Surgery (BHMS)
- Bachelor of Unani Medicine and Surgery (BUMS)
- Government and private college information

### Other Educational Pathways
- Engineering
- Master of Business Administration (MBA)
- Post Graduate Diploma in Management (PGDM)

### Educational Resources
- Important dates and deadlines
- Step-by-step application guidance
- Achievers and success stories
- Educational articles and updates
- Frequently asked questions
- Contact and enquiry information

---

## Key Objectives

- Make scholarship and educational information easier to discover.
- Help students explore opportunities based on their educational qualifications and interests.
- Present scholarship requirements and deadlines in an understandable format.
- Provide a responsive experience across desktop, tablet, and mobile devices.
- Support English and Hindi language options.
- Offer light and dark themes for a comfortable browsing experience.
- Establish a maintainable foundation for future student and administrative features.

---

## Core Features

The project is being developed incrementally.

### Public Website
- Professional homepage
- Scholarship listing and detail pages
- Course and education category pages
- Search and filtering
- Important dates
- Application guidance
- Blog and educational resources
- FAQs and contact information

### User Experience
- Responsive navigation
- English and Hindi localization
- Light and dark themes
- Reusable UI components
- Accessible forms and navigation

### Student Portal — Planned
- User registration and authentication
- Student profile management
- Saved scholarships
- Application history
- Application status tracking

### Administration — Planned
- Scholarship management
- Course and university management
- Educational content management
- Important date management
- Application review, where in-platform applications are supported

### Future Enhancements
- Secure document uploads
- Email notifications
- Optional payment gateway integration
- Improved scholarship discovery and recommendations

Feature availability depends on the current development phase. Planned functionality should not be considered production-ready until implemented and tested.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Web application framework and server-side functionality |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and design system |
| shadcn/ui | Reusable interface components |
| Lucide React | Interface icons |
| Clerk | Authentication and user management |
| PostgreSQL | Relational database |
| Prisma ORM | Database access and schema management |
| Zod | Input validation |
| next-intl | English/Hindi localization |
| Vercel | Recommended deployment platform |

Additional services, such as cloud file storage and Razorpay, may be introduced when the corresponding features are required.

---

## System Architecture

The initial application follows a modular monolith architecture.

```text
                    STUDENTS & ADMIN
                           |
                           v
                    Next.js Application
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
          Clerk         Server Logic   UI Components
      Authentication        |
                            v
                       Prisma ORM
                            |
                            v
                        PostgreSQL

                Future Integrations
                --------------------
                Cloud File Storage
                Email Notifications
                Razorpay Payments
```

This architecture keeps the initial implementation simple while allowing additional functionality to be introduced as the platform grows.

---

## Project Structure

The structure may evolve as development progresses.

```text
milestone-2.0/
|
├── public/
│   └── images/
│       └── milestone-scholarship-logo-cropped-hq.png
|
├── prisma/
│   └── schema.prisma
|
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── lib/
│   └── messages/
│       ├── en.json
│       └── hi.json
|
├── docs/
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── package-lock.json
├── PROJECT_PLAN.md
├── README.md
├── tsconfig.json
└── postcss.config.mjs
```

Some directories and files may be introduced as their corresponding features are implemented.

### Official Brand Identity

The project uses the official MileStone Scholarship Program logo supplied for the website.

Expected asset path:

`public/images/milestone-scholarship-logo-cropped-hq.png`

The original logo colors, proportions, typography, and emblem should be preserved.

---

## Getting Started

### Prerequisites

Ensure the following are installed:

- Node.js compatible with the project's Next.js version
- npm
- Git
- A code editor such as Antigravity or Visual Studio Code

PostgreSQL and the required Clerk configuration are needed when working on features that depend on them.

### 1. Clone the Repository

Replace `<repository-url>` with your actual GitHub repository URL.

```bash
git clone <repository-url>
cd milestone-2.0
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

Add the variables required by your current implementation. A typical configuration may include:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=
DIRECT_URL=
```

`DIRECT_URL` is only required if the Prisma configuration uses a separate direct database connection.

Obtain Clerk keys from your Clerk application and database connection strings from your PostgreSQL provider.

Never commit real credentials to the repository.

### 4. Generate Prisma Client

After confirming that the Prisma schema and database dependencies are configured, run:

```bash
npx prisma generate
```

### 5. Apply Database Migrations

When the Prisma schema is ready and the development database is accessible, apply the existing migrations or create an initial migration as appropriate.

For a project using Prisma Migrate:

```bash
npx prisma migrate dev
```

Do not reset an existing database or delete migrations without understanding the impact.

### 6. Start the Development Server

```bash
npm run dev
```

Open the local website at:

[http://localhost:3000](http://localhost:3000)

Use the terminal output to identify and resolve any configuration or runtime errors.

---

## Environment Configuration

Keep local credentials in `.env.local`.

The `.gitignore` file should exclude environment files containing secrets, dependency directories, and generated build output.

Example entries:

```gitignore
node_modules/
.next/
.vercel/

.env
.env.*
!.env.example

/.clerk/

*.log
*.tsbuildinfo
```

An `.env.example` file may document the required variable names using empty values or non-secret placeholders. Never include actual keys or passwords in it.

Environment variable names must match the names used by the project's actual configuration.

---

## Development Workflow

The project is developed in small, verifiable milestones.

1. Inspect and establish the project foundation.
2. Implement the brand identity, navbar, themes, language switcher, and shared layout.
3. Build the public homepage and educational pages.
4. Connect PostgreSQL and Prisma.
5. Implement Clerk authentication and student profiles.
6. Build administrative content management.
7. Implement confirmed
