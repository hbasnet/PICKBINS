from django.db import models
#from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# class UserManager(BaseUserManager):

#    use_in_migrations = True

#    def create_user(self, username, email, address, password=None):
#        user = self.model(
#            username=username,
#            email=self.normalize_email(email),
#            address=address,
#        )
#        user.set_password(password)
#        user.save(using=self._db)
#        return user

#    def create_staffuser(self, username, email, address, password):
#        user = self.create_user(
#            password=password,
#            username=username,
#            email=self.normalize_email(email),
#            address=address,
#        )
#        user.staff = True
#        user.save(using=self._db)
#        return user

#    def create_superuser(self, username, email, address, password):
#        user = self.create_user(
#            password=password,
#            username=username,
#            email=self.normalize_email(email),
#            address=address,
#        )
#        user.staff = True
#        user.admin = True
#        user.save(using=self._db)
#        return user


# class User(AbstractBaseUser):
#    username = models.CharField(
#        verbose_name='Username', max_length=30, unique=True)
#    email = models.EmailField(verbose_name='E-mail',
#                              max_length=30, unique=True)
#    address = models.CharField(verbose_name='address', max_length=30)

#    USERNAME_FIELD = 'username'
#    REQUIRED_FIELDS = ['email', 'address']

#    objects = UserManager()

#    def __str__(self):
#        return self.username
