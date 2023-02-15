const fs = require('fs');
const path = require('path');
const { check: checkFilter, update: updateFilter } = require('./util/filter');
const { getUrlParam, getUrlParamObj } = require('./util');

module.exports = (server, { storage }) => {
  let sessions = [];
  updateFilter('pingtas.qq.com');  //只分析统计上报的接口

  server.on('request', (req, res) => {
    const active = storage.getProperty('active');
    if (!active) { //是否有勾选开关
      return;
    }
    if (!checkFilter(req.originalReq.url)) {
      return;
    }
    req.getSession((s) => {
      if (!s) {
        return;
      }
      try {
        sessions.push({
          stat: getUrlParam('url', s.url),
          data: getUrlParamObj(s.url),
          ext: decodeURIComponent(getUrlParam('r5', s.url))
        });
      } catch (e) {
        console.log(e);
      }
      const text = JSON.stringify(sessions.slice(), null, ' ');
      storage.setProperty('statArr', text);  //存储数据
    });
  });
};
