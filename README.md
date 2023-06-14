# FE TESTING WORKSHOPS

Repository that helps me in presenting: good practices, risks, popular mistakes and proper configuration.

## Structure:

- src
  - components
    - componentFolder
      - componentFile.tsx
      - componentFile.test.tsx
  - utils
    - featureFolder
      - featureFile.ts
      - featureFile.test.ts

## Important files

- `jest.config.ts` - initialized with `npx ts-jest config:init`, changed to `.ts` as shown here (https://jestjs.io/docs/configuration) and changed `testEnvironment` to `jsdom`
  (see possibilities: https://jestjs.io/docs/configuration#testenvironment-string)
- `jest.setup.js`

NOTE: you can define `jest.config` within `package.json` by putting it inside `jest` key, see:
https://jestjs.io/docs/configuration

## Config files

### Prettier

Config file as `.js` to make adding comments possible.

### ESLint

Initial config && dependencies added automatically via `npx eslint --init`.

Config file as `.js` to make adding comments possible.

### TypeScript reset

If you wondering what's `reset.d.ts` then see: https://github.com/total-typescript/ts-reset

### TypeScript config

Based on `@tsconfig/strictest` - https://github.com/tsconfig/bases

## FAQ

### Why pnpm?

Because it's significantly faster than npm or yarn: https://pnpm.io/

### Why webpack?

Because it's a part of most popular testing setup when Jest is also used.

### Why ts-jest?

To be able to use TypeScript in tests.

### Why ts-node?

To be able to write (and thus validate) webpack config in TypeScript: https://webpack.js.org/configuration/configuration-languages/

### Why ts-loader instead of babel-loader?

I don't need to support https://github.com/browserslist/browserslist in this project, so I can use TypeScript directly as shown in webpack docs: https://webpack.js.org/guides/typescript/