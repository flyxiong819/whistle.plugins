const axios = require('axios');

const NGN_PROXY = {
  host: '127.0.0.1',
  port: 12639,
};
let existsNgn;

const checkNgn = (e) => {
  let done;
  const execCb = (err) => {
    if (!done) {
      done = true;
      existsNgn = !err;
      setTimeout(checkNgn, 1000);
    }
  };
  axios('http://127.0.0.1:12639/').then((res) => {
    if (res.status === 200) {
      execCb(null);
    } else {
      execCb(true);
    }
  }, e ? execCb : checkNgn);
};

checkNgn();

const request = async (options, ctx, isRules) => {
  const res = {
    body: '',
    headers: {},
  };
  options = Object.assign({
    timeout: 2500,
    withCredentials: true,
  }, options);
  if (existsNgn) {
    options.proxy = NGN_PROXY;
  }
  const response = await axios(options).catch((err=>{
    console.log('request err',err);
  }));
  // console.log('request response', response);
  res.status = response.status;
  res.headers = response.headers;
  res.body = response.data;
  if (ctx) {
    ctx.status = res.status;
    ctx.response.headers = res.headers;
    if (existsNgn && isRules && typeof res.body === 'string') {
      const body = res.body.split(/[\r\n]+/).map((line) => {
        if (line.indexOf('enable://hide|proxyHost') === -1) {
          return line.replace(/internal-proxy:\/\/([^\s#]+)/, 'proxy://127.0.0.1:12639 host://$1 lineProps://proxyHost|proxyTunnel');
        }
        return line.replace(/internal-proxy:\/\/([^\s#]+)/, 'proxy://127.0.0.1:12639 host://$1');
      });
      body.push('* proxy://127.0.0.1:12639 excludeFilter://127.0.0.1 excludeFilter://localhost');
      res.body = body.join('\n');
    }
    ctx.body = res.body;
  }
  return res;
};

exports.request = request;