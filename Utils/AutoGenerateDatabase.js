const CONFIGURATION = require("../configuration");
const { query } = require("./MySQLHelper");

const FILE_NAME = 'AutoGenerateDatabase.js';
const CREATE_USER_DB  = `CREATE TABLE IF NOT EXISTS USERS (
  UID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  USERNAME VARCHAR(255) NOT NULL UNIQUE,
  FIRSTNAME VARCHAR(255) NOT NULL,
  LASTNAME VARCHAR(255) NOT NULL,
  AMOUNT DECIMAL(11, 2) NOT NULL DEFAULT 0
)`;


const AutoGenerate = async function(callback) {
  try {
    const CreateUsers   = query(CREATE_USER_DB);
    Promise.allSettled([CreateUsers])
      .then(async r => {
        if (r[0].status === "rejected") {
          console.error("(" + FILE_NAME + "- Create Users Table failed): " + r[0].reason);
          process.exit(-1);
        }
        console.info("Generated table");
        callback();
      })
  } catch (e) {
    console.error(FILE_NAME + e);
    process.exit(-1);
  }
}

module.exports = {
  AutoGenerate: AutoGenerate
}