from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextViewSet, SemioticSquareViewSet, analysis_view

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'texts', TextViewSet, basename='text')
router.register(r'squares', SemioticSquareViewSet, basename='semioticsquare')

urlpatterns = [
    path('', include(router.urls)),  # API URLs for viewsets
    path('analysis/', analysis_view, name='analysis_view'),  # Static view for template
]