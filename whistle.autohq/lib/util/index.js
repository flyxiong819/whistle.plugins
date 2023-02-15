const to = require('./to');

async function jsonParse(str) {
  return await to(new Promise((res, rej) => {
    try {
      res(JSON.parse(str));
    } catch (err) {
      rej(err);
    }
  }));
}

function parse(tmp, obj) {
  return tmp.replace(/\$\{([^\}]+)\}/g, (...arg) => {
    return obj[arg[1]];
  });
}

function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]'
}

/**
 * 把object转换成get请求的参数
 * 比如{a:1,b:2}转换成"a=1&b=2"
 * @param obj
 * @param shouldCheckuestionMark 是否要加问号
 */
function objectToGetParams(obj, shouldCheckuestionMark = true) {
  if (!isObject(obj)) return '';
  const str = Object.keys(obj).map(key => {
    return `${key}=${obj[key]}`
  }).join('&');
  return shouldCheckuestionMark ? `?${str}` : str;
}

function getUrlParam (name, url) {
  var u = url || '',
    reg = new RegExp('(^|&)' + name + '=([^&#]*)(&|$|#)'),
    r = u.substr(u.indexOf('\?') + 1).match(reg);
  return r != null ? r[2] : '';
}

function getUrlParamObj (url) {
  if (!url) return null;
  let res = {};
  const a = url.substr(url.indexOf('\?') + 1).split('&');
  a.forEach(i => {
    let pArr = i.split('=');
    if (pArr[0]) res[pArr[0]] = decodeURIComponent(pArr[1]);
  });
  return res;
}

module.exports = {
  jsonParse,
  parse,
  objectToGetParams,
  getUrlParam,
  getUrlParamObj
}