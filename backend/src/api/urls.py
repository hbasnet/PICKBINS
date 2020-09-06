from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import registration_view
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('register/', registration_view, name='register'),
     path('login/', obtain_auth_token, name='login'),
]
