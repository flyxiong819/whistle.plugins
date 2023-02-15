// For help see https://github.com/ZijianHe/koa-router#api-reference

const active = require('./cgi/active');
const getSettings = require('./cgi/getSettings');
const getReports = require('./cgi/getReports');
const queryReportmanage = require('./cgi/queryReportmanage');
const queryClass = require('./cgi/queryClass');
const addStat = require('./cgi/addStat');
const addRule = require('./cgi/addRule');
const addClass = require('./cgi/addClass');
const addSubgroup = require('./cgi/addSubgroup');

module.exports = (router) => {
  router.post('/cgi-bin/active', active);
  router.get('/cgi-bin/add-stat', addStat);
  router.get('/cgi-bin/add-rule', addRule);
  router.get('/cgi-bin/add-class', addClass);
  router.get('/cgi-bin/add-subgroup', addSubgroup);
  router.get('/cgi-bin/get-settings', getSettings);
  router.get('/cgi-bin/get-reports', getReports);
  router.get('/cgi-bin/query-reportmanage', queryReportmanage);
  router.get('/cgi-bin/query-class', queryClass);
};
