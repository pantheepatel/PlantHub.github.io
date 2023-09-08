# Generated by Django 4.2.4 on 2023-09-05 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiPlantHub', '0003_plant_image_alter_plant_cycle_alter_plant_watering'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlantDetail',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, null=True)),
                ('cycle', models.CharField(max_length=255, null=True)),
                ('watering', models.CharField(max_length=255, null=True)),
                ('description', models.CharField(max_length=1000, null=True)),
                ('image', models.URLField(null=True)),
                ('type', models.CharField(max_length=255, null=True)),
                ('flowers', models.BooleanField(null=True)),
                ('flowering_season', models.CharField(max_length=255, null=True)),
                ('fruit', models.BooleanField(null=True)),
                ('edible_fruit', models.BooleanField(null=True)),
                ('fruiting_season', models.CharField(max_length=255, null=True)),
                ('growth_rate', models.CharField(max_length=255, null=True)),
                ('maintenance', models.CharField(max_length=255, null=True)),
                ('medicinal', models.BooleanField(null=True)),
                ('poisonous_to_humans', models.BooleanField(null=True)),
                ('poisonous_to_pets', models.BooleanField(null=True)),
                ('thorny', models.BooleanField(null=True)),
                ('rare', models.BooleanField(null=True)),
                ('indoor', models.BooleanField(null=True)),
                ('care_level', models.CharField(max_length=255, null=True)),
            ],
        ),
    ]
