from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel
    path('api/', include('app.urls')),  # API endpoints (replace 'media' with your app name)
    path('', lambda request: redirect('api/', permanent=False)),  # Redirect root to /api/
]



# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
