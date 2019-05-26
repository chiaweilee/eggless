'use strict';

const path = require('path');
const fs = require('fs');

const debug = require('debug')('gge');

const local = fs.existsSync(path.resolve('local'));

if (local) {
  debug('running in local dev mode..');
}

const eggScript = path.resolve('node_modules/egg-scripts/bin/egg-scripts.js');
const builtIn = path.resolve(!local ? 'node_modules/gge/built-in' : 'built-in');

debug('running built-in at '.concat(builtIn));

// refactor argv
const [, ...rawOptions] = process.argv.slice(2);
rawOptions.forEach((option, index) => {
  if (!/^--/.test(option)) {
    debug("unknown argv '".concat(option, "' removed"));
    process.argv.splice(index + 3, 1);
  }
});
process.argv.push(builtIn);

debug('with argv: '.concat(process.argv.slice(2)));

// next
require(eggScript);
