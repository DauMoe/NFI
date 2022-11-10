const { Authenticate } = require("../../Utils/Middleware");
const { Deposit, WithDrawal } = require("./PaymentController");

const PaymentRouter = require("express").Router();

PaymentRouter.post("/deposit", Authenticate, Deposit);
PaymentRouter.post("/withdrawal", Authenticate, WithDrawal);

module.exports = PaymentRouter