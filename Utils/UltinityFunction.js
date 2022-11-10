const DB_RESP = (code, data, description = "Successful") => {
  return({
    code        : code,
    data        : data,
    description : description
  })
}

const RespHelper = (resp, respCode = 200, respData, description = "Successful") => {
  resp.statusCode = respCode,
  resp.json({
    data        : respData,
    description : description
  });
}

const SuccessResp = (resp, respCode, respData, description) => {
  RespHelper(resp, 200, respData, description);
}

const ErrorResp = (resp, respCode, respData, description) => {
  RespHelper(resp, respCode, respData, description);
} 

module.exports = { DB_RESP, SuccessResp, ErrorResp };