from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, MediaItem
from .serializers import CategorySerializer, MediaItemSerializer
from django.http import JsonResponse

class CategoryListView(APIView):
    """
    Handles GET and POST requests for Categories.
    """
    def get(self, request):
        categories = Category.objects.prefetch_related('media_items').all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MediaItemListView(APIView):
    """
    Handles GET and POST requests for Media Items (All Media).
    """
    def get(self, request):
        media_type = request.query_params.get('media_type')
        category_id = request.query_params.get('category_id')

        media_items = MediaItem.objects.all()
        if media_type:
            media_items = media_items.filter(media_type=media_type)
        if category_id:
            media_items = media_items.filter(category_id=category_id)

        serializer = MediaItemSerializer(media_items, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request):
        serializer = MediaItemSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageListView(MediaItemListView):
    """
    Handles GET requests for images only.
    """
    def get(self, request):
        images = MediaItem.objects.filter(media_type='image')
        category_id = request.query_params.get('category_id')
        if category_id:
            images = images.filter(category_id=category_id)

        serializer = MediaItemSerializer(images, many=True, context={"request": request})
        return Response(serializer.data)


class VideoListView(MediaItemListView):
    """
    Handles GET requests for videos only.
    """
    def get(self, request):
        videos = MediaItem.objects.filter(media_type='video')
        category_id = request.query_params.get('category_id')
        if category_id:
            videos = videos.filter(category_id=category_id)

        serializer = MediaItemSerializer(videos, many=True, context={"request": request})
        return Response(serializer.data)


class MediaItemDetailView(APIView):
    """
    Handles GET, PUT, and DELETE requests for a single Media Item.
    """
    def get(self, request, pk):
        try:
            media_item = MediaItem.objects.get(pk=pk)
            serializer = MediaItemSerializer(media_item, context={"request": request})
            return Response(serializer.data)
        except MediaItem.DoesNotExist:
            return Response({"error": "Media item not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            media_item = MediaItem.objects.get(pk=pk)
            serializer = MediaItemSerializer(media_item, data=request.data, context={"request": request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except MediaItem.DoesNotExist:
            return Response({"error": "Media item not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            media_item = MediaItem.objects.get(pk=pk)
            media_item.delete()
            return Response({"message": "Media item deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except MediaItem.DoesNotExist:
            return Response({"error": "Media item not found"}, status=status.HTTP_404_NOT_FOUND)


def api_root(request):
    return JsonResponse({
        "message": "Welcome to the API",
        "endpoints": {
            "categories": "/api/categories/",
            "media_items": "/api/media-items/",
            "media_items/images": "/api/media-items/images/",
            "media_items/videos": "/api/media-items/videos/",
        }
    })
