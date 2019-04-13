const fs = require('fs');
const path = require('path');
const eggScript = path.resolve('node_modules/egg-scripts/bin/egg-scripts.js');
const packageJson = path.resolve('package.json');
const baseUrl = path.resolve('node_modules/eggless/built-in');

// copy package.json
fs.copyFileSync(packageJson, baseUrl.concat('/package.json'));

// refactor argv
const [node, script, command, ...rawOptions] = process.argv;
process.argv = [node, script, command, ...rawOptions.filter(option => /^--/.test(option))];

// push baseUrl
process.argv.push(baseUrl);

// next
require(eggScript);
