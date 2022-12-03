from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('viewTransactionDetails', views.viewTransactionDetails, name='viewTransactionDetails'),
    path('createTransactionDetails', views.createTransactionDetails, name='createTransactionDetails'),
    path('deleteTransactionDetails', views.deleteTransactionDetails, name='deleteTransactionDetails'),
]