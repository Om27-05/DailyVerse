# 🛍️ DailyVerse — Modern eCommerce Platform

A premium, fully responsive eCommerce website built with **React**, **Vite**, **Tailwind CSS**, **Firebase**, and **Redux Toolkit**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-10-orange?logo=firebase)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux)

---

## ✨ Features

### Core
- 🏠 **Homepage** — Hero banner, featured products, categories, newsletter
- 🛒 **Product Listing** — Filters (price, category, rating), sorting, grid/list view
- 📦 **Product Detail** — Image gallery, reviews, add-to-cart, wishlist, share
- 🛍️ **Shopping Cart** — Update quantities, remove items, promo codes, order summary
- ❤️ **Wishlist** — Save & manage favorite products
- 🔍 **Search** — Live autocomplete with product suggestions

### Auth & Backend
- 🔐 **Authentication** — Firebase login & signup (with demo mode fallback)
- 🗄️ **Firestore Database** — Products, orders, users, reviews
- 💳 **Checkout** — Multi-step checkout with Stripe test mode

### Admin & Extras
- 📊 **Admin Dashboard** — Stats, product management, order management
- 🌙 **Dark Mode** — Toggle with system preference detection
- 📱 **Fully Responsive** — Mobile-first design for all devices

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ (Download from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Navigate to project directory
cd Demo

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will open at `http://localhost:3000`.

### Firebase Setup (Optional)

To enable real authentication and database:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → Email/Password
4. Enable **Cloud Firestore**
5. Copy your config and paste in `src/firebase/config.js`

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

> 💡 **Demo Mode:** The app works without Firebase configuration! It uses seed data for products and allows demo login with any credentials.

---

## 📁 Project Structure

```
Demo/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── admin/          # Admin dashboard components
│   │   ├── auth/           # Login & signup forms
│   │   ├── cart/           # Cart item component
│   │   ├── home/           # Hero, categories, featured, newsletter
│   │   ├── layout/         # Navbar, footer, layout wrapper
│   │   ├── products/       # Product card, filters, sort
│   │   └── ui/             # Reusable UI (search, rating, toggle, toast)
│   ├── data/
│   │   └── seedData.js     # Demo product & category data
│   ├── firebase/
│   │   ├── config.js       # Firebase initialization
│   │   └── services.js     # Firestore CRUD operations
│   ├── hooks/
│   │   └── useAuth.js      # Firebase auth listener hook
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Admin.jsx
│   ├── store/
│   │   ├── store.js        # Redux store config
│   │   ├── cartSlice.js    # Cart state management
│   │   ├── wishlistSlice.js
│   │   ├── productSlice.js
│   │   ├── authSlice.js
│   │   └── themeSlice.js
│   ├── App.jsx
│   ├── index.css           # Global styles & Tailwind
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI library |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first CSS framework |
| Redux Toolkit | State management |
| React Router 6 | Client-side routing |
| Firebase Auth | User authentication |
| Cloud Firestore | NoSQL database |
| Lucide React | Icon library |
| React Hot Toast | Notifications |
| Stripe (optional) | Payment processing |

---

## 👥 Team Collaboration Guide

### Team Member 1: UI/UX Designer
**Files:** `src/index.css`, `tailwind.config.js`, all component JSX styling
- Design the visual system (colors, typography, spacing)
- Create responsive layouts
- Implement dark mode theme
- Add animations and micro-interactions
- Ensure accessibility

### Team Member 2: Frontend Developer
**Files:** `src/components/`, `src/pages/`, `src/store/`
- Build React components and pages
- Implement Redux state management
- Add search, filters, and sorting logic
- Set up React Router navigation
- Handle form validation

### Team Member 3: Backend Developer
**Files:** `src/firebase/`, `src/hooks/`
- Set up Firebase project and config
- Implement authentication flow
- Design Firestore data schema
- Create CRUD services
- Integrate Stripe payments

### Team Member 4: Testing & Deployment
**Files:** `package.json`, CI/CD config
- Write unit and integration tests
- Set up CI/CD pipeline
- Performance optimization
- Deploy to Firebase Hosting / Vercel
- Accessibility and SEO audits

### Git Workflow
```bash
# Create feature branches
git checkout -b feature/auth      # Member 3
git checkout -b feature/ui        # Member 1
git checkout -b feature/products  # Member 2
git checkout -b feature/testing   # Member 4

# Merge to main with PR reviews
```

---

## 🧪 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

---

## 📝 Notes

- The app **works without Firebase** using local seed data
- Cart and wishlist persist in **localStorage**
- Dark mode preference persists in **localStorage**
- Search works across product names, descriptions, and categories
- All product images are from **Unsplash** (free to use)

---

## 📄 License

MIT License — Feel free to use for educational and commercial purposes.
