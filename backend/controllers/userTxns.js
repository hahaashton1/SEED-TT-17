const db = require('./db');

// THIS FUNCTION TO BE DELETED
const getTxnByUserId = async (req, res) => {
    try {
        const scheduledTxns = await db.query(
            `SELECT * FROM scheduledtransactions WHERE AccountID IN (SELECT AccountID FROM bankaccount WHERE UserID = ${req.params.id})`
        );
        console.log(scheduledTxns);
        res.json(scheduledTxns);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getTxnByUserIdPost = async (req, res) => {
    try {
        const scheduledTxns = await db.query(
            `SELECT * FROM scheduledtransactions WHERE AccountID IN (SELECT AccountID FROM bankaccount WHERE UserID = ${req.body.UserID})`
        );
        console.log(scheduledTxns);
        res.json(scheduledTxns);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getTxnByUserId, getTxnByUserIdPost};