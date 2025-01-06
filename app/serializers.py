from rest_framework import serializers
from .models import Category, MediaItem



    
class MediaItemSerializer(serializers.ModelSerializer):
    # Adding read-only URL field for the uploaded file
    file_url = serializers.SerializerMethodField()
   
    class Meta:
        model = MediaItem
        fields = ['id', 'title', 'file', 'file_url', 'media_type', 'category', 'description']

    def get_file_url(self, obj):
        # Get the request context to generate an absolute URL for the file
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.file.url)
        return obj.file.url


class CategorySerializer(serializers.ModelSerializer):
    # Include the related media items in the category serialization
    media_items = MediaItemSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'media_items']

