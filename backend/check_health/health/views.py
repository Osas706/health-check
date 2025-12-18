from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from .utils.prompt_builder import build_health_prompt
from django.conf import settings
from .models import CheckSymptom

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

    health_check = CheckSymptom.objects.create(
      age=health_data.get("age"),
      gender=health_data.get("gender"),
      symptoms=health_data.get("symptoms"),
      days_noticed=health_data.get("daysNoticed"),
      medical_history=health_data.get("medicalHistory"),
      medications=health_data.get("medications"),
      fitness_level=health_data.get("fitnessLevel"),
      hygiene_level=health_data.get("hygieneLevel"),
      sleep_hours=health_data.get("sleepHours"),
      stress_level=health_data.get("stressLevel"),
      water_intake=health_data.get("waterIntake"),
      extra_details=health_data.get("extraDetails"),
      ai_result=ai_response,
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


@api_view(["GET"])
def recent_diagnoses(request):
  records = CheckSymptom.objects.order_by("-created_at")[:5]

  #  r.created_at.strftime("%Y-%m-%d %H:%M")

  data = [
    {
      "id": r.id,
      "age": r.age,
      "gender": r.gender,
      "symptoms": r.symptoms,
      "ai_result": r.ai_result,
      "created_at": r.created_at,
    }
    for r in records
  ]

  return Response({
    "success": True,
    "data": data
  })
