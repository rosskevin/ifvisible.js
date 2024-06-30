import tseslint from 'typescript-eslint'

import af from '@alienfast/eslint-config'

// npx @eslint/config-inspector
export default tseslint.config(
  {
    name: 'project',
    extends: [...af.configs.recommended],
  },
  {
    ignores: ['eslint.config.mjs', 'jest.config.cjs', 'tsup.config.ts', 'docs/index.js*'],
  },
)
