from django.conf.urls import url
from . import views

urlpatterns = [
    #ex: /entries/ - should show topics for current entry as calendar or table
    url(r'^$', views.index, name='index'),
    #ex: /entries/add/
    url(r'^add/$', views.add, name='add'),
    #ex: /entries/34/edit
    url(r'^(?P<entry_id>[0-9]+)/edit/$', views.edit, name='edit'),
]
