const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

let port = process.env.PORT || 8080;

let server = app.listen(port, () => console.log(`TTGO app running on port ${server.address().port}`)
);
