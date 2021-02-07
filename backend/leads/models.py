from django.db import models

class User(models.Model):
  SEX_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female')
  )
  
  age = models.IntegerField(default=0)
  sex = models.CharField(choices=SEX_CHOICES, max_length=20)
  email = models.EmailField(max_length=100, unique=True)
  password = models.CharField(max_length=100)
  last_name = models.CharField(max_length=20)
  created_at = models.DateField(auto_now=True)
  first_name = models.CharField(max_length=20)
  profile_img = models.ImageField()
  
  # Metadata
  class Meta:
      ordering = ['id']

  def __str__(self):
      """String for representing the MyModelName object (in Admin site etc.)."""
      return self.first_name + self.last_name
  