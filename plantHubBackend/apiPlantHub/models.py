import json
from django.db import models
# from django.contrib.auth.models import User

# from django.contrib.postgres.fields import ArrayField

# Create your models here.

# to define what are the fields that will be displayed in overview page (only these fields will be saved to database)


class Plant(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255, null=True)
    cycle = models.CharField(max_length=255, null=True)
    watering = models.CharField(max_length=255, null=True)
    image = models.JSONField(models.CharField, max_length=2048, null=True)
    sunlight = models.JSONField(models.CharField, max_length=30, null=True)
    # sunlight = models.ArrayField
    # sunlight = ArrayField(
    #     models.CharField(max_length=255)
    # )
    # email = models.EmailField()

    # def __str__(self):
    #     return self.name, self.image, self.id

# to define what are the fields that will be displayed in detailed page (only these fields will be saved to database)


class PlantDetail(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255, null=True)
    cycle = models.CharField(max_length=255, null=True)
    watering = models.CharField(max_length=255, null=True)
    description = models.CharField(max_length=1000, null=True)
    image = models.JSONField(models.CharField, max_length=2048, null=True)
    type = models.CharField(max_length=255, null=True)
    flowers = models.BooleanField(null=True)
    flowering_season = models.CharField(max_length=255, null=True)
    fruit = models.BooleanField(null=True)
    edible_fruit = models.BooleanField(null=True)
    growth_rate = models.CharField(max_length=255, null=True)
    maintenance = models.CharField(max_length=255, null=True)
    medicinal = models.BooleanField(null=True)
    poisonous_to_humans = models.BooleanField(null=True)
    poisonous_to_pets = models.BooleanField(null=True)
    thorny = models.BooleanField(null=True)
    indoor = models.BooleanField(null=True)
    care_level = models.CharField(max_length=255, null=True)
    attracts = models.JSONField(models.CharField, max_length=255, null=True)
    # fruiting_season = models.JSONField(models.CharField,max_length=255, null=True)
    # rare = models.BooleanField(null=True)


# def set_fruiting_season (self, lst):
#     self.fruiting_season = json.dumps(lst)

# def get_fruiting_season (self):
#     return json.loads(self.fruiting_season)
class UserProfile(models.Model):
    id = models.CharField(max_length=25,primary_key=True,default='')
    email = models.EmailField(max_length=100,unique=True)
    # def __str__(self):
    #     return self.uid


class Like(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name='user_likes')
    plant = models.ForeignKey(Plant, on_delete=models.CASCADE,related_name='plant_likes')


    # def __str__(self):
    #     return self.user, self.plant
# import json
# from django.db import models
# # from django.contrib.postgres.fields import ArrayField

# # Create your models here.

# # to define what are the fields that will be displayed in overview page (only these fields will be saved to database)


# class Plant(models.Model):
#     id = models.PositiveIntegerField(primary_key=True)
#     name = models.CharField(max_length=255, blank=True,default='')
#     cycle = models.CharField(max_length=255, blank=True,default='')
#     watering = models.CharField(max_length=255, blank=True,default='')
#     image = models.URLField(blank=True,default='')
#     sunlight = models.JSONField(models.CharField, max_length=30, blank=True,default='')
#     # sunlight = models.ArrayField
#     # sunlight = ArrayField(
#     #     models.CharField(max_length=255)
#     # )
#     # email = models.EmailField()

#     def __str__(self):
#         return self.name, self.image


# # to define what are the fields that will be displayed in detailed page (only these fields will be saved to database)
# class PlantDetail(models.Model):
#     id = models.PositiveIntegerField(primary_key=True)
#     name = models.CharField(max_length=255, blank=True,default='')
#     cycle = models.CharField(max_length=255, blank=True,default='')
#     watering = models.CharField(max_length=255, blank=True,default='')
#     description = models.CharField(max_length=1000, blank=True,default='')
#     image = models.URLField(blank=True,default='')
#     type = models.CharField(max_length=255, blank=True,default='')
#     flowers = models.BooleanField(blank=True,default=False)
#     flowering_season = models.CharField(max_length=255, blank=True,default='')
#     fruit = models.BooleanField(blank=True,default=False)
#     edible_fruit = models.BooleanField(blank=True,default=False)
#     growth_rate = models.CharField(max_length=255, blank=True,default='')
#     maintenance = models.CharField(max_length=255, blank=True,default='')
#     medicinal = models.BooleanField(blank=True,default=False)
#     poisonous_to_humans = models.BooleanField(blank=True,default=False)
#     poisonous_to_pets = models.BooleanField(blank=True,default=False)
#     thorny = models.BooleanField(blank=True,default=False)
#     indoor = models.BooleanField(blank=True,default=False)
#     care_level = models.CharField(max_length=255, blank=True,default='')
#     fruiting_season = models.JSONField(
#         models.CharField, max_length=255, blank=True,default='')
#     attracts = models.JSONField(models.CharField, max_length=255, blank=True,default='')
#     rare = models.BooleanField(blank=True,default=False)


# # def set_fruiting_season (self, lst):
# #     self.fruiting_season = json.dumps(lst)

# # def get_fruiting_season (self):
# #     return json.loads(self.fruiting_season)
