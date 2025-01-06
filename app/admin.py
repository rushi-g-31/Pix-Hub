from django.contrib import admin
from .models import Category, MediaItem

# Register Category model
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # Display category id and name in the list
    search_fields = ('name',)  # Add search functionality by category name
    ordering = ('name',)  # Order categories alphabetically by name

admin.site.register(Category, CategoryAdmin)

# Register MediaItem model with customization
class MediaItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'media_type', 'category', 'file', 'description', 'file_link')  # Show important fields in the list
    list_filter = ('media_type', 'category')  # Filter media items by type and category
    search_fields = ('title', 'category__name', 'description')  # Search by title, category name, and description
    ordering = ('title',)  # Order media items alphabetically by title

    # Custom field to display the file in a downloadable link
    def file_link(self, obj):
        return f'<a href="{obj.file.url}" target="_blank">{obj.file.name}</a>'
    file_link.allow_tags = True
    file_link.short_description = 'File'

    # Display description with custom formatting (if needed)
    def description_text(self, obj):
        return obj.description[:50]  # Show first 50 characters of description
    description_text.short_description = 'Description'

admin.site.register(MediaItem, MediaItemAdmin)
