from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

#from django.shortcuts import render
#from rest_framework import generics
#from rest_auth.registration.views import RegisterView
#from .models import User


# class CustomRegisterView(RegisterView):
#    queryset = User.objects.all()
