from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import registration_view
#from .views import CustomRegisterView

#router = routers.DefaultRouter()
#router.register('users', UserViewSet)

urlpatterns = [
    #path('', include(router.urls)),
    path('register/', registration_view, name='register'),
]

# urlpatterns = [
#    path('', CustomRegisterView.as_view()),
# ]
