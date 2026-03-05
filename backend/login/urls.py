from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from .auth_views import LoginView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('auth/login/', LoginView.as_view(), name='api_login'),
    path('', include(router.urls)),
]
