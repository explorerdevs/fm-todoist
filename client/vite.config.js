import react from "@vitejs/plugin-react";
import dns from "dns";
import { defineConfig } from "vite";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
