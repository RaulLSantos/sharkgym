import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { copyFileSync } from "node:fs";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      name: "github-pages-fallback",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
      },
    },
  ],
  resolve: {
    alias: [{ find: "@/", replacement: `${path.resolve(__dirname, "src")}/` }],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
