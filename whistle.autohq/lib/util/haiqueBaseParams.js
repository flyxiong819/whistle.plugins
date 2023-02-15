const md5 = require('./md5');

// const baseUrl = 'http://9.135.8.155:8081/hqdev/cgi-bin/'; //dev
// const baseUrl = `http://fitdev.oa.com/hq/cgi-bin/`;
const baseUrl = 'http://9.135.8.155:8081/hq/cgi-bin/';
// const groupId = '10076'; //dev
const groupId = '10078';

function getHqParams(params) {
  const timeStamp = new Date().getTime();
  const baseParams = {
    group_id: groupId //香港钱包
  };
  const signParams = Object.assign({}, params || {}, baseParams);
  const resParams = Object.assign({}, signParams, {
    app_id: 'haique_system',
    sign: getSign(timeStamp, signParams),
    time_stamp: timeStamp,
  });
  return encodeParams(resParams);
}

function encodeParams(params) {
  let newParams = {}
  Object.keys(params).forEach(key => {
    newParams[key] = encodeURIComponent(params[key]);
  });
  return newParams;
}

//防篡改签名 md5(timestamp+appSecret + k1v1k2v2k3v3) (k1v1不要包含app_id, app_secret, sign, timestamp参数的其他所有参数的字典排序) timestamp: 正负5分钟有效
function getSign(timeStamp, params) {
  const appSecret = '938fe86ec4ad229b6db9ec4563a8cc8c';
  const paramStr = formatParams(params);  //k1v1k2v2k3v3
  const key = `${timeStamp}${appSecret}${paramStr}`;
  // const sign = 'eddd7295faa037dea034d1e4299a408a';
  const sign = md5(key);
  console.log('key', key);
  console.log('sign', sign);
  return sign;
}

function formatParams(params) {
  if (!params) return '';
  let arr = [];
  Object.keys(params).forEach((key) => {
    arr.push(`${key}${params[key]}`);
  });
  arr = arr.sort();
  console.log(arr);
  return arr.join('');
}

module.exports = {
  baseUrl,
  getHqParams,
}