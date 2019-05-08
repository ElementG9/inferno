/* - Configuration - */
// Check that .env exists.
if (!require('fs').existsSync(`${__dirname}/.env`)) {
  console.error('Error: .env configuration file does not exist.');
  process.exit(1);
}

// Configure .env.
require('dotenv').config();

// Create the app.
const app = require('express')();

// Import dependencies.
const colors = require('colors');
const helmet = require('helmet');
const compression = require('compression');
const consoleStyling = require('./scripts/consoleStyling.js');

// Configure dependencies.
app.use(helmet());
app.use(compression());
app.set('view engine', 'pug');
app.set('views', './views');
consoleStyling.style();


/* - Routes - */
// The main route.
app.get('/', (req, res) => {
  res.send('inferno');
});


/* - Listening - */
// Listen and log the port number.
app.listen(process.env.port, () => {
  console.info(`Server listening on port ${process.env.port}`);
});
