# @jtfox/eslint-config

jtfox eslint config package

## 설치 방법

```bash
pnpm add @jtfox/eslint-config -D
```

프로젝트 환경에 알맞는 config를 import해 사용합니다.

typescript - TS로 작성된 환경에서 사용
react - TS로 작성된 react17+ 환경에서 사용 (neostandard 기준)
strict - 보다 엄격한 룰을 원하는 환경에서 위 config와 함께 사용 (unicorn/sonarjs)
packageJson - package.json 파일에서 사용하는 룰을 추가

## 사용 방법

Flat Config (ESLint 9+) 기준 예시입니다.

### 기본 사용 (React + TypeScript)

```js
// eslint.config.js
import jtfox from "@jtfox/eslint-config";

export default [
  // 타입스크립트 기본 규칙
  ...jtfox.configs.typescript,
  // React 규칙 (import / hooks / a11y 포함)
  ...jtfox.configs.react,
];
```

### 더 엄격하게 (strict + packageJson 포함)

```js
import jtfox from "@jtfox/eslint-config";

export default [
  ...jtfox.configs.typescript,
  ...jtfox.configs.react,
  ...jtfox.configs.strict, // unicorn / sonarjs 등 강화 규칙
  ...jtfox.configs.packageJson, // package.json 전용 규칙
];
```

### 부분 선택(React 없이 TS만)

```js
import jtfox from "@jtfox/eslint-config";
export default [...jtfox.configs.typescript];
```

### 특정 규칙만 커스터마이징

```js
import jtfox from "@jtfox/eslint-config";

export default [
  ...jtfox.configs.react,
  {
    rules: {
      "jsx-a11y/heading-has-content": "error",
    },
  },
];
```

## Peer Dependencies

이 패키지는 `eslint >= 9`만 peer 로 강제합니다. React/TypeScript 프로젝트에서는 별도로 다음을 설치해야 할 수 있습니다:

```bash
pnpm add -D typescript typescript-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-unused-imports
```

strict / packageJson 를 쓸 경우:

```bash
pnpm add -D eslint-plugin-unicorn eslint-plugin-sonarjs eslint-plugin-package-json
```

필요한 플러그인만 선택 설치 가능합니다.
