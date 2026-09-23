# Top Training Institute

A modern, responsive, production-ready website for **Top Training Institute**, a multidisciplinary vocational and technical training institution.

> **Learn Skills. Build Your Career. Create Your Future.**

---

## Brand & Visual Direction

* **Primary Palette**: Deep Navy / Slate (`#0B192C`, `#1E3A8A`) and Vibrant Blue (`#2563EB`)
* **Neutral Backgrounds**: Crisp White (`#FFFFFF`) and Soft Slate (`#F8FAFC`)
* **Accent**: Elegant Warm Gold (`#F59E0B`, `#D97706`)

---

## Technology Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Database & Cloud**: [Google Cloud Firestore](https://firebase.google.com/docs/firestore) & Firebase SDK
* **Icons**: [Lucide React](https://lucide.dev/)
* **Optimization**: Next.js `<Image />` for responsive media

---

## Features

* **Responsive Navigation**: Sticky navbar with active route indicator, mobile drawer menu, and quick "Apply Now" triggers.
* **Homepage**: High-impact hero with dual CTAs, 10 multidisciplinary course category cards, institutional value pillars, featured courses, visual learning areas showcase, and conversion CTA.
* **About Page**: Institute mission, vision, practical project-based training methodology, and program exploration.
* **Course Catalog (`/courses`)**:
  * Real-time text search across title, description, and module contents.
  * Category pill filter covering all 10 multidisciplinary domains.
  * Level filtering (Beginner, Intermediate, Advanced, All Levels).
  * Study mode filtering (In Person, Online, Hybrid).
  * Live result counts, clear-all action, and polished empty states.
* **Dynamic Course Details (`/courses/[slug]`)**:
  * Dynamic SEO metadata generation (`generateMetadata`).
  * Comprehensive module syllabus breakdown.
  * Learning outcomes checklist and prerequisites.
  * Quick fee, duration, mode, and schedule highlights.
  * Pre-filled inquiry trigger routing directly into admissions form.
  * Related courses recommendations from the same discipline.
* **Contact & Admissions (`/contact`)**:
  * Contact info cards (Address, Phone, Email, Office Hours).
  * Validated interactive inquiry form writing directly to Cloud Firestore.
  * Pre-selection of course interest from URL query parameters.
  * Loading, success feedback, and auto-reset mechanisms.
  * Campus map locator with Google Maps link.
* **SEO Ready**: Dynamic XML `sitemap.ts`, `robots.ts`, OpenGraph metadata, and structured headings.
* **Zero-Config Fallback**: Fully functional out of the box with rich multidisciplinary sample data even before Firebase keys are added.

---

## 1. Requirements

* **Node.js**: v18.18.0 or newer (v20+ recommended)
* **npm**: v9+ or equivalent package manager
* **Firebase Account**: (Optional for local testing; required for live Cloud Firestore syncing)

---

## 2. Installation

Clone or download this repository, then install project dependencies:

```bash
cd TopTrainingInstitute
npm install
```

---

## 3. Firebase Project Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Create a project** (or select an existing Google Cloud project).
3. Disable or enable Google Analytics according to your preference and create the project.
4. Under project overview, add a **Web app** (`</>` icon) named `top-training-institute`.
5. Copy the Firebase configuration object provided in the console.

---

## 4. Environment Variables

Duplicate the template file `.env.example` to create `.env.local`:

```bash
cp .env.example .env.local
```

Open `.env.local` and paste your credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef...

# Production site URL for SEO sitemap & canonical links
NEXT_PUBLIC_SITE_URL=https://toptraininget.com
```

> **Note**: If `.env.local` is omitted, the application runs seamlessly in **Demo Mode**, utilizing high-quality static course data and local simulated inquiry submissions.

---

## 5. Creating Cloud Firestore

1. In the Firebase Console sidebar, navigate to **Build** > **Firestore Database**.
2. Click **Create database**.
3. Choose your database location closest to your audience (e.g. `us-central1`, `europe-west1`).
4. Start in **Production mode** (security rules will be applied in the next step).

### Database Collections

* `courses`: Stores published and draft course documents.
* `inquiries`: Stores incoming admissions inquiries submitted from the website contact form.

---

## 6. Firestore Security Rules

Deploy the included `firestore.rules` file to protect student inquiry privacy and restrict course updates to administrators.

From the Firebase CLI:

```bash
firebase deploy --only firestore:rules
```

Or copy the contents of `firestore.rules` directly into **Firestore Database** > **Rules** in the Firebase Console:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /courses/{courseId} {
      allow read: if resource.data.published == true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }

    match /inquiries/{inquiryId} {
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
      allow create: if request.resource.data.keys().hasAll([
        'fullName', 'email', 'phone', 'courseInterest', 'subject', 'message', 'status', 'createdAt'
      ])
      && request.resource.data.fullName is string
      && request.resource.data.fullName.size() >= 2
      && request.resource.data.email is string
      && request.resource.data.email.matches('^.+@.+\\..+$')
      && request.resource.data.phone is string
      && request.resource.data.phone.size() >= 5
      && request.resource.data.status == 'new'
      && request.resource.data.createdAt == request.time;
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## 7. Running Locally

Start the Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 8. Building for Production

Compile and validate the production bundle:

```bash
npm run build
```

Then start the production server locally:

```bash
npm run start
```

---

## 9. Deploying the Application

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and import your project repository.
3. In **Environment Variables**, add the `NEXT_PUBLIC_FIREBASE_*` variables from `.env.local`.
4. Click **Deploy**. Vercel will build and distribute the site globally with edge caching.

### Deploying to Firebase App Hosting / Cloud Run

1. Initialize Firebase App Hosting:
   ```bash
   firebase apphosting:backends:create
   ```
2. Link your GitHub repository and configure build environment variables in the Firebase Console.

---

## Project Structure

```text
TopTrainingInstitute/
├── .env.example
├── firestore.rules
├── README.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── courses/page.tsx
│   │   ├── courses/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── FeaturedCourses.tsx
│   │   │   ├── LearningAreas.tsx
│   │   │   └── CTASection.tsx
│   │   ├── courses/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseGrid.tsx
│   │   │   ├── CourseFilters.tsx
│   │   │   └── CoursesCatalogClient.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── MapPlaceholder.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Input.tsx
│   │       ├── Textarea.tsx
│   │       ├── Select.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── EmptyState.tsx
│   │       └── SectionHeader.tsx
│   ├── lib/
│   │   ├── firebase/
│   │   │   ├── config.ts
│   │   │   ├── firestore.ts
│   │   │   └── seed.ts
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── categories.ts
│       └── fallback-courses.ts
```

---

## License

All rights reserved &copy; Top Training Institute.
