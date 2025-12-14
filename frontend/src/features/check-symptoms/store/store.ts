import { create } from "zustand";

interface HealthCheckData {
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

interface HealthCheckStore {
  currentStep: number;
  setStep: (step: number) => void;

  data: HealthCheckData;
  updateData: (field: keyof HealthCheckData, value: any) => void;

  reset: () => void;
}

export const useHealthCheckStore = create<HealthCheckStore>((set) => ({
  currentStep: 1,

  data: {
    age: 0,
    gender: "male",
    symptoms: "",
    daysNoticed: 0,
    medicalHistory: "",
    fitnessLevel: "low",
    hygieneLevel: "average",
    sleepHours: 0,
    stressLevel: "low",
    waterIntake: "moderate",
    medications: "",
    extraDetails: "",
  },

  updateData: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: value,
      },
    })),

  setStep: (step) => set({ currentStep: step }),

  reset: () =>
    set({
      currentStep: 1,
      data: { 
        age: 0,
        gender: "male",
        symptoms: "",
        daysNoticed: 0,
        medicalHistory: "",
        fitnessLevel: "low",
        hygieneLevel: "average",
        sleepHours: 0,
        stressLevel: "low",
        waterIntake: "moderate",
        medications: "",
        extraDetails: "",
      },
    }),
}));
