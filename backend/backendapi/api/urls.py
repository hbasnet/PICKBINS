from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet
#from .views import CustomRegisterView

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# urlpatterns = [
#    path('', CustomRegisterView.as_view()),
# ]
