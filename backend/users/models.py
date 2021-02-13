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
  nick_name = models.CharField(max_length=20)
  profile_img = models.ImageField()
  
  # Metadata
  class Meta:
      ordering = ['id']

  # def __str__(self):
  #     """String for representing the MyModelName object (in Admin site etc.)."""
  #     return self.first_name + self.last_name
  