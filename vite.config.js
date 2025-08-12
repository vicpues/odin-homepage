import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { setupPlugins } from "@responsive-image/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        setupPlugins({
            include: /^[^?]+\.jpg\?.*responsive.*$/,
            quality: 90,
            format: ["jpg", "webp"],
            w: [240, 300, 400, 500],
            styles: "external",
            lqip: { type: "inline" },
        }),
    ],
});
