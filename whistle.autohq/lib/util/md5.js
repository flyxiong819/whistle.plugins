const _md5 = require('md5');
const cacheMap = {};

module.exports = function md5(key) {
    if (cacheMap[key]) {
        return cacheMap[key]
    }
    cacheMap[key] = _md5(key);
    return cacheMap[key];
}
