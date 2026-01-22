"use client";

import { motion } from "framer-motion";
import { BrainLogoAnimation } from "./brain-logo-animation";
import { useEffect, useState } from "react";
import { BrainAnimation } from "./brain-animation"; // Import the BrainAnimation component

interface AnalysisScreenProps {
  onComplete: () => void;
}

const analysisSteps = [
  { label: "Processing responses", duration: 2000 },
  { label: "Analyzing memory patterns", duration: 2500 },
  { label: "Evaluating cognitive markers", duration: 2000 },
  { label: "Assessing attention metrics", duration: 2500 },
  { label: "Calculating orientation scores", duration: 2000 },
  { label: "Reviewing language processing", duration: 2000 },
  { label: "Examining behavioral indicators", duration: 2500 },
  { label: "Generating comprehensive report", duration: 3000 },
];

export function AnalysisScreen({ onComplete }: AnalysisScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = analysisSteps.reduce((acc, step) => acc + step.duration, 0);
    let elapsed = 0;

    const stepTimeouts: NodeJS.Timeout[] = [];
    let stepElapsed = 0;

    analysisSteps.forEach((step, index) => {
      stepTimeouts.push(
        setTimeout(() => {
          setCurrentStep(index);
        }, stepElapsed)
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center max-w-2xl w-full"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Analyzing Your Results
          </h1>
          <p className="text-muted-foreground">
            Please wait while our system processes your assessment
          </p>
        </motion.div>

        {/* Brain Animation */}
        <div className="mb-12">
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
        <div className="w-full max-w-md">
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

        {/* Analysis Steps List */}
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
              <div className="flex items-center justify-center gap-2">
                {index < currentStep ? (
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : index === currentStep ? (
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                )}
              </div>
              <span className="mt-1 block truncate">{step.label.split(' ').slice(0, 2).join(' ')}</span>
            </motion.div>
          ))}
        </div>

        {/* Lab-like decorative elements */}
        <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>Neural Network Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Processing Data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Secure Analysis</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
