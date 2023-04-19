'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('fancourier-strapi')
      .service('myService')
      .getWelcomeMessage();
  },
});
