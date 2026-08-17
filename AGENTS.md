# Repository Instructions

## Setup And Checks

- This repository uses Yarn v1 (`yarn.lock`). Install dependencies with `yarn install --ignore-engines`; the legacy Jasmine dependency has an unnecessarily restrictive Node engine declaration.
- Run all 153 specs with `yarn test`.
- Run one spec file with `yarn test spec/lucky-case-string-spec.js` (replace the path as needed).
- There are no configured lint, formatter, or typecheck scripts.

## Architecture And Tests

- `src/lucky-case/lucky-case.js` is the main CommonJS implementation exported as `lucky-case`; `src/lucky-case/string.js` is the opt-in `lucky-case/string` entry point and globally monkey-patches `String.prototype` when required.
- Static API behavior belongs in `spec/lucky-case-spec.js`; monkey-patched behavior belongs in `spec/lucky-case-string-spec.js`.
- Jasmine randomization is disabled in `spec/support/jasmine.json`. Requiring `string.js` mutates global state, so preserve test isolation/order unless the patching setup is redesigned.
- `string.js` duplicates method declarations in its `//<!-- DOC -->//` JSDoc-only block and in the real `Object.assign` patch below it. Keep both sections and the static API in sync when changing the public API.

## Generated And Release Files

- `yarn build` is a release mutation, not a routine verification command: it increments the patch version in both `package.json` and `LuckyCase._version`, then rewrites tracked bundles in `dist/`.
- The build concatenates source and strips exact `//<!-- MODULE -->//` and `//<!-- DOC -->//` blocks for browser bundles; preserve those markers and their intent.
- `yarn doc` rewrites the tracked Markdown API references in `doc/`. Regenerate docs only when JSDoc-facing API changes, then inspect the generated diff.
