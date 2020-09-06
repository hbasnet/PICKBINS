from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, first_name, last_name, address, city, zip_code, country, password = None):
        if not email:
            raise ValueError("This field is required")
        if not username:
            raise ValueError("This field is required")
        if not first_name:
            raise ValueError("This field is required")
        if not last_name:
            raise ValueError("This field is required")
        if not address:
            raise ValueError("This field is required")
        if not city:
            raise ValueError("This field is required")
        if not zip_code:
            raise ValueError("This field is required")
        if not country:
            raise ValueError("This field is required")

        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            address = address,
            city = city,
            zip_code = zip_code,
            country = country
        )

        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, email, username, first_name, last_name, address, city, zip_code, country, password):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            password = password,
            address = address,
            city = city,
            zip_code = zip_code,
            country = country

        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email",max_length=30, unique=True)
    username = models.CharField(verbose_name="username", max_length=30, unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login",auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    first_name = models.CharField(verbose_name='first name', max_length=30)
    last_name = models.CharField(verbose_name='last name', max_length=30)
    address = models.CharField(verbose_name='address', max_length=30)
    city = models.CharField(max_length = 12)
    zip_code = models.CharField(max_length = 12)
    country = models.CharField(max_length = 12)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name','address','city','zip_code','country']

    objects = MyAccountManager()

    def __str__(self):
        return self.email
    
    def has_perm(self,perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
