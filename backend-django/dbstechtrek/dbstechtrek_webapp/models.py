from django.db import models

# Create your models here.
class User(models.Model):
    userid = models.IntegerField(max_length=200, verbose_name="UserID", )
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    firstname = models.CharField(max_length=255, verbose_name="FirstName")
    lastname = models.CharField(max_length=255, verbose_name="LastName")
    email = models.CharField(max_length=255, verbose_name="Email")
    address = models.CharField(max_length=255, verbose_name="Address")
    optintophystatements = models.IntegerField(max_length=1, verbose_name="OptIntoPhyStatements")