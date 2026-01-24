"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, Brain, Trophy, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  category?: string;
}

export function ProgressBar({ current, total, category }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  const progress = (current / total) * 100;

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
    <div className="w-full space-y-3">
      {/* Header with progress info */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Progress</span>
          {category && (
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
              {category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-primary text-xs">{current}</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-mono text-muted-foreground text-xs">
            {total}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="font-mono text-primary text-xs">{percentage}%</span>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="relative">
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          {/* Animated background glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(90deg, transparent, var(--primary), transparent)`,
              animation: "shimmer 2s infinite",
            }}
          />

          {/* Progress fill */}
          <motion.div
            className={cn(
              "relative h-full rounded-full transition-all duration-500 ease-out",
              "bg-gradient-to-r from-primary via-accent to-primary",
            )}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Animated pulse on progress bar */}
            <div className="absolute inset-0 animate-pulse bg-white/20 rounded-full" />
          </motion.div>
        </div>

        {/* Milestone markers */}
        {milestones.map((milestone) => (
          <div
            key={milestone.at}
            className="absolute top-0 transform -translate-x-1/2"
            style={{ left: `${milestone.at}%` }}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 border-card flex items-center justify-center ${
                progress >= milestone.at ? "bg-primary" : "bg-secondary"
              }`}
            >
              {progress >= milestone.at ? (
                <CheckCircle className="w-3 h-3 text-white" />
              ) : (
                <Circle className="w-3 h-3 text-muted-foreground" />
              )}
            </div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div
                className={`text-xs font-medium ${progress >= milestone.at ? milestone.color : "text-muted-foreground"}`}
              >
                {milestone.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Message */}
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

      {/* Visual markers at bottom */}
      <div className="relative h-1">
        {[0, 25, 50, 75, 100].map((marker) => (
          <div
            key={marker}
            className={cn(
              "absolute top-0 h-1 w-px",
              percentage >= marker ? "bg-primary/60" : "bg-border",
            )}
            style={{ left: `${marker}%` }}
          />
        ))}
      </div>
    </div>
  );
}
