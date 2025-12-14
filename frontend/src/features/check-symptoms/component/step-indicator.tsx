interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-6 flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-3 w-3 rounded-full ${
            i + 1 <= currentStep ? "bg-red-600 ring-2  ring-red-200" : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
}
