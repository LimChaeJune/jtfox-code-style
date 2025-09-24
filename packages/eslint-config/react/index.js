import globals from 'globals';

import configs from './configs.js';
import rules from './rules/index.js';

export default [
    ...configs,
    ...rules,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.vitest,
                ...globals.es2023,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
];
