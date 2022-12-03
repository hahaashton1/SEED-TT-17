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

async function get_address(user_id) {
  console.log(user_id);
  const rows = await db.query(
    `SELECT address from USER WHERE UserId = ${user_id}`
  );
  return { rows };
}

async function get_email(user_id) {
  const rows = await db.query(`
    SELECT email from USER WHERE UserId = ${user_id}`);
  return { rows };
}

async function update_address(user_id, new_address) {
  const rows = await db.insert(`
    UPDATE USER SET Address = "${new_address}" WHERE UserId = user_id`);
  return { rows };
}

module.exports = { user_login, get_address, get_email, update_address };
