
from django.urls import path
from .views import (
    api_root,
    CategoryListView,
    MediaItemListView,
    MediaItemDetailView,
    ImageListView,
    VideoListView,
    
)

urlpatterns = [
    path('', api_root, name='api-root'),  # API root endpoint
    path('categories/', CategoryListView.as_view(), name='category-list'),  # List and create categories
    path('media-items/', MediaItemListView.as_view(), name='media-item-list'),  # List and create all media items
    path('media-items/images/', ImageListView.as_view(), name='image-list'),  # List images only
   path('media-items/videos/', VideoListView.as_view(), name='video-list'),  # List videos only
    path('media-items/<int:pk>/', MediaItemDetailView.as_view(), name='media-item-detail'),  # Retrieve, update, delete media item
 
]
