# Generated by Django 4.2.4 on 2023-09-08 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiPlantHub', '0012_alter_plant_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='image',
            field=models.URLField(null=True),
        ),
    ]
