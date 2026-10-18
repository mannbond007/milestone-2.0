# MileStone Scholarship — Master Project Plan

## Overview
**MileStone Scholarship** is a clean, modern, professional, responsive education and scholarship guidance platform designed for students exploring post-Class 12 and post-Graduation pathways, medical programs (MBBS India/Abroad, BDS, BAMS, BHMS, BUMS), engineering, and MBA/PGDM programs.

---

## Phases & Status



### Phase 0: Project Inspection & Baseline Verification
- [x] Inspect existing repository files, structure, and dependencies.
- [x] Verify presence and location of the official brand logo.
  - *Finding:* In the original repository, `public/images/` was absent. The exact high-resolution cropped brand logo was identified on Desktop (`milestone-logo.png`, 3756x1014 px).
  - *Action:* Deployed the authentic logo asset to `public/images/milestone-scholarship-logo-cropped-hq.png` in both the workspace (`milestone-2.0`) and original `MileStone` repository.
- [x] Inspect build and typecheck baseline.
  - *Finding:* Initial build encountered missing Prisma Client exports for `ApplicationStatus`. Executed `npx prisma generate`, resolving all type errors. Verified clean compilation and static page generation.
- [x] Create and maintain `PROJECT_PLAN.md`.

---



### Phase 1: Brand & Visual Foundation (COMPLETED)
- [x] **Design Tokens & Global Styles:**
  - Implemented shared tokens in `src/app/globals.css` matching specification:
    - Light Theme: Background `#F5F7F6`, Surface `#FFFFFF`, Secondary `#EEF2F0`, Primary `#173B35`, Accent `#3C8D72`, Soft `#E8F2EE`, Text `#17201D`, Muted `#66736E`, Border `#DDE4E1`.
    - Dark Theme: Background `#0F1715`, Navbar `#0B1211`, Surface `#17211E`, Secondary `#1E3029`, Text `#F1F5F3`, Muted `#AAB8B1`, Accent `#59B892`, Highlight `#B8E5D3`, Border `#2A3934`.
- [x] **Logo Integration:**
  - Integrated official image `public/images/milestone-scholarship-logo-cropped-hq.png`.
  - Maintained exact aspect ratio (~3.704:1), retina sharpness, desktop width (190–225px), mobile width (150–165px).
  - Dark mode: subtle off-white/white container with rounded corners and intentional padding.
  - Light mode: natural presentation against light surface.
  - Alt text: "MileStone Scholarship Program".
- [x] **Internationalization (English / Hindi):**
  - Created `src/messages/en.json` and `src/messages/hi.json` with genuine Hindi translations.
  - Created `LocaleProvider` in `src/components/providers/locale-provider.tsx` with cookie and `localStorage` persistence.
  - Implemented compact pill language selector: `[ 🌐 | EN / HI | ▾ ]` (36px height, accessible keyboard dropdown, checkmark state).
- [x] **Theme System:**
  - Created `ThemeProvider` with system preference detection and zero-flicker hydration.
  - Implemented compact icon-only `ThemeToggle` (Sun in light mode, Moon in dark mode).
- [x] **Desktop & Mobile Navbar:**
  - Sticky navigation with subtle border and scroll shadow.
  - Structured dropdowns for *Scholarships*, *Courses*, and *About Us*.
  - Direct links for *Home*, *How to Apply*, *Achievers*, *Blog*.
  - Right-aligned controls: Language pill, Theme toggle, Login / UserButton, Contact Us button.
  - Responsive mobile navigation drawer with keyboard support and theme adaptation.
- [x] **Footer:**
  - Official brand logo, organization description, categorized links, verified contact details, copyright & legal notices.
- [x] **Verification:**
  - TypeScript validation (`npx tsc --noEmit`): PASSED (0 errors).
  - Production build (`npm run build`): PASSED (42 static/dynamic routes compiled).
  - HTTP Server verification on `http://localhost:3000`: PASSED (HTTP 200).

---

### Phase 2: Public Website & Pages (Pending Approval)
- [ ] Homepage hero, qualification categories, course categories, medical pathways, featured scholarships, how it works, scholarship test, important dates, achievers, blog, FAQs, CTA.
- [ ] Scholarship listing & search filters.
- [ ] Detailed pages for scholarships, courses, how to apply, achievers, blog, FAQs, and contact.

---

### Phase 3: Database & Prisma Architecture (Pending)
- [ ] PostgreSQL schema refinement and migrations for student profiles, scholarships, courses, and applications.

---

### Phase 4: Authentication & Student Portal (Pending)
- [ ] Clerk authentication integration, profile management, saved scholarships, and application tracking.

---

### Phase 5: Administration Dashboard (Pending)
- [ ] Server-enforced RBAC for admins to manage content, scholarships, and review applications.

---

### Phase 6: Applications & Documents (Pending)
- [ ] Multi-step application workflow with secure storage references.

---

### Phase 7: Final Validation & Optimization (Pending)
- [ ] End-to-end audit, accessibility checks, SEO metadata, performance optimization.
