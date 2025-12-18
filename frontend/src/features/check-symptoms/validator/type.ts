// HealthCheckPayload
export interface HealthCheckPayload {
  age: number;
  gender: "male" | "female";
  symptoms: string;
  daysNoticed: number;
  medicalHistory: string;
  fitnessLevel: "low" | "medium" | "high";
  hygieneLevel: "poor" | "average" | "good" | "excellent";
  sleepHours: number;
  stressLevel: "low" | "medium" | "high";
  waterIntake: "very_low" | "low" | "moderate" | "high" | "very_high";
  medications: string;
  extraDetails: string;
}

// HealthCheckResponse
export interface HealthCheckResponse {
  success: boolean;
  message: string;
  diagnosis: string;
  record_id: number;
}
