require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const msal = require("@azure/msal-node");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const port = 3002;
const authRouter = require("./auth/auth.js");
const MONGO_URI = process.env.MONGO_URI;
connect(MONGO_URI);


app.use(cors({origin:['http://localhost:3000']}));
app.use(bodyParser.json());

const msalConfig = {
  auth: {
    clientId: process.env.OAUTH_CLIENT_ID,
    authority: process.env.OAUTH_AUTHORITY,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

// Create msal application object
app.locals.msalClient = new msal.ConfidentialClientApplication(msalConfig);

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
