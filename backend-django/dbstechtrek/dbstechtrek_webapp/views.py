from django.shortcuts import render
from .models import *

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
            final_trans_list.append(records.transactionid)
    context = {"user_list": final_trans_list}
    return render(request, 'dbstechtrek_webapp/index.html', context )

def viewTransactionDetails(request, userid):
    ### Get userid from request
    ### get bank account based on userid
    #### for every bank account
    ##### get transactions based on bankaccountid
    scheduledTransactionObj = ScheduledTransactions()
    all_scheduled_transactions = scheduledTransactionObj.getAllScheduledTransactions()
    transaction_list = []
    for transactions in all_scheduled_transactions:
        transaction_list.append(transactions.accountid)
    context = {"transaction_list": transaction_list}
    return render(request, 'dbstechtrek_webapp/index.html', context )

def createTransactionDetails(request):
    pass

def deleteTransactionDetails(request):
    pass