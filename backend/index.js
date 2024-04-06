const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

connect(
  "mongodb+srv://auth-admin:t2YuYPDKGPIztKib@cluster0.s875rof.mongodb.net/No-dues"
);

app.use(cors({origin:['http://localhost:3001']}));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
