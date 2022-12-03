const express = require('express');
const router = express.Router();

const {getTxnByAccountId} = require('../controllers/accountTxns');

//@desc     GET all Scheduled Transactions from Account ID
//@route    GET /accountTransaction/:id
router.get('/:id', getTxnByAccountId);

module.exports = router;