const db = require('./db');

// THIS FUNCTION TO BE DELETED
const getTxnByAccountId = async (req, res) => {
    try {
        const scheduledTxns = await db.query(`SELECT * FROM scheduledtransactions WHERE AccountID = ${req.params.id}`);
        //console.log(scheduledTxns);
        res.json(scheduledTxns);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getTxnByAccountIdPost = async (req, res) => {
    try {
        const scheduledTxns = await db.query(`SELECT * FROM scheduledtransactions WHERE AccountID = ${req.body.AccountID}`);
        //console.log(scheduledTxns);
        res.json(scheduledTxns);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getTxnByAccountId, getTxnByAccountIdPost};