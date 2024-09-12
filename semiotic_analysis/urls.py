from django.contrib import admin
from django.urls import path, include
from api import views  # Import views from the 'api' app

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel
    path('api/', include('api.urls')),  # Include all URLs from the 'api' app
    path('analysis/<int:index>', views.analysis_view, name='analysis_view'),  # Directly include the analysis view
]
