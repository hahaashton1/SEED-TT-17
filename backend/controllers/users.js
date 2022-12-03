const db = require("./db")
async function user_login(username, password) {
    
    const response = await db.query(
        `SELECT * FROM user WHERE username = "${username}"`,
    );

    var user_found = false
    var correct_password = false
    var is_loggedin = false

    if (response) {
        user_found = true 

        var password_db = response[0].Password

        if (password != password_db) {
            return {response: is_loggedin, user_found, correct_password}
        } else {
            is_loggedin = true
            correct_password = true
            return {response: is_loggedin, user_found, correct_password}
        }
    } else {
        return {response: is_loggedin, user_found, correct_password}
    }
}
module.exports={user_login}
