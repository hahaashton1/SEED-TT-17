async function user_login(username, password) {
    db.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result)=> {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                res.send( result);
            }
            else({message: "Wrong username/password comination!"});
        }
    );
}
module.export={user_login}
