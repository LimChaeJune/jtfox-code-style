import tseslint from 'typescript-eslint';
import rules from './rules/index.js';

const base = tseslint.config(rules, tseslint.configs.recommended, tseslint.configs.stylistic);

const TS_FILE_GLOB = ['**/*.{ts,tsx,mts,cts}'];

export default base.map((cfg) => ({
    ...cfg,
    files: cfg.files ?? TS_FILE_GLOB,
    languageOptions: {
        ...cfg.languageOptions,
        parser: (cfg.languageOptions && cfg.languageOptions.parser) || tseslint.parser,
    },
}));
