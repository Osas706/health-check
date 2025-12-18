import { create } from "zustand";
import type { HealthCheckPayload } from "../validator/type";

interface HealthCheckStore {
  currentStep: number;
  setStep: (step: number) => void;

  data: HealthCheckPayload;
  updateData: (field: keyof HealthCheckPayload, value: any) => void;

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
