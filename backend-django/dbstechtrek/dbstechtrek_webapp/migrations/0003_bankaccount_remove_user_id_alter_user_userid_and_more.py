# Generated by Django 4.1.3 on 2022-12-03 04:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dbstechtrek_webapp', '0002_user_userid'),
    ]

    operations = [
        migrations.CreateModel(
            name='BankAccount',
            fields=[
                ('accountid', models.IntegerField(primary_key=True, serialize=False, verbose_name='AccountID')),
                ('accounttype', models.CharField(max_length=255, verbose_name='AccountType')),
                ('accountbalance', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AlterField(
            model_name='user',
            name='userid',
            field=models.IntegerField(primary_key=True, serialize=False, verbose_name='UserID'),
        ),
        migrations.CreateModel(
            name='ScheduledTransactions',
            fields=[
                ('transactionid', models.IntegerField(primary_key=True, serialize=False, verbose_name='TransactionID')),
                ('receivingaccountid', models.IntegerField()),
                ('date', models.CharField(max_length=255, verbose_name='Date')),
                ('transactionamount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('comment', models.CharField(max_length=255, verbose_name='Comment')),
                ('accountid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dbstechtrek_webapp.bankaccount')),
            ],
        ),
        migrations.AddField(
            model_name='bankaccount',
            name='userid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dbstechtrek_webapp.user'),
        ),
    ]