const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
var config = require('./config/config.js');
const user_login = require('./controllers/users.js');

const db = mysql.createConnection(config.mysqlConfig);

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const app = express();
const port = 5001;

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

app.post('/login', async function(req, res) {
  try {
    res.json(await user_login(req.body.username, req.body.password))
  } catch(err) {
    console.error(err)
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
