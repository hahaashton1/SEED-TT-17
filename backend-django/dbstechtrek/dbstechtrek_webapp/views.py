from django.shortcuts import render
from .models import *
from .tasks import runTransaction

# Create your views here.
from django.http import HttpResponse
from django_q.models import Schedule


def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    # latest_user_list = User.objects.all()
    # context = {"user_list":latest_user_list}
    # return render(request, 'dbstechtrek_webapp/index.html', context )
    scheduledTransactionObj = ScheduledTransactions()
    all_scheduled_transactions = scheduledTransactionObj.getAllScheduledTransactions(1)
    final_trans_list = []
    for items in all_scheduled_transactions:
        for records in items:
            ### records.accountid is a BankAccount
            individual_trans_dict = {
                "TransactionID": records.transactionid,
                "AccountID": records.accountid.accountid,
                "ReceivingAccountID": records.receivingaccountid,
                "Date": records.date,
                "TransactionAmount": records.transactionamount,
                "Comment": records.comment
            }
            final_trans_list.append(individual_trans_dict)
    context = {"user_list": final_trans_list}
    return render(request, 'dbstechtrek_webapp/index.html', context )

def viewTransactionDetails(request, userid):
    ### Get userid from request
    ### get bank account based on userid
    #### for every bank account
    ##### get transactions based on bankaccountid
    scheduledTransactionObj = ScheduledTransactions()
    all_scheduled_transactions = scheduledTransactionObj.getAllScheduledTransactions(userid)
    final_trans_list = []
    for items in all_scheduled_transactions:
        for records in items:
            ### records.accountid is a BankAccount
            individual_trans_dict = {
                "TransactionID": records.transactionid,
                "AccountID": records.accountid.accountid,
                "ReceivingAccountID": records.receivingaccountid,
                "Date": records.date,
                "TransactionAmount": records.transactionamount,
                "Comment": records.comment
            }
            final_trans_list.append(individual_trans_dict)
    context = {"user_list": final_trans_list}
    return render(request, 'dbstechtrek_webapp/viewTransactionDetails.html', context )

def createTransactionDetails(request):
    ### get current account id
    ### Create scheduled transaction object based on form input
    transaction_id = ""
    receiving_account_id = ""
    date_value = ""
    transaction_amount = ""
    transaction_comment = ""
    user_account_id = ""
    scheduledTransactionObj = ScheduledTransactions(
        transactionid = transaction_id,
        receivingaccountid = receiving_account_id,
        date = date_value,
        transactionamount = transaction_amount,
        comment = transaction_comment,
        accountid = user_account_id,
    )
    scheduledTransactionObj.save()

    ### Create Scheduled Obj to run task
    Schedule.objects.create(
        func='runTransaction',
        # hook='hooks.print_result',
        args=f'transaction_id={transaction_id}',
        next_run=date_value
        # schedule_type=Schedule.DAILY
    )
    ### if scheduler cannot work, test using this
    runTransaction(transaction_id)
    return render(request, 'dbstechtrek_webapp/index.html' )
    

def deleteTransactionDetails(request, transid):
    scheduledTransactionObj = ScheduledTransactions.objects.get(transactionid=transid)
    scheduledTransactionObj.delete()
    return render(request, 'dbstechtrek_webapp/index.html')
