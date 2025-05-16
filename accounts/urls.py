from django.urls import path
from . import views
from .views import register, me

urlpatterns = [
    path('register/', register, name='register'),
    path('me/', me, name='me'),
    # Có thể thêm các endpoint khác ở đây nếu cần
]
