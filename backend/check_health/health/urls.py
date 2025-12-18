from django.urls import path
from .views import check_symptom, recent_diagnoses

urlpatterns = [
  path("check-symptom/", check_symptom),
  path("recent-diagnoses/", recent_diagnoses),  
]
