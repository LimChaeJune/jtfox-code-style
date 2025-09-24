# @cj.lim/eslint-config

cjlim eslint config package

## 설치 방법

```bash
pnpm add @jtfox/eslint-config -D
```

프로젝트 환경에 알맞는 config를 import해 사용합니다.

- typescript - TS로 작성된 환경에서 사용
- react - TS로 작성된 react17+ 환경에서 사용 (neostandard 기준)
- strict - 보다 엄격한 룰을 원하는 환경에서 위 config와 함께 사용 (unicorn/sonarjs)
- packageJson - package.json 파일에서 사용하는 룰을 추가

## 사용 방법

Flat Config (ESLint 9+) 기준 예시입니다.

### 기본 사용 (React + TypeScript)

```js
// eslint.config.js
import cjlim from '@cjlim/eslint-config';

export default [
    // 타입스크립트 기본 규칙
    ...cjlim.configs.typescript,
    // React 규칙 (import / hooks / a11y 포함)
    ...cjlim.configs.react,
];
```

### 더 엄격하게 (strict + packageJson 포함)

```js
import cjlim from '@cjlim/eslint-config';

export default [
    ...cjlim.configs.packageJson, // package.json 전용 규칙
    ...cjlim.configs.typescript,
    ...cjlim.configs.react,
    ...cjlim.configs.strict, // unicorn / sonarjs 등 강화 규칙
];
```

### 부분 선택(React 없이 TS만)

```js
import cjlim from '@cjlim/eslint-config';
export default [...cjlim.configs.typescript];
```

### 특정 규칙만 커스터마이징

```js
import cjlim from '@cjlim/eslint-config';

export default [
    ...cjlim.configs.react,
    {
        rules: {
            'jsx-a11y/heading-has-content': 'error',
        },
    },
];
```

## CLI

package.json에 스크립트를 추가하여 lint 검사를 할 수 있습니다.

```jsonc
// package.json
{
    "scripts": {
        "lint": "eslint '**/*.{js,jsx,ts,tsx,yaml,yml}'",
        "lint:fix": "eslint '**/*.{js,jsx,ts,tsx,yaml,yml}' --fix",
    },
}
```

> [lefthook](https://github.com/evilmartians/lefthook)을 사용해서 commit 또는 push 전에 스타일 확인을 자동화할 것을 권장합니다.

## Integrating with IDE

- code-style에서는 **Formatting을 위해 Prettier**를, **Code-quality를 위해 ESLint**를 사용하고 있습니다. ([Prettier vs. Linters](https://prettier.io/docs/en/comparison))
- Prettier는 [여기](../prettier-config/README.md)를 참고해주세요.
- IDE에서 AutoFix 하기 위해 아래 설정이 필요합니다.

### VSCode

1. [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)을 설치합니다.
2. IDE에서 Command Palette(CMD/CTRL + Shift + P)를 열고 `settings.json`을 입력하여 설정파일을 오픈합니다.
3. 아래 설정을 추가하면 파일 저장시 ESLint rule에 맞게 autofix 할 수 있습니다.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```

#### Typescript Configuration (Recommended)

`@naverpay/eslint-config/typescript` 사용 시, 아래의 설정을 활성화하여 `import type`을 자동화할 것을 권장합니다.

```json
{
    "typescript.preferences.preferTypeOnlyAutoImports": true
}
```

### WebStorm

Settings > Language > JavaScript > Code Quality > ESLint > Automatic ESLint configuration 을 설정합니다.
