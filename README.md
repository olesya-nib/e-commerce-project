# Project "Online Store"

An e-commerce app built with React as part of a React learning project. It fetches real products from the [Fake Store API](https://fakestoreapi.com/) and supports browsing, searching, filtering, product pages, and a persistent shopping cart.

**Stack:** React · Vite · TypeScript · React Router · Tailwind CSS · ESLint

---

##  React Concepts Applied

- **React basics** — components, props, `useState`, `useEffect`, and fetching data from an API.
- **Routing and global state** — React Router for pages, and the Context API (`CartContext` + `useCart()`) so the cart is shared everywhere without prop drilling.
- **Real-world behaviour** — `try/catch` error handling with a fallback UI, client-side search and filtering, and saving the cart to `localStorage`.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run it:

1. `npm install`
2. `npm run dev`

> Remember to install Tailwind before!

`npm install tailwindcss @tailwindcss/vite`
