const path          = require('path');
require('dotenv').config({path: path.join(__dirname, "/../.env")});
const DEVELOPEMENT  = require('./test.config');
const PRODUCTION    = require('./production.config');
const TEST          = require('./test.config');

const LEGAL_ENV     = ["development", "production", "test"];
const ENV           = process.env.NODE_ENV;

//Checking env value
if (LEGAL_ENV.indexOf(ENV) === -1) {
  throw new Error(`ENV='${ENV}' is NOT accepted. Must be once of following value "${LEGAL_ENV.join(", ")}"`);
}

if (ENV === 'development') console.info("NODE_ENV:", ENV);

const CONFIGURATION_ENV = {
  'development': DEVELOPEMENT,
  'production': PRODUCTION,
  'test': TEST
}

const CONFIGURATION = {
  ...CONFIGURATION_ENV[ENV],
  env:  ENV
}

module.exports = CONFIGURATION;