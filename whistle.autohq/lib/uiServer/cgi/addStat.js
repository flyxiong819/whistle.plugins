const urlN = require('url');
const { request } = require('../../util/request');
const { objectToGetParams, getUrlParamObj } = require('../../util');
const { baseUrl, getHqParams } = require('../../util/haiqueBaseParams');

module.exports = async (ctx) => {
  const headers = Object.assign({}, ctx.headers);
  delete headers.host;
  const url = `${baseUrl}api_add_report_manage`;
  const params = getUrlParamObj(ctx.request.url);
  const data = getHqParams(Object.assign({ appkey: 'rta_access' }, params));
  console.log(data);
  const getUrl = `${url}${objectToGetParams(data)}`;
  console.log(getUrl);
  // const serverURL = urlN.parse(getUrl);
  // console.log('serverURL', serverURL);
  await request({
    // method: 'post',
    url: getUrl,
    headers,
    // data: params,
    proxy: false,
  }, ctx, true);
}; 