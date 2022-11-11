const mysql       = require("mysql2");
const { query } = require("../../Utils/MySQLHelper");
const { DB_RESP } = require("../../Utils/UltinityFunction");
const FILE_NAME   = "UserDAO.js";

const NewUserDAO = async(username, firstname, lastname) => {
  const FUNC_NAME = `(NewUserDAO - ${FILE_NAME}): `;
  let SQL, SQL_BIND;
  try {
    SQL       = "SELECT COUNT(*) FROM USERS WHERE USERNAME = ?";
    SQL_BIND  = mysql.format(SQL, [username]);
    const NumOfUsername = await query(SQL_BIND);
    if (NumOfUsername[0]['COUNT(*)'] > 0) {
      return DB_RESP(400, "", "Username already taken. Try other!");
    } else {
      SQL           = "INSERT INTO USERS (USERNAME, FIRSTNAME, LASTNAME) VALUES (?, ?, ?)";
      SQL_BIND      = mysql.format(SQL, [username, firstname, lastname]);
      const result  = await query(SQL_BIND);
      return DB_RESP(200, { USER_ID: result?.insertId });
    }
  } catch(e) {
    if(CONFIGURATION.ENV === 'development') console.error(FUNC_NAME + e.message);
    return DB_RESP(400, "", "Has some error. Please feedback to support team! Thanks");
  }
}

module.exports = { NewUserDAO };