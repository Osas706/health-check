import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCheckSymptom } from "@/features/check-symptoms/api/check-symptoms";
import { Step } from "@/features/check-symptoms/component/step";
import { StepIndicator } from "@/features/check-symptoms/component/step-indicator";
import SummaryDetail from "@/features/check-symptoms/component/summary";
import { useHealthCheckStore } from "@/features/check-symptoms/store/store";
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
} from "@/features/check-symptoms/validator/validator";
import { AlertCircle, Loader2 } from "lucide-react";
import z from "zod";

function CheckSymptoms() {
  const { data, updateData, currentStep, setStep } = useHealthCheckStore();
  const totalSteps = 6;

  // useCheckSymptom
  const {
    mutate: checkHealth,
    data: checkHealthData,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCheckSymptom();

  return (
    <div className="w-full bg-slate-100 flex flex-col justify-center gap-2 py-10 min-h-[calc(100vh-20rem)]">
      <h1 className="text-4xl text-center font-bold">Check Symptoms</h1>
      <p className="text-center  mx-auto mt-[-10px] text-lg text-slate-500">
        Use our symptom checker to learn why you're not feeling well.
      </p>

      {currentStep === 1 && (
        <span className="text-center mx-auto text-sm max-w-md text-slate-500 font-semibold">
          Welcome to the HealthCheck AI symptom checker. <br /> In just a few
          questions, our AI technology will help determine a preliminary
          diagnosis.
        </span>
      )}

      <div className="flex flex-col items-start md:flex-row max-w-4xl gap-4 w-full mx-auto ">
        {/* questions */}
        <div className="md:w-1/2 w-full max-w-sm md:max-w-md mx-auto bg-white rounded-3xl border border-slate-300 p-5">
          {currentStep < 8 && (
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          )}

          {/* step 1 */}
          {currentStep === 1 && (
            <Step
              schema={step1Schema}
              defaultValues={{
                age: data.age,
                gender: data.gender,
              }}
              onSubmit={(data) => {
                updateData("age", data.age);
                updateData("gender", data.gender);
                setStep(currentStep + 1);
              }}
              currentStep={currentStep}
              setStep={setStep}
              isFirstStep
            >
              <div className="w-full space-y-4">
                {/* age */}
                <FormField
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How old are you?</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your age"
                          className="bg-card py-3"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* gender */}
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is your gender?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" py-3 w-full">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Step>
          )}

          {/* step 2 */}
          {currentStep === 2 && (
            <Step
              schema={step2Schema}
              defaultValues={{
                symptoms: data.symptoms,
                daysNoticed: data.daysNoticed,
              }}
              onSubmit={(data) => {
                updateData("symptoms", data.symptoms);
                updateData("daysNoticed", data.daysNoticed);
                setStep(currentStep + 1);
              }}
              currentStep={currentStep}
              setStep={setStep}
            >
              <div className="w-full space-y-4">
                {/* symptoms */}
                <FormField
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What symptoms are you currently experiencing?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g Headache, Cough ..."
                          className="bg-card py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* daysNoticed */}
                <FormField
                  name="daysNoticed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How many days have you noticed these symptoms?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter days"
                          className="bg-card py-3"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Step>
          )}

          {/* step 3 */}
          {currentStep === 3 && (
            <Step
              schema={step3Schema}
              defaultValues={{
                medicalHistory: data.medicalHistory,
                fitnessLevel: data.fitnessLevel,
                hygieneLevel: data.hygieneLevel,
              }}
              onSubmit={(data) => {
                updateData("medicalHistory", data.medicalHistory);
                updateData("fitnessLevel", data.fitnessLevel);
                updateData("hygieneLevel", data.hygieneLevel);
                setStep(currentStep + 1);
              }}
              currentStep={currentStep}
              setStep={setStep}
            >
              <div className="w-full space-y-4">
                {/* medicalHistory */}
                <FormField
                  name="medicalHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you have any relevant medical history or past
                        conditions?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Include allergies or chronic conditions if any"
                          className="bg-card py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* fitnessLevel */}
                <FormField
                  name="fitnessLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {" "}
                        How would you describe your current fitness level?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" py-3 w-full">
                            <SelectValue placeholder="Select Fitness Level" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* hygieneLevel */}
                <FormField
                  name="hygieneLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How would you rate your personal hygiene habits?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="py-3 w-full">
                            <SelectValue placeholder="Select Hygiene Level" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="poor">Poor</SelectItem>
                          <SelectItem value="average">Average</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Step>
          )}

          {/* step 4 */}
          {currentStep === 4 && (
            <Step
              schema={step4Schema}
              defaultValues={{
                sleepHours: data.sleepHours,
                stressLevel: data.stressLevel,
                waterIntake: data.waterIntake,
              }}
              onSubmit={(data) => {
                updateData("sleepHours", data.sleepHours);
                updateData("stressLevel", data.stressLevel);
                updateData("waterIntake", data.waterIntake);
                setStep(currentStep + 1);
              }}
              currentStep={currentStep}
              setStep={setStep}
            >
              <div className="w-full space-y-4">
                {/* sleepHours */}
                <FormField
                  name="sleepHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        On average, how many hours do you sleep per day?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          className="bg-card py-3"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* stressLevel */}
                <FormField
                  name="stressLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How would you describe your current stress level?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" py-3 w-full">
                            <SelectValue placeholder="Select Stress Level" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* waterIntake */}
                <FormField
                  name="waterIntake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {" "}
                        How would you describe your daily water intake?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="py-3 w-full">
                            <SelectValue placeholder="Select Water Intake" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="very_low">Very Low</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="very_high">Very High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Step>
          )}

          {/* step 5 */}
          {currentStep === 5 && (
            <Step
              schema={step5Schema}
              defaultValues={{
                medications: data.medications,
                extraDetails: data.extraDetails,
              }}
              onSubmit={(data) => {
                updateData("medications", data.medications);
                updateData("extraDetails", data.extraDetails);
                setStep(currentStep + 1);
              }}
              currentStep={currentStep}
              setStep={setStep}
            >
              <div className="w-full space-y-4">
                {/* medications */}
                <FormField
                  name="medications"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Are you currently taking any medications?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="If Yes, please write here ..."
                          className="bg-card py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* extraDetails */}
                <FormField
                  name="extraDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {" "}
                        Is there anything else about your health you would like
                        us to know ?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write here ..."
                          className="bg-card py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Step>
          )}

          {/* summary / step 6 */}
          {currentStep === 6 && (
            <Step
              schema={z.object({})}
              defaultValues={{}}
              onSubmit={() => {
                checkHealth(data);
              }}
              currentStep={currentStep}
              setStep={setStep}
              isLastStep
              loading={isPending}
            >
              <div className="w-full space-y-1">
                <h1 className="text-xl font-semibold text-slate-800 text-center mt-[-15px]">
                  Confirm Your Health Details
                </h1>

                <p className="text-xs text-slate-500 text-center">
                  Please review the information below carefully before
                  continuing.
                </p>

                <div className="w-full space-y-4">
                  <SummaryDetail label="Gender" value={data.gender} />
                  <SummaryDetail label="Age" value={data.age} />
                  <SummaryDetail label="Symptoms" value={data.symptoms} />
                  <SummaryDetail
                    label="Days Noticed"
                    value={data.daysNoticed}
                  />
                  <SummaryDetail
                    label="Medical History"
                    value={data.medicalHistory}
                  />
                  <SummaryDetail
                    label="Fitness Level"
                    value={data.fitnessLevel}
                  />
                  <SummaryDetail
                    label="Hygiene Level"
                    value={data.hygieneLevel}
                  />
                  <SummaryDetail
                    label="Sleep Pattern"
                    value={data.sleepHours}
                  />
                  <SummaryDetail
                    label="Stress Level"
                    value={data.stressLevel}
                  />
                  <SummaryDetail
                    label="Water Intake"
                    value={data.waterIntake}
                  />
                  <SummaryDetail label="Medications" value={data.medications} />
                  <SummaryDetail
                    label="Additional Details"
                    value={data.extraDetails}
                  />
                </div>
              </div>
            </Step>
          )}

          {/* notice */}
          <div className="flex items-start gap-1 text-red-400 mt-5">
            <div className="">
              <AlertCircle size={20} />
            </div>

            <p className="text-xs">
              This tool is not a substitute for professional medical advice,
              diagnosis, or treatment. If you are experiencing a
              life-threatening emergency that requires immediate attention
              please call 911 or the number for your local emergency service.
            </p>
          </div>
        </div>

        {/* answers */}
        {isSuccess && (
          <div className="md:w-1/2 w-full max-w-sm md:max-w-md mx-auto bg-white rounded-3xl border border-slate-300 p-5">
            {isSuccess && (
              <div className="w-full h-full">
                <h3 className="text-2xl font-semibold text-center mb-5">
                  Diagnosis
                </h3>
                <div className="min-h-80 w-full whitespace-pre-line leading-relaxed text-sm text-gray-700">
                  {checkHealthData?.diagnosis}
                </div>
              </div>
            )}

            {isPending && (
              <p className="text-sm text-slate-500 flex items-center gap-2 w-max mx-auto mt-10">
                Analyzing your symptoms
                <Loader2 className="h-5 w-5 animate-spin" />
              </p>
            )}

            {isError && (
              <p className="text-sm text-red-600 mt-10 flex items-center gap-2 w-max mx-auto">
                {(error as any)?.response?.data?.message ||
                  "Something went wrong"}

                <AlertCircle size={20} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckSymptoms;
