require('@js-x/require-yml');
const path = require('path');
const routes = require(path.resolve('routes.yml'));

module.exports = app => {
  routes.forEach(route => {
    const [method, path, controller] = route.split(' ');
    app.router[method](
      path,
      controller.split('.').reduce((next, name) => next[name], app.controller)
    );
  });
};
