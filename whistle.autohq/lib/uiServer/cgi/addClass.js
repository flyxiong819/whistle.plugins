const { request } = require('../../util/request');
const { objectToGetParams, getUrlParamObj } = require('../../util');
const { baseUrl, getHqParams } = require('../../util/haiqueBaseParams');

module.exports = async (ctx) => {
  const headers = Object.assign({}, ctx.headers);
  delete headers.host; // 请求头不能包含host 不然axios构造请求失败502
  const params = getUrlParamObj(ctx.request.url);
  const data = getHqParams(params);
  console.log(data);
  const getUrl = `${baseUrl}//api_insert_event_class${objectToGetParams(data)}`;
  console.log(getUrl);
  await request({
    url: getUrl,
    headers,
    proxy: false,
  }, ctx, true);
}; 