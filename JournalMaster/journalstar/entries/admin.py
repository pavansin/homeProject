from django.contrib import admin
from .models import Topic
from .models import Journal

class TopicAdmin(admin.ModelAdmin):
    fieldsets = [
	(None, 	{'fields': ['name']}),
    ]
    list_display = ('name', 'last_updated')
	

# Register your models here.
admin.site.register(Topic, TopicAdmin)
admin.site.register(Journal)


