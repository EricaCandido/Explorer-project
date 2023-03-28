import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables/_colors.scss";
      @import "./src/styles/variables/_layouts.scss";
      @import "./src/styles/variables/_typography.scss";
      @import "./src/styles/variables/_animations.scss";
      @import "./src/styles/variables/_reset.scss";
      `,
      },
    },
  },
});
