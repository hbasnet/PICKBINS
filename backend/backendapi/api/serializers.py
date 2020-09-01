from rest_framework import serializers
from django.contrib.auth.models import User
#from rest_auth.registration.serializers import RegisterSerializer
#from api.models import User
from rest_framework.authtoken.models import Token


# class CustomRegisterSerializer(RegisterSerializer):

#    email = serializers.EmailField(required=True)
#    password1 = serializers.CharField(write_only=True)
#    username = serializers.CharField(required=True)
#    address = serializers.CharField(required=True)

#    def get_cleaned_data(self):
#        super(CustomRegisterSerializer, self).get_cleaned_data()

#        return {
#            'password1': self.validated_data.get('password1', ''),
#            'email': self.validated_data.get('email', ''),
#            'username': self.validated_data.get('username', ''),
#            'address': self.validated_data.get('address', ''),
#        }


# class CustomUserDetailsSerializer(serializers.ModelSerializer):

#    class Meta:
#        model = User
#        fields = ('username', 'email', 'address')
#read_only_fields = ('email',)
#        extra_kwargs = {'password': {'write_only': True, 'required': True}}
# this hides the password while fetching users

# recreating builtin create function to hash the password
#    def create(self, validated_data):
#       user = User.objects.create_user(**validated_data)
#        Token.objects.create(user=user)  # this generate a token for user
#        return user

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
