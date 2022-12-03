const express = require('express');
const router = express.Router();

const {getTxnByAccountId} = require('../controllers/scheduledTxns');

//@desc     GET all Scheduled Transactions from Account ID
//@route    GET /accountid/:id
router.get('/:id', getTxnByAccountId);

module.exports = router;