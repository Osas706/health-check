from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
import os
from .utils.prompt_builder import build_health_prompt
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

SYSTEM_PROMPT = """
You are a medical assistant providing general health information.

Analyze the user's symptoms and lifestyle details and provide:
- Possible explanations (not a diagnosis)
- General health guidance
- When to seek professional medical care

Rules:
- Do NOT provide a medical diagnosis
- Do NOT prescribe medication
- Avoid definitive language
- Include a professional care disclaimer
"""

@api_view(["POST"])
def check_symptom(request):
  health_data = request.data.get("details")

  if not health_data:
    return Response(
      {"success": False, "message": "Missing required field"},
      status=status.HTTP_400_BAD_REQUEST,
    )

  try:
    user_prompt = build_health_prompt(health_data)

    response = client.chat.completions.create(
      model=settings.OPENAI_MODEL,
      messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": user_prompt},
      ],
    )

    ai_response = response.choices[0].message.content

    health_check = HealthCheck.objects.create(
      age=data.get("age"),
      gender=data.get("gender"),
      symptoms=data.get("symptoms"),
      days_noticed=data.get("daysNoticed"),
      medical_history=data.get("medicalHistory"),
      medications=data.get("medications"),
      fitness_level=data.get("fitnessLevel"),
      hygiene_level=data.get("hygieneLevel"),
      sleep_hours=data.get("sleepHours"),
      stress_level=data.get("stressLevel"),
      water_intake=data.get("waterIntake"),
      extra_details=data.get("extraDetails"),
      ai_result=ai_result,
    )
    return Response(
      {
        "success": True,
        "message": "Health diagnosis generated successfully",
        "diagnosis": ai_response,
        "record_id": health_check.id
      },
      status=status.HTTP_200_OK,
    )

  except Exception as error:
    return Response(
      {
        "success": False,
        "message": "AI processing failed",
        "error": str(error),
      },
      status=status.HTTP_500_INTERNAL_SERVER_ERROR,
    )

