const { GetString } = require("../../Utils/GetValue");
const { ErrorResp, SuccessResp } = require("../../Utils/UltinityFunction");
const { NewUserDAO } = require("./UserDAO");

const NewUser = async(req, resp, next) => {
  const reqData = req.body;
  try {
    const username  = GetString(reqData, "username");
    const firstname = GetString(reqData, "firstname");
    const lastname  = GetString(reqData, "lastname");
    const result    = await NewUserDAO(username, firstname, lastname);
    if (result.code === 200) {
      const respData = {
        user_id: result.data.USER_ID
      };
      SuccessResp(resp, result.code, respData, result.description);
    } else {
      ErrorResp(resp, result.code, "", result.description);  
    }
  } catch(e) {
    ErrorResp(resp, 400, "", e.message);
  }
}

module.exports = { NewUser };