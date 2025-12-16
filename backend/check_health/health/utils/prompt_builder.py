
def build_health_prompt(data: dict) -> str:
  return f"""
Patient Health Summary:

Gender: {data.get('gender', 'Not provided')}
Age: {data.get('age', 'Not provided')}

Symptoms:
{data.get('symptoms', 'Not provided')}

Duration:
Symptoms noticed for {data.get('daysNoticed', 'Not provided')} days.

Medical History:
{data.get('medicalHistory', 'Not provided')}

Lifestyle:
- Fitness level: {data.get('fitnessLevel', 'Not provided')}
- Hygiene habits: {data.get('hygieneLevel', 'Not provided')}
- Sleep pattern: {data.get('sleepHours', 'Not provided')}
- Stress level: {data.get('stressLevel', 'Not provided')}
- Water intake: {data.get('waterIntake', 'Not provided')}

Medications:
{data.get('medications', 'None reported')}

Additional Details:
{data.get('extraDetails', 'None')}
"""