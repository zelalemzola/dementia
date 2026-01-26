"use client";

import { motion } from "framer-motion";
import { BrainLogoAnimation } from "./brain-logo-animation";
import { useEffect, useState } from "react";
import { Stethoscope, Brain, FileText, AlertCircle } from "lucide-react";
import Image from "next/image";

interface AnalysisScreenProps {
  onComplete: () => void;
}

const analysisSteps = [
  { label: "Processing dementia risk factors", duration: 2000 },
  { label: "Analyzing memory decline patterns", duration: 2500 },
  { label: "Evaluating cognitive impairment markers", duration: 2000 },
  { label: "Assessing dementia progression indicators", duration: 2500 },
  { label: "Comparing with dementia clinical data", duration: 2000 },
  { label: "Reviewing neurodegeneration signs", duration: 2500 },
  { label: "Generating dementia risk report", duration: 3000 },
];

export function AnalysisScreen({ onComplete }: AnalysisScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = analysisSteps.reduce(
      (acc, step) => acc + step.duration,
      0,
    );
    let elapsed = 0;

    const stepTimeouts: NodeJS.Timeout[] = [];
    let stepElapsed = 0;

    analysisSteps.forEach((step, index) => {
      stepTimeouts.push(
        setTimeout(() => {
          setCurrentStep(index);
        }, stepElapsed),
      );
      stepElapsed += step.duration;
    });

    const progressInterval = setInterval(() => {
      elapsed += 50;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));

      if (elapsed >= totalDuration) {
        clearInterval(progressInterval);
        setTimeout(onComplete, 500);
      }
    }, 50);

    return () => {
      clearInterval(progressInterval);
      stepTimeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center max-w-lg w-full space-y-6"
      >
        {/* Doctor Header - Scaled Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 w-full"
        >
          <div className="relative flex-shrink-0">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/40">
              <Image
                src="/images/dr-sam-profile.webp"
                alt="Dr. Samuel Richardson"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-primary border-2 border-card flex items-center justify-center">
              <Stethoscope className="h-2 w-2 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-foreground mb-1">
              Dr. Richardson is analyzing your dementia risk
            </h2>
            <p className="text-muted-foreground text-sm">
              After reviewing your responses, we've identified patterns that
              require careful analysis to determine your risk of dementia and
              cognitive decline.
            </p>
          </div>
        </motion.div>

        {/* Analysis Animation - Scaled Down */}
        <div className="flex flex-col items-center space-y-4">
          <div className="scale-75">
            <BrainLogoAnimation isAnalyzing={true} size="md" />
          </div>

          {/* Current Step - Better positioned */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Analyzing: Dementia Risk Factors
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {analysisSteps[currentStep]?.label}
            </span>
          </motion.div>
        </div>

        {/* Progress Bar - Compact */}
        <div className="w-full max-w-xs">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center text-xs text-muted-foreground">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Medical Notice - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="bg-amber-50 border border-amber-200 rounded-lg p-3 w-full"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-amber-800 font-medium mb-1">
                Dementia Assessment Notice
              </p>
              <p className="text-xs text-amber-700">
                Your responses may indicate cognitive changes consistent with
                early dementia signs. We're preparing a comprehensive analysis
                to help you understand your risk level and next steps.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Analysis Steps Grid - More Compact */}
        <div className="grid grid-cols-4 gap-2 w-full">
          {analysisSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.3,
                scale: index === currentStep ? 1.02 : 1,
              }}
              className={`rounded-md border p-2 text-center text-xs transition-all ${
                index === currentStep
                  ? "border-primary bg-primary/10 text-primary"
                  : index < currentStep
                    ? "border-primary/50 bg-primary/5 text-primary/80"
                    : "border-border bg-card text-muted-foreground"
              }`}
            >
              <div className="flex items-center justify-center mb-1">
                {index < currentStep ? (
                  <svg
                    className="h-2 w-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : index === currentStep ? (
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                )}
              </div>
              <span className="block text-xs leading-tight">
                {step.label.split(" ").slice(0, 2).join(" ")}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Medical indicators - Compact */}
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Brain className="h-3 w-3 text-primary animate-pulse" />
            <span>Dementia</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-3 w-3 text-accent animate-pulse" />
            <span>Risk Report</span>
          </div>
          <div className="flex items-center gap-1">
            <Stethoscope className="h-3 w-3 text-green-500 animate-pulse" />
            <span>Medical</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
