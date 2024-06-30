import tseslint from 'typescript-eslint'

import { configs } from './src/index.js'

export default tseslint.config({
  name: 'project',
  extends: [...configs.recommended],
})

// export default [{
//     ignores: [
//         "**/.eslintrc.js",
//         "**/dist",
//         "docs/index.js*",
//         "**/node_modules",
//         "**/jest.config.js",
//         "**/rollup.config.js",
//     ],
// }
