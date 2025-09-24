import { builtinModules } from "node:module";

const RUNTIME_EXTERNAL = [
  "@eslint/eslintrc",
  "@eslint/js",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-n",
  "eslint-plugin-package-json",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-sonarjs",
  "eslint-plugin-unicorn",
  "eslint-plugin-unused-imports",
  "eslint-plugin-yml",
  "globals",
  "neostandard",
  "typescript-eslint",
];

const externals = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  ...RUNTIME_EXTERNAL,
];

export default {
  input: "index.js",
  external: (id) =>
    externals.includes(id) || externals.some((d) => id.startsWith(d + "/")),
  output: [
    { file: "dist/index.mjs", format: "esm" },
    { file: "dist/index.cjs", format: "cjs", exports: "default" },
  ],
};
