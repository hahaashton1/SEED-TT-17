from .models import *
import datetime

def runTransaction(transaction_id):
    # *task["args"]
    # transaction_id = *task["kwargs"]["TransactionID"]
    # print(transaction_id)
    # print(kwargs)
    transaction_id = transaction_id
    transaction = ScheduledTransactions.objects.get(transactionid=transaction_id)
    ### Get Amount
    transfer_amount = transaction.transactionamount
    ### Get User Bank Account
    user_bank_account_id = transaction.accountid.accountid
    user_bank_account_obj = BankAccount.objects.get(accountid=user_bank_account_id)
    current_balanace = user_bank_account_obj.accountbalance
    ### Deduct Amount from user bank account
    new_balance = current_balanace - transfer_amount
    user_bank_account_obj.accountbalance = new_balance
    user_bank_account_obj.save()
    print(user_bank_account_id,current_balanace,transfer_amount,new_balance)

    ### get receiving Bank Account
    receiver_bank_account_id = transaction.receivingaccountid
    receiver_bank_account_obj = BankAccount.objects.get(accountid=receiver_bank_account_id)
    receiver_current_balanace = receiver_bank_account_obj.accountbalance
    receiver_new_balance = receiver_current_balanace + transfer_amount
    ### Add Amount to receiving bank account
    receiver_bank_account_obj.accountbalance = receiver_new_balance
    receiver_bank_account_obj.save()
    print(receiver_bank_account_id,receiver_current_balanace,transfer_amount,receiver_new_balance)

    return