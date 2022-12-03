const db = require('./db');

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

module.exports = {getTxnByUserId};