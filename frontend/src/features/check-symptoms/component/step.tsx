import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

interface StepProps<T extends z.ZodType<any, any>> {
  schema: T;
  defaultValues: z.infer<T>;
  onSubmit: (data: z.infer<T>) => void;
  children: React.ReactNode;
  isLastStep?: boolean;
  isFirstStep?: boolean;
  currentStep: number;
  setStep: (step: number) => void;
  loading?: boolean;
}

export function Step<T extends z.ZodType<any, any>>({
  schema,
  defaultValues,
  onSubmit,
  children,
  isLastStep = false,
  isFirstStep = false,
  currentStep,
  setStep,
  loading = false,
}: StepProps<T>) {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues,
    mode: "onChange",
  });
  

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => onSubmit(data as z.output<T>))}
          className="min-w-full space-y-3 "
        >
          {children}

          <div className="mx-auto flex items-center justify-between gap-4">
            {!isFirstStep && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(currentStep - 1)}
                className=" border-gray-300 cursor-pointer"
              >
                Back
              </Button>
            )}

              <Button
                type="submit"
                variant={"default"}
                className="ml-auto cursor-pointer disabled:opacity-80 flex items-center gap-2"
                disabled={loading}
              >
                {isLastStep ? `Submit ` : "Next"}  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              </Button>
  
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
