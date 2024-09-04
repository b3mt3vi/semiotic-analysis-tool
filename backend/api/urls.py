from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Define the router for API viewsets
router = DefaultRouter()
router.register(r'texts', views.TextViewSet, basename='text')
router.register(r'squares', views.SemioticSquareViewSet, basename='semioticsquare')

urlpatterns = [
    path('', include(router.urls)),  # Include all viewset routes
    path('process_text/<int:text_id>/', views.process_text, name='process_text'),  # Process text view
]   