const path = require('path');
const eggScript = path.resolve('node_modules/egg-scripts/bin/egg-scripts.js');
const builtIn = path.resolve('node_modules/eggless/built-in');

// refactor argv
const [, ...rawOptions] = process.argv.slice(2);
rawOptions.forEach((option, index) => {
  if (!/^--/.test(option)) {
    process.argv.splice(index + 3, 1);
  }
});
process.argv.push(builtIn);

// next
require(eggScript);
