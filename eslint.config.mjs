import cjlim from '@cj.lim/eslint-config';

export default [
    {
        ignores: ['**/dist/**'],
    },
    ...cjlim.configs.packageJson,
    ...cjlim.configs.typescript,
    ...cjlim.configs.strict,
];
