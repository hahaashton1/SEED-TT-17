require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const mysql = require("mysql2");
// var config = require("./config/config.js");
const usersRouter = require("./routes/usersRoute.js");

// const db = mysql.createConnection(config.mysqlConfig);

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
const bankAccountRouter = require("./routes/bankAccounts");
const accountTransactionsRouter = require("./routes/accountTxns");
const userTransactionsRouter = require("./routes/userTxns");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);
// Routers
app.use("/bankaccounts", bankAccountRouter);
app.use("/accountTransactions", accountTransactionsRouter);
app.use("/userTransactions", userTransactionsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
