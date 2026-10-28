/**
 * vite.config.js
 * This file configures Vite for the React project.
 * It includes the React plugin for seamless integration.
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Vite configuration
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
