from django.contrib import admin

# Register your models here.
from wall.models import Post, Image

admin.site.register(Post)
admin.site.register(Image)