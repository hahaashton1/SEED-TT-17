const db = require('./db');

const getTxnByAccountId = async (req, res) => {
    try {
        const scheduledTxns = await db.query(`SELECT * FROM scheduledtransactions WHERE AccountID = ${req.params.id}`);
        console.log(scheduledTxns);
        res.json(scheduledTxns);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getTxnByAccountId};