from rest_framework import serializers
from api.models import Account
from rest_framework.authtoken.models import Token

class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only= True)

    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'username', 'address', 'city', 'zip_code', 'country', 'email', 'password', 'password2']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }
    
    def save(self):
        user = Account(
            email = self.validated_data['email'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            username = self.validated_data['username'],
            address = self.validated_data['address'],
            city = self.validated_data['city'],
            zip_code = self.validated_data['zip_code'],
            country = self.validated_data['country'] 
            )
          
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Password must match.'})
        user.set_password(password)
        user.save()
        Token.objects.get_or_create(user=user)
        return user













'''
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
        # this hides the password while fetching users

    # recreating builtin create function to hash the password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)  # this generate a token for user
        return user

'''