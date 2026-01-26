"use client";

import { motion } from "framer-motion";
import { Brain, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

interface QuickInsightProps {
  questionNumber: number;
  category: string;
  answers: Record<number, string>;
  onContinue: () => void;
}

export function QuickInsight({
  questionNumber,
  category,
  answers,
  onContinue,
}: QuickInsightProps) {
  // Define quick insights that appear at specific questions
  const quickInsights = [
    {
      triggerAt: 8,
      message: "Analyzing memory patterns for dementia risk indicators",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      triggerAt: 15,
      message: "Evaluating cognitive changes associated with dementia",
      icon: Lightbulb,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
    },
    {
      triggerAt: 22,
      message: "Assessing attention deficits linked to dementia progression",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      triggerAt: 30,
      message: "Screening for early-stage dementia warning signs",
      icon: CheckCircle,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  const currentInsight = quickInsights.find(
    (insight) => insight.triggerAt === questionNumber,
  );

  if (!currentInsight) return null;

  // Auto-continue after 3 seconds
  setTimeout(() => {
    onContinue();
  }, 3000);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 max-w-md w-full mx-4"
    >
      <div
        className={`bg-card border ${currentInsight.borderColor} rounded-2xl shadow-lg p-4 ${currentInsight.bgColor}`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${currentInsight.bgColor}`}>
            <currentInsight.icon
              className={`h-5 w-5 ${currentInsight.color}`}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {currentInsight.message}
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center mt-3 gap-1">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${currentInsight.color.replace("text-", "bg-")}`}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
