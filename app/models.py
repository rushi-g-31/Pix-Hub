from django.db import models
import os

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class MediaItem(models.Model):
    MEDIA_TYPES = (
        ('image', 'Image'),
        ('video', 'Video'),
    )
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='media_items/')  # Default folder
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPES)
    category = models.ForeignKey(Category, related_name="media_items", on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        """
        Override the save method to modify the upload path based on media_type.
        """
        if self.media_type == 'image':
            self.file.name = os.path.join('media_items/images/', os.path.basename(self.file.name))
        elif self.media_type == 'video':
            self.file.name = os.path.join('media_items/videos/', os.path.basename(self.file.name))
        
        super().save(*args, **kwargs)
