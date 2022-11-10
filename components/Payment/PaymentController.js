const { GetNumber } = require("../../Utils/GetValue");
const { ErrorResp, SuccessResp } = require("../../Utils/UltinityFunction");
const { DepositDAO, WithDrawalDAO } = require("./PaymentDAO");

const Deposit = async(req, resp, next) => {
  const reqData = req.body;
  try {
    const user_id = GetNumber(reqData, "user_id");
    const amount  = GetNumber(reqData, "amount");
    if (amount <= 0) {
      ErrorResp(resp, 400, "", "'amount' must be larger than 0");
      return;
    }
    const result = await DepositDAO(user_id, amount);
    if (result.code === 200) {
      const respData = {
        user_id: result.data.USER_ID,
        amount: result.data.AMOUNT
      };
      SuccessResp(resp, result.code, respData, result.description);
    } else {
      ErrorResp(resp, result.code, "", result.description);  
    }
  } catch(e) {
    ErrorResp(resp, 400, "", e.message);
  }
}

const WithDrawal = async(req, resp, next) => {
  const reqData = req.body;
  try {
    const user_id = GetNumber(reqData, "user_id");
    const amount  = GetNumber(reqData, "amount");
    if (amount <= 0) {
      ErrorResp(resp, 400, "", "'amount' must be larger than 0");
      return;
    }
    const result = await WithDrawalDAO(user_id, amount);
    if (result.code === 200) {
      const respData = {
        user_id: result.data.USER_ID,
        amount: result.data.AMOUNT
      };
      SuccessResp(resp, result.code, respData, result.description);
    } else {
      ErrorResp(resp, result.code, "", result.description);  
    }
  } catch(e) {
    ErrorResp(resp, 400, "", e.message);
  }
}

module.exports = { Deposit, WithDrawal };