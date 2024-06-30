import tseslint from 'typescript-eslint'

import { configs } from '@alienfast/eslint-config'

// npx @eslint/config-inspector
export default tseslint.config({
  name: 'project',
  extends: [
    ...configs.recommended
    // ...configs.js
  ],

},
{      ignores: [
        "tsup.config.ts",
    //     "docs/index.js*",
        // "**/jest.config.js",
        // "**/rollup.config.js",
    ],

})

