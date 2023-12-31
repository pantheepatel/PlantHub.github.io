# Generated by Django 4.2.4 on 2023-09-09 05:48

from django.db import migrations, models
import django.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('apiPlantHub', '0014_plantdetail_attracts_plantdetail_fruiting_season'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='cycle',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plant',
            name='image',
            field=models.URLField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='plant',
            name='name',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plant',
            name='sunlight',
            field=models.JSONField(blank=True, default='', max_length=30, verbose_name=django.db.models.fields.CharField),
        ),
        migrations.AlterField(
            model_name='plant',
            name='watering',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='attracts',
            field=models.JSONField(blank=True, default='', max_length=255, verbose_name=django.db.models.fields.CharField),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='care_level',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='cycle',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='description',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='edible_fruit',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='flowering_season',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='flowers',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='fruit',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='fruiting_season',
            field=models.JSONField(blank=True, default='', max_length=255, verbose_name=django.db.models.fields.CharField),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='growth_rate',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='image',
            field=models.URLField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='indoor',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='maintenance',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='medicinal',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='name',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='poisonous_to_humans',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='poisonous_to_pets',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='rare',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='thorny',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='type',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='plantdetail',
            name='watering',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
    ]
