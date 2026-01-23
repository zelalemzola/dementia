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
  { label: "Processing your responses", duration: 2000 },
  { label: "Analyzing memory patterns", duration: 2500 },
  { label: "Evaluating cognitive markers", duration: 2000 },
  { label: "Assessing dementia risk factors", duration: 2500 },
  { label: "Comparing with clinical data", duration: 2000 },
  { label: "Reviewing neurological indicators", duration: 2500 },
  { label: "Generating medical report", duration: 3000 },
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center max-w-2xl w-full"
      >
        {/* Doctor Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 mb-8 bg-card border border-border rounded-2xl p-6 w-full"
        >
          <div className="relative">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/40">
              <Image
                src="/images/dr-sam-profile.webp"
                alt="Dr. Samuel Richardson"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-card flex items-center justify-center">
              <Stethoscope className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-1">
              Dr. Richardson is reviewing your results
            </h2>
            <p className="text-muted-foreground text-sm">
              After reviewing the results, we noticed there is something that
              you really need to know about your risk of dementia.
            </p>
          </div>
        </motion.div>

        {/* Analysis Animation */}
        <div className="mb-8">
          <BrainLogoAnimation isAnalyzing={true} size="lg" />
        </div>

        {/* Current Step */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            <span className="text-lg font-medium text-foreground">
              {analysisSteps[currentStep]?.label}
            </span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Medical Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-4 w-full"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-1">
                Please be patient
              </p>
              <p className="text-xs text-amber-700">
                Sometimes the results might indicate areas of concern. We're
                preparing a comprehensive analysis to help you understand your
                cognitive health.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Analysis Steps Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {analysisSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.3,
                scale: index === currentStep ? 1.05 : 1,
              }}
              className={`rounded-lg border p-3 text-center text-xs transition-all ${
                index === currentStep
                  ? "border-primary bg-primary/10 text-primary"
                  : index < currentStep
                    ? "border-primary/50 bg-primary/5 text-primary/80"
                    : "border-border bg-card text-muted-foreground"
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                {index < currentStep ? (
                  <svg
                    className="h-3 w-3"
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
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                )}
              </div>
              <span className="block truncate">
                {step.label.split(" ").slice(0, 2).join(" ")}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Medical indicators */}
        <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Brain className="h-3 w-3 text-primary animate-pulse" />
            <span>Neurological Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-3 w-3 text-accent animate-pulse" />
            <span>Medical Report</span>
          </div>
          <div className="flex items-center gap-2">
            <Stethoscope className="h-3 w-3 text-green-500 animate-pulse" />
            <span>Clinical Review</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
