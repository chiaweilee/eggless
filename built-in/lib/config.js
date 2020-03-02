'use strict';

require('@js-x/require-yml');

const assert = require('assert');
const isobject = require('isobject');
const debug = require('debug')('gge');
const path = require('path');
const merge = require('deepmerge');
const config = require(path.resolve('app.yml'));

const ob = it => !it || isobject(it);
const ar = it => !it || Array.isArray(it);

const defaultConfig = {
  config: {
    default: {
      compress: {},
      static: {
        prefix: '/public/',
        dir: 'public',
      },
    },
    prod: {},
    unittest: {},
    local: {},
  },
  router: [],
  plugin: {
    compress: {
      enable: true,
      package: 'egg-compress',
    },
  },
};

const env = ['default', 'prod', 'local', 'unittest'];

assert(ob(config), 'app configuration should be an object.');
assert(ob(config.plugin), 'plugin configuration should be an object.');
assert(ob(config.config), "'config' of app configuration should be an object.");
env.forEach(e => {
  assert(ob(config.config[e]), `'config.${e}' of app configuration should be an object.`);
});
assert(ar(config.router), "'router' of app configuration should be an array.");

const c = merge(defaultConfig, config);

env.forEach(e => {
  if (isobject(c.config[e].static) && typeof c.config[e].static.dir === 'string') {
    c.config[e].static.dir = path.resolve(c.config[e].static.dir);
  }
});

debug('config loaded with '.concat(JSON.stringify(c)));

module.exports = c;
