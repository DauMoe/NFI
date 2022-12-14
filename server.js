const express       = require("express");
const app           = express();
const cors          = require("cors");
require('dotenv').config();
const CONFIGURATION = require("./configuration");
const { AutoGenerate } = require("./Utils/AutoGenerateDatabase");
const UserRouter = require("./components/Users/UserRouter");
const PaymentRouter = require("./components/Payment/PaymentRouter");

app.use(cors());
app.use(express.json({
  limit: '50mb'
}));

app.use("/users", UserRouter);
app.use("/payment", PaymentRouter);

AutoGenerate(_ => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(CONFIGURATION.SV_PORT, function() {
      console.info(`Server is running at port: ${CONFIGURATION.SV_PORT}`);
    });
  }
});

module.exports = app;