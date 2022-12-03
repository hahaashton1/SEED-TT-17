from django.shortcuts import render
from .models import *

# Create your views here.
from django.http import HttpResponse


def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    latest_user_list = User.objects.all()
    context = {"user_list":latest_user_list}
    return render(request, 'dbstechtrek_webapp/index.html', context )