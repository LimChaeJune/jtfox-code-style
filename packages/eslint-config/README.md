# @cj.lim/eslint-config

cjlim eslint config package

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
