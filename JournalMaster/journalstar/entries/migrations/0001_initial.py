# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('event_date', models.DateTimeField(verbose_name='date of journal')),
                ('start_date', models.DateTimeField(verbose_name='start time')),
                ('end_date', models.DateTimeField(verbose_name='end time')),
                ('note', models.CharField(max_length=1024)),
                ('last_updated', models.DateTimeField(verbose_name='date last updated')),
                ('last_updated_by', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=1024)),
                ('last_updated', models.DateTimeField(verbose_name='date last updated')),
            ],
        ),
        migrations.AddField(
            model_name='journal',
            name='topic',
            field=models.ForeignKey(to='entries.Topic'),
        ),
    ]
