import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const importOrderRule = [
    'error',
    {
        alphabetize: {order: 'asc', caseInsensitive: true},
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin', 'object', 'type'],
        pathGroups: [
            {
                pattern: '{react,react-dom}',
                group: 'external',
                position: 'before',
            },
            {
                pattern: '{$*,$*/**}',
                group: 'internal',
                position: 'before',
            },
        ],
    },
];

export default {
    plugins: {import: importPlugin, 'unused-imports': unusedImports},
    rules: {
        /**
         * Enforce a convention in the order of require() / import statements
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
         */
        'import/order': importOrderRule,

        /**
         * In exporting files, this rule checks if there is default export or not
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
         */
        'import/prefer-default-export': 'off',

        /**
         * Disallow specified modules when loaded by import
         * @see https://eslint.org/docs/latest/rules/no-restricted-imports
         */
        'no-restricted-imports': [
            'error',
            {
                name: 'lodash',
            },
        ],

        /**
         * Disallow unused imports
         * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
         */
        'unused-imports/no-unused-imports': 'error',
    },
};
