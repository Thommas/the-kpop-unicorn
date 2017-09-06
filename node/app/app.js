/**
 * The Kpop Unicorn
 *
 * App
 *
 * @module app
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

global.__base      = __dirname + '/';

const bodyParser   = require('body-parser');
const fs           = require('fs');
const https        = require('https');
const cors         = require('cors');
const express      = require('express');
const app          = express();

// Setup Environment
const environmentService = require('./services/environment.service');
environmentService.setup();

// Setup Logger
const loggerService = require('./services/logger.service');

// Activate CORS
app.use(cors());

// Use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Be polite, say hi
app.get('/', (req, res) => {
  res.send('Hello, this is The Kpop Unicorn API. Read the API documentation to use it.');
});

// Start HTTPS Express Server
let server = app;
if (process.env.SSL_KEY && process.env.SSL_CERT) {
  const sslKey = fs.readFileSync(process.env.SSL_KEY);
  const sslCert = fs.readFileSync(process.env.SSL_CERT);

  const options = {
    key: sslKey,
    cert: sslCert
  };
  server = https.createServer(options, app);
}

// Load middlewares
const middlewareFiles = fs.readdirSync(__base + 'middlewares');
middlewareFiles.forEach((file) => {
  if (file.indexOf('.js') === -1) {
    return;
  } else {
    file = file.replace('.js', '');
    const middleware = require(__base + '/middlewares/' + file);
    app.use(middleware);
  }
});

// Load all controllers
const controllerFiles = fs.readdirSync(__base + 'controllers');
controllerFiles.forEach((file) => {
  if (file.indexOf('.controller.js') === -1) {
    return;
  } else {
    file = file.replace('.js', '');
    const controller = require(__base + '/controllers/' + file);
    controller.setup(app);
  }
});

// Start server
server.listen(process.env.PORT, () => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(`http://localhost:${process.env.PORT}`);
  }
});

if (process.env.TIMEOUT) {
  server.timeout = parseInt(process.env.TIMEOUT);
}

module.exports = server;
