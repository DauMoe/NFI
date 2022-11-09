import DEVELOPEMENT from "./development.config";
import PRODUCTION from "./production.config";
import CONFIGURATION from './index';

const LEGAL_ENV = ["development", "production"];
const ENV       = process.env.NODE_ENV || "development";

//Checking env value
if (LEGAL_ENV.indexOf(ENV) === -1) {
  throw Error(`'ENV' must be once of following value ${LEGAL_ENV.join(",")}`);
}

const CONFIGURATION_ENV = {
  'development': DEVELOPEMENT,
  'production': PRODUCTION
}

const CONFIGURATION = {
  ...CONFIGURATION_ENV,
  env:  ENV
}

export default CONFIGURATION;