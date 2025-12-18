from django.db import models


class CheckSymptom(models.Model):
  age = models.PositiveIntegerField()
  gender = models.CharField(max_length=10)

  symptoms = models.TextField()
  days_noticed = models.PositiveIntegerField()

  medical_history = models.TextField(blank=True)
  medications = models.TextField(blank=True)

  fitness_level = models.CharField(max_length=50)
  hygiene_level = models.CharField(max_length=50)

  sleep_hours = models.FloatField()
  stress_level = models.CharField(max_length=50)

  water_intake = models.CharField(max_length=50)
  extra_details = models.TextField(blank=True)

  ai_result = models.TextField(blank=True)

  created_at = models.DateTimeField(auto_now_add=True)
