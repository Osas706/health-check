import { api } from "@/lib/api";
import type { HealthCheckPayload, HealthCheckResponse } from "../validator/type";
import { useMutation } from "@tanstack/react-query";

// checkSymptom
export const checkSymptom = async (data: HealthCheckPayload): Promise<HealthCheckResponse> => {
  const res = await api.post<HealthCheckResponse>("/check-symptom/", {
    details: data,
  });

  return res.data;
};

// useCheckSymptom
export const useCheckSymptom = () => {
  return useMutation({
    mutationFn: (data: HealthCheckPayload) => checkSymptom(data),
  });
};