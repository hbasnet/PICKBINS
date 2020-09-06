from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password 
from .models import Account
from django.http import JsonResponse

class EmailAuthBackend():
    def authenticate(self,data,**kwargs):
        try:
            username = data['username']
            password = data['password']
            print(username)
            user = Account.objects.get(email=username)
            print(user)
        except Account.DoesNotExist:
            return JsonResponse({"error":"Invalid credentials"})
        if getattr(user, 'is_active') and user.check_password(password):
            print(user)
            return user
        return None