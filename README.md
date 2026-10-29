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


The app will open at 'https://dailyverse-swart.vercel.app/'


> 💡 **Demo Mode:** The app works without Firebase configuration! It uses seed data for products and allows demo login with any credentials.


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



---

## 📝 Notes

- The app **works without Firebase** using local seed data
- Cart and wishlist persist in **localStorage**
- Dark mode preference persists in **localStorage**
- Search works across product names, descriptions, and categories
- All product images are from **Unsplash** (free to use)

---
