
module.exports = (server/* , options */) => {
  server.on('request', (req, res) => {
    const headers = req.headers;
    let rules = '';
    if (/html/.test(headers.accept)) {
      rules = '* htmlAppend://assets/bi-valid.html';
    }
    res.end(`
    ${rules}
    `);
  });
};
