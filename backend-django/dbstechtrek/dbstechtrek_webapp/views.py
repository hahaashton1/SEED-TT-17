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

def viewTransactionDetails(request):
    ### Get userid from request
    ### get bank account based on userid
    #### for every bank account
    ##### get transactions based on bankaccountid
    userid = None
    final_trans_list = []
    if request.method == 'GET':
        userid = request.GET["UserID"]
    if userid is not None:
        scheduledTransactionObj = ScheduledTransactions()
        all_scheduled_transactions = scheduledTransactionObj.getAllScheduledTransactions(userid)
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
    if request.method == 'GET':
        ### get current account id
        ### Create scheduled transaction object based on form input
        transaction_id = request.GET["TransactionID"]
        receiving_account_id = request.GET["ReceivingAccountID"]
        date_value = request.GET["Date"]
        transaction_amount = request.GET["TransactionAmount"]
        transaction_comment = request.GET["Comment"]
        user_account_id = request.GET["AccountID"]
        if user_account_id:
            user_account_obj = BankAccount.objects.get(accountid=user_account_id)
            scheduledTransactionObj = ScheduledTransactions(
                transactionid = transaction_id,
                receivingaccountid = receiving_account_id,
                date = date_value,
                transactionamount = transaction_amount,
                comment = transaction_comment,
                accountid = user_account_obj,
            )
            scheduledTransactionObj.save()

            ### Create Scheduled Obj to run task
            Schedule.objects.create(
                func='dbstechtrek_webapp.tasks.runTransaction',
                # hook='hooks.print_result',
                args=f"{transaction_id}",
                # kwargs={
                #     "TransactionID": transaction_id
                # },
                next_run=date_value,
                repeats=1
                # schedule_type=Schedule.DAILY
            )
    ### if scheduler cannot work, test using this
    # runTransaction(transaction_id)
    return render(request, 'dbstechtrek_webapp/index.html' )
    

def deleteTransactionDetails(request):
    transid = None
    if request.method == 'GET':
        transid = request.GET["TransactionID"]
    if transid is not None:
        scheduledTransactionObj = ScheduledTransactions.objects.get(transactionid=transid)
        scheduledTransactionObj.delete()
        print("Deleted successfully")
    return render(request, 'dbstechtrek_webapp/index.html')
