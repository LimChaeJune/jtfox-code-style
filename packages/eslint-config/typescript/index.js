import tseslint from "typescript-eslint";
import rules from "./rules/index.js";

export default tseslint.config(
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  ...rules
);
