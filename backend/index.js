require('dotenv').config();
const express = require("express");
const cors = require("cors");
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

// Routers
app.use("/bankAccounts", bankAccountRouter);
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

