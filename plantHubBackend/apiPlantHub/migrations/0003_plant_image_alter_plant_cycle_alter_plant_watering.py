# Generated by Django 4.2.4 on 2023-09-04 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiPlantHub', '0002_plant_cycle_plant_watering_alter_plant_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='image',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='cycle',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='watering',
            field=models.CharField(max_length=255, null=True),
        ),
    ]