from django.db import models

# Create your models here.
class User(models.Model):
    userid = models.IntegerField(verbose_name="UserID", primary_key=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    firstname = models.CharField(max_length=255, verbose_name="FirstName")
    lastname = models.CharField(max_length=255, verbose_name="LastName")
    email = models.CharField(max_length=255, verbose_name="Email")
    address = models.CharField(max_length=255, verbose_name="Address")
    optintophystatements = models.IntegerField(max_length=1, verbose_name="OptIntoPhyStatements")

class BankAccount(models.Model):
    accountid = models.IntegerField(primary_key=True, verbose_name="AccountID")
    userid = models.ForeignKey('User', on_delete=models.CASCADE)
    accounttype = models.CharField(max_length=255, verbose_name= "AccountType")
    accountbalance = models.DecimalField(max_digits=10, decimal_places=2)

class ScheduledTransactions(models.Model):
    transactionid = models.IntegerField(primary_key=True, verbose_name="TransactionID")
    receivingaccountid = models.IntegerField()
    date = models.CharField(max_length=255, verbose_name="Date")
    transactionamount = models.DecimalField(max_digits=10,decimal_places=2)
    comment = models.CharField(max_length=255, verbose_name="Comment")
    accountid = models.ForeignKey('BankAccount',on_delete=models.CASCADE)

    def getAllScheduledTransactions(self, userid):
        ### get bank account based on userid
        #### for every bank account
        ##### get transactions based on bankaccountid
        accounts = BankAccount.objects.filter(userid=userid)
        individual_account_transactions_list = []
        for individual_account in accounts:
            individual_account_transactions = ScheduledTransactions.objects.filter(accountid=individual_account.accountid)
            individual_account_transactions_list.append(individual_account_transactions)
        return individual_account_transactions_list