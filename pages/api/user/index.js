const { getUser } = require('../../../utils/airtable');

module.exports = (req, res) => {
  Promise.resolve(getUser(req.query.id))
    .then((data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({}));
    });
};
