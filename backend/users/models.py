from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  SEX_CHOICES = (
    ('male', 'male'),
    ('female', 'female'),
    ('etc', 'etc')
  )
  
  age = models.IntegerField(default=0)
  sex = models.CharField(choices=SEX_CHOICES, max_length=20)
  email = models.EmailField(unique=True)
  phone = models.CharField(blank=True, max_length=100)
  created = models.DateTimeField(auto_now_add=True)
  nick_name = models.CharField(max_length=20)
  profile_img = models.ImageField(blank=True, null=True)
  
  # Metadata
  class Meta:
      ordering = ['created']

  # def __str__(self):
  #     """String for representing the MyModelName object (in Admin site etc.)."""
  #     return self.first_name + self.last_name
  