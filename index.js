const ENV = process.env.NODE_ENV;
const express = require('express');
const server = require('./server.js');
const config = require('./config.js')[ENV];
const handlebarsConfig = require('./handlebars-config.js');
const hdb = require('express-handlebars').create(handlebarsConfig.handlebars);

const app = express();

app.engine('handlebars', hdb.engine);
app.set('view engine', 'handlebars');
app.set('view options', {
  layout: 'main.handlebars',
});

// App setup environment port
app.set('port', process.env.PORT);
app.use(express.static(`${__dirname}/client/dist/`, config.staticResourceCache));

require('./routes.js')(app);

// start the server in cluster
if (require.main === module) {
  server(app);
} else {
  module.exports = server(app);
}

module.exports = app;
