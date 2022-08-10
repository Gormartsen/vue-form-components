import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "#": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: "index.js",
      name: "VueFormComponents",
      // the proper extensions will be added
      fileName: "vue-form-components",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      plugins: [
        commonjs(),
        externalGlobals({
          vue: "Vue",
          "vue-router": "VueRouter",
        }),
      ],
      output: {
        format: "es",
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
