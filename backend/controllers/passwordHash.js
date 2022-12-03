const db = require('./db');
const {hashPassword, isPasswordValid} = require('./passwordhash');


// function DOES NOT WORK
const hashExistingPasswords = async () => {
    try {
        await db.query(`ALTER TABLE users add PasswordHash VARCHAR(128) `);
        await db.query(`UPDATE users SET PasswordHash = ${hashPassword(Password)} `)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

