'use strict';

// add you build-in plugin here, example:
// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks',
// };

exports.sequelize = {
  enable: false,
  package: 'egg-sequelize'
}

exports.validate = {
  enable: true,
  package: 'egg-validate',
}

exports.cors = {
  enable: true,
  package: 'egg-cors',
}