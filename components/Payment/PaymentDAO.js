const mysql       = require("mysql2");
const { query } = require("../../Utils/MySQLHelper");
const { DB_RESP } = require("../../Utils/UltinityFunction");
const FILE_NAME   = "PaymentDAO.js";

const DepositDAO = async(user_id, amount) => {
  const FUNC_NAME = `(DepositDAO - ${FILE_NAME}): `;
  let SQL, SQL_BIND;
  try {
    SQL       = "SELECT COUNT(*) FROM USERS WHERE UID = ?";
    SQL_BIND  = mysql.format(SQL, [user_id]);
    const ListUsers = await query(SQL_BIND);
    if (ListUsers[0]['COUNT(*)'] > 0) {
      SQL       = "UPDATE USERS SET AMOUNT = AMOUNT + ? WHERE UID = ?";
      SQL_BIND  = mysql.format(SQL, [amount, user_id]);
      await query(SQL_BIND);
      SQL       = "SELECT UID, AMOUNT FROM USERS WHERE UID = ?";
      SQL_BIND  = mysql.format(SQL, [user_id]);
      const result = await query(SQL_BIND);
      return DB_RESP(200, { USER_ID: result[0]?.UID, AMOUNT: result[0]?.AMOUNT });
    } else {
      return DB_RESP(400, "", "user_id is not existed!");
    }
  } catch(e) {
    console.error(FUNC_NAME + SQL_BIND + e.message);
    return DB_RESP(400, "", "Has some error. Please feedback to support team! Thanks");
  }
}

const WithDrawalDAO = async(user_id, amount) => {
  const FUNC_NAME = `(WithDrawalDAO - ${FILE_NAME}): `;
  let SQL, SQL_BIND;
  try {
    SQL       = "SELECT AMOUNT FROM USERS WHERE UID = ?";
    SQL_BIND  = mysql.format(SQL, [user_id]);
    const ListUsers = await query(SQL_BIND);
    if (ListUsers.length > 0) {
      if (ListUsers[0].AMOUNT - amount < 0) {
        return DB_RESP(400, "", "Amount is larger than your balance!");  
      }
      SQL       = "UPDATE USERS SET AMOUNT = AMOUNT - ? WHERE UID = ?";
      SQL_BIND  = mysql.format(SQL, [amount, user_id]);
      await query(SQL_BIND);
      return DB_RESP(200, { USER_ID: user_id, AMOUNT: ListUsers[0].AMOUNT - amount });
    } else {
      return DB_RESP(400, "", "user_id is not existed!");
    }
  } catch(e) {
    console.error(FUNC_NAME + SQL_BIND + e.message);
    return DB_RESP(400, "", "Has some error. Please feedback to support team! Thanks");
  }
}

module.exports = { DepositDAO, WithDrawalDAO };