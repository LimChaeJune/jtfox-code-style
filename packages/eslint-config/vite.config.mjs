import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      name: "@jtfox/eslint-config",
      formats: ["es"],
      fileName: (format) => `eslint-config.${format}.js`,
    },
    rollupOptions: {
      external: ["eslint"],
      output: {
        globals: { eslint: "ESLint" },
      },
    },
  },
});
