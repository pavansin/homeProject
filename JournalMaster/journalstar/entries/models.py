from django.db import models

# Models from creating journal entries
class Topic(models.Model):
	name = models.CharField(max_length=1024);
	last_updated = models.DateTimeField('date last updated');
	def __str__(self):
	    return self.name

class Journal(models.Model):
	topic = models.ForeignKey(Topic)
	event_date = models.DateTimeField('date of journal');
	start_date = models.DateTimeField('start time');
	end_date = models.DateTimeField('end time');
	note = models.CharField(max_length=1024);
	last_updated = models.DateTimeField('date last updated');
	last_updated_by = models.CharField(max_length=256);
	def __str__(self):
	    return self.topic.name + " " + self.note
