from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextViewSet, SemioticSquareViewSet

router = DefaultRouter()
router.register(r'texts', TextViewSet, basename='text')
router.register(r'squares', SemioticSquareViewSet, basename='semioticsquare')

urlpatterns = [
    path('', include(router.urls)),
]
