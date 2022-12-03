const express = require('express');
const router = express.Router();

const {getAllBankAccounts, getBankAccountByUserId} = require('../controllers/bankAccounts');

//@desc     GET all BankAccounts from Bank
//@route    GET /bankAccounts
router.get('/', getAllBankAccounts);

//@desc     GET a list of BankAccounts with same UserId from Bank
//@route    GET /bankAccounts/:id
router.get('/:id', getBankAccountByUserId);

module.exports = router;