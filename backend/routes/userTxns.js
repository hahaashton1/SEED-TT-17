const express = require('express');
const router = express.Router();

const {getTxnByUserId} = require('../controllers/userTxns');

//@desc     GET all Scheduled Transactions from User ID
//@route    GET /userTransactions/:id
router.get('/:id', getTxnByUserId);

module.exports = router;