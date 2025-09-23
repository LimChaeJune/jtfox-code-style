import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";

export default [...unicorn.configs.recommended, ...sonarjs.configs.recommended];
