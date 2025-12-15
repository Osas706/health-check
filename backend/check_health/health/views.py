from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
def check_symptom(request):
  return Response({
    "success": True,
    "message": "Health check endpoint is live"
  })
