# Generated by Django 4.2.4 on 2023-09-08 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiPlantHub', '0009_plant_sunlight_plantdetail_rare'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='image',
            field=models.CharField(max_length=2048, null=True),
        ),
    ]
