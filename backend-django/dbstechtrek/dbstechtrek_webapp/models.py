from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    firstname = models.CharField(max_length=255, verbose_name="FirstName")
    lastname = models.CharField(max_length=255, verbose_name="LastName")
    email = models.CharField(max_length=255, verbose_name="Email")
    address = models.CharField(max_length=255, verbose_name="Address")