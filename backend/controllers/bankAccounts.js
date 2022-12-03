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

const getBankAccountById = async (req, res) => {
    try {
        const bankAccount = await db.query(`SELECT * FROM bankaccount WHERE ${req.body.AccountID}`);
        console.log(bankAccount);
        res.json(bankAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getAllBankAccounts, getBankAccountById};

// getAllBankAccounts();