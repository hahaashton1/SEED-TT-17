const express = require('express');
const router = express.Router();

const {getAllBankAccounts, getBankAccountByUserId, getBankAccountByUserIdPost} = require('../controllers/bankAccounts');

//@desc     GET all BankAccounts from Bank
//@route    GET /bankAccounts
router.get('/', getAllBankAccounts);

// THIS ROUTE TO BE DELETED
//@desc     GET a list of BankAccounts with same UserId from Bank
//@route    GET /bankAccounts/:id
router.get('/:id', getBankAccountByUserId);

//@desc     GET a list of BankAccounts with same UserId from Bank
//@route    POST /bankAccounts/getAccounts
router.post('/getAccount', getBankAccountByUserIdPost);

module.exports = router;