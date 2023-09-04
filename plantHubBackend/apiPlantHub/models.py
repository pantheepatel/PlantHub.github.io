from django.db import models

# Create your models here.


class Plant(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    cycle =models.CharField
    watering =models.CharField
    sunlight =models.CharField
    image = models.URLField
    # email = models.EmailField()

    def __str__(self):
        return self.name
