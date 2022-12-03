const db = require("./db");
async function user_login(username, password) {
  const response = await db.query(
    `SELECT * FROM user WHERE username = "${username}"`
  );

  var user_found = false;
  var correct_password = false;
  var is_loggedin = false;
  if (response.length === 0) {
    return { user_found, correct_password, is_loggedin };
  }

  if (response) {
    user_found = true;

    var password_db = response[0].Password;

    if (password != password_db) {
      return { user_found, correct_password, is_loggedin };
    } else {
      is_loggedin = true;
      correct_password = true;
      return { user_found, correct_password, is_loggedin };
    }
  } else {
    return { user_found, correct_password, is_loggedin };
  }
}
module.exports = { user_login };
