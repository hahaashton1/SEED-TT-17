const express = require('express');
const router = express.Router();

const {getTxnByAccountId, getTxnByAccountIdPost} = require('../controllers/accountTxns');

// THIS ROUTE TO BE DELETED
//@desc     GET all Scheduled Transactions from Account ID
//@route    GET /accountTransaction/:id
router.get('/:id', getTxnByAccountId);

//@desc     GET all Scheduled Transactions from Account ID
//@route    POST /accountTransaction/:id
router.post('/', getTxnByAccountIdPost);

module.exports = router;