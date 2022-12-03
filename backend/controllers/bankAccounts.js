const db = require('./db');

const getAllBankAccounts = async (req, res) => {
    try {
        const bankAccounts = await db.query(`SELECT * FROM bankaccount`)
        console.log(bankAccounts);
        res.json(bankAccounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}
// THIS FUNCTION TO BE DELETED
const getBankAccountByUserId = async (req, res) => {
    try {
        const bankAccounts = await db.query(`SELECT * FROM bankaccount WHERE UserID = ${req.params.id}`);
        //console.log(bankAccounts);
        res.json(bankAccounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getBankAccountByUserIdPost = async (req, res) => {
    try {
        const bankAccounts = await db.query(`SELECT * FROM bankaccount WHERE UserID = ${req.body.UserID}`);
        //console.log(bankAccounts);
        res.json(bankAccounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getAllBankAccounts, getBankAccountByUserId, getBankAccountByUserIdPost};