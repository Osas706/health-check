from django.urls import path
from .views import check_symptom

urlpatterns = [
  path("check-symptom/", check_symptom),
]
