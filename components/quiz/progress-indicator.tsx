"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, Brain, Trophy, Target } from "lucide-react";

interface ProgressIndicatorProps {
  currentQuestion: number;
  totalQuestions: number;
  category: string;
}

export function ProgressIndicator({
  currentQuestion,
  totalQuestions,
  category,
}: ProgressIndicatorProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  // Milestone markers
  const milestones = [
    { at: 25, label: "Memory", icon: Brain, color: "text-blue-500" },
    { at: 50, label: "Cognitive", icon: Target, color: "text-green-500" },
    { at: 75, label: "Final", icon: Trophy, color: "text-purple-500" },
  ];

  const getPersonalMessage = () => {
    if (progress < 25) return "Great start! Building your memory profile.";
    if (progress < 50)
      return "Excellent progress! Analyzing cognitive patterns.";
    if (progress < 75) return "Almost there! Finalizing your assessment.";
    return "Final stretch! Preparing your report.";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mb-4"
    >
      <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
        {/* Progress Header - Compact */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Assessment Progress
            </h3>
            <p className="text-xs text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">
              {Math.round(progress)}%
            </div>
            <div className="text-xs text-muted-foreground">Complete</div>
          </div>
        </div>

        {/* Progress Bar - Smaller */}
        <div className="relative mb-3">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Milestone markers - Smaller */}
          {milestones.map((milestone) => (
            <div
              key={milestone.at}
              className="absolute top-0 transform -translate-x-1/2"
              style={{ left: `${milestone.at}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 border-card flex items-center justify-center ${
                  progress >= milestone.at ? "bg-primary" : "bg-secondary"
                }`}
              >
                {progress >= milestone.at ? (
                  <CheckCircle className="w-2 h-2 text-white" />
                ) : (
                  <Circle className="w-2 h-2 text-muted-foreground" />
                )}
              </div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div
                  className={`text-xs font-medium ${progress >= milestone.at ? milestone.color : "text-muted-foreground"}`}
                >
                  {milestone.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Message - Compact */}
        <motion.div
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-2 mt-10"
        >
          <p className="text-xs text-foreground font-medium text-center">
            {getPersonalMessage()}
          </p>
        </motion.div>

        {/* Category Badge - Smaller */}
        <div className="flex items-center justify-center mt-2">
          <div className="inline-flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-foreground">
              Current: {category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
