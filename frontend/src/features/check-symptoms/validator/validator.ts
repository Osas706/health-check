import { z } from "zod";

export const step1Schema = z.object({
  age: z.coerce.number().min(1, "Age must be at least 1"),
  gender: z.enum(["male", "female"],{ message: "Select your gender" }),
});

export const step2Schema = z.object({
  symptoms: z.string().min(3,{ message: "Select at least one symptom" }),
  daysNoticed: z.coerce.number().min(0).max(365,{ message: "Days noticed must be between 0 and 365" }),
});

export const step3Schema = z.object({
  medicalHistory: z.string().min(3,{ message: "Select at least one symptom" }),
  fitnessLevel: z.enum(["low", "medium", "high"], { message: "Select your fitness level" }),
  hygieneLevel: z.enum(["poor", "average", "good", "excellent"], { message: "Select your hygiene level" }),
});

export const step4Schema = z.object({
  sleepHours: z.coerce.number().min(0).max(24,{ message: "Sleep hours must be between 0 and 24" }),
  stressLevel: z.enum(["low", "medium", "high"], { message: "Select your stress level" }),
  waterIntake: z.enum(["very_low", "low", "moderate", "high", "very_high"],{ message: "Please select your daily water intake level" }),
});

export const step5Schema = z.object({
  medications: z.string().max(200).optional(),
  extraDetails: z.string().max(200).optional(),
});


