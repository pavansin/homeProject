from django.shortcuts import render
from django.http import HttpResponse
from .models import Journal

# Create your views here.
def index(request):
	entries = Journal.objects.all()
	context = {'entries': entries}
	return render(request, 'entries/index.html', context)

def add(request):
	return HttpResponse("adding an entry")

def edit(request, entry_id):
	return HttpResponse("editing id:" + entry_id)
