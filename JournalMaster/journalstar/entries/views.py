from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	#entries = Journal.objects.order_by('last_updated')
	return HttpResponse("Hello, world. You are at entries index.")

def add(request):
	return HttpResponse("adding an entry")

def edit(request, entry_id):
	return HttpResponse("editing id:" + entry_id)
