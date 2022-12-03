const mysql = require("mysql2/promise");
const config = require("../config/config.js");

// connects to the MySql local server and executes a query
async function query(sql, params) {
  const connection = await mysql.createConnection(config.mysqlConfig);
  const [results] = await connection.execute(sql, params);

  return results;
}

async function insert(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
  insert,
};
