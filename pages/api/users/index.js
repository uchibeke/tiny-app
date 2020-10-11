const { getUsers } = require('../../../utils/airtable');

module.exports = (req, res) => {
  Promise.resolve(getUsers())
    .then((data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({}));
    });
};
