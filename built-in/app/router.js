'use strict';

const { router } = require('../lib/config');

module.exports = app => {
  router.forEach(route => {
    const [method, path, controller] = route.split(' ');
    app.router[method](
      path,
      controller.split('.').reduce((next, name) => next[name], app.controller)
    );
  });
};
