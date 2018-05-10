const data = require('../data.js');

let appRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send(data)
  });
}

module.exports = appRouter;
