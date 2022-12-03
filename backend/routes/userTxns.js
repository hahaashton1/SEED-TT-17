const express = require('express');
const router = express.Router();

const {getTxnByUserId, getTxnByUserIdPost} = require('../controllers/userTxns');

// THIS ROUTE TO BE DELETED
//@desc     GET all Scheduled Transactions from User ID
//@route    GET /userTransactions/:id
router.get('/:id', getTxnByUserId);

//@desc     GET all Scheduled Transactions from User ID
//@route    POST /userTransactions
router.post('/', getTxnByUserIdPost);

module.exports = router;