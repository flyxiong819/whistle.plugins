// const request = require('request');
module.exports = (ctx) => {
  const { localStorage } = ctx.req;
  ctx.body = {
    ec: 0,
    active: localStorage.getProperty('active'),
  };
};