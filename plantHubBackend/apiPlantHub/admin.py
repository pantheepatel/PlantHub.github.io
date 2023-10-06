from django.contrib import admin
from .models import Plant, PlantDetail,UserProfile,Like
# Register your models here.
admin.site.register(Plant)
admin.site.register(PlantDetail)
admin.site.register(UserProfile)
admin.site.register(Like)
    