require('@js-x/require-yml');
const path = require('path');
const routes = require(path.resolve('routes.yml'));

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555139041628_3714';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: JSON.stringify(routes),
  };

  return {
    ...config,
    ...userConfig,
  };
};
