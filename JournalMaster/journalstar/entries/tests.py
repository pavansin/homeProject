from django.test import TestCase
from django.test import Client
from django.core.urlresolvers import reverse
from django.test.utils import setup_test_environment

# Create your tests here.
client = Client()

class EntriesViewTests(TestCase):
  def test_view_index(self):
    response = client.get('/entries/')
    self.assertContains(response, 'Hello')


