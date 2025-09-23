# Repository Guidelines

## Project Structure & Module Organization

The monorepo is managed by pnpm and Turbo. Shared config packages live under `packages/`, each publishing either a `src/` directory or a single `index.cjs`. `@jtfox/eslint-config` is the only package with source today; TypeScript-focused defaults reside in `packages/eslint-config/src/base.js`, while framework-specific layers such as `react.js` extend it. Add new rule sets by mirroring that directory structure and updating the package `exports` map. Workspace-level metadata (pnpm workspaces, Turbo pipeline) resides in `pnpm-workspace.yaml` and `turbo.json`.

## Build, Test, and Development Commands

- `pnpm install` – install dependencies across the workspace; use the locked pnpm version pinned in `package.json`.
- `pnpm lint` – executes `turbo run lint`, invoking each package’s lint task; ensure new packages register a lint script.
- `pnpm build` – runs `turbo run build` to emit distributable artifacts (e.g., `dist/` or `lib/` directories).
- `pnpm test` – triggers `turbo run test`; add smoke tests (e.g., ESLint CLI against a fixture) before enabling CI.

## Coding Style & Naming Conventions

ESLint rules favor explicit TypeScript semantics: `@typescript-eslint/no-floating-promises` and `unused-imports/no-unused-imports` are enforced as errors, and imports are alphabetized with `import/order`. React-specific overrides disable legacy React globals and sort JSX props. Keep new rule files in ESM format, 2-space indented, and export default objects. Prettier and Stylelint configs should surface through `index.cjs`; expose opinionated defaults but allow consumers to extend them.

## Testing Guidelines

Whenever you add or change a rule set, provide fixtures under a `tests/` folder inside the package and validate them through the package’s `test` script. Aim for coverage of both passing and failing cases, and prefer running `pnpm --filter @scope/package test` locally before opening a PR. For lint rules, lightweight snapshots of CLI output are sufficient.

## Commit & Pull Request Guidelines

Follow Conventional Commits (`feat:`, `fix:`, `chore:`); the existing history (`feat: :tada:`) sets the precedent. Within PRs, describe the motivation, surface notable rule changes, and include copy-pasteable upgrade notes. Link to any tracked issues, and attach before/after lint results when changing rule severities. Request review from another maintainer before merging.
