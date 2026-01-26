"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Target,
  Eye,
  MessageCircle,
  Heart,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CognitiveInsightProps {
  questionNumber: number;
  category: string;
  answers: Record<number, string>;
  onContinue: () => void;
}

export function CognitiveInsight({
  questionNumber,
  category,
  answers,
  onContinue,
}: CognitiveInsightProps) {
  // Define insights that appear at specific question intervals
  const insights = [
    {
      triggerAt: 5,
      title: "Dementia Risk Assessment",
      subtitle: "Analyzing early warning signs...",
      visual: "brain-scan",
      message:
        "Your memory responses are being evaluated against clinical dementia markers. We're identifying patterns that may indicate cognitive changes.",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      triggerAt: 12,
      title: "Cognitive Decline Indicators",
      subtitle: "Evaluating dementia risk factors...",
      visual: "strength-meter",
      message:
        "We're comparing your responses to established dementia screening criteria. Some patterns may suggest areas that need attention.",
      icon: Target,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      triggerAt: 20,
      title: "Memory Function Analysis",
      subtitle: "Assessing dementia-related changes...",
      visual: "attention-chart",
      message:
        "Your attention and memory patterns are being evaluated for signs consistent with early-stage dementia. Continue for a complete assessment.",
      icon: Eye,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
    },
    {
      triggerAt: 28,
      title: "Dementia Screening Progress",
      subtitle: "Analyzing cognitive impairment signs...",
      visual: "language-network",
      message:
        "Language and communication difficulties can be early dementia symptoms. Your responses are being compared to clinical dementia profiles.",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      triggerAt: 35,
      title: "Final Dementia Assessment",
      subtitle: "Completing your dementia risk profile...",
      visual: "final-analysis",
      message:
        "Your comprehensive dementia screening is nearly complete. The final questions will help determine your overall cognitive health status.",
      icon: Heart,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
  ];

  const currentInsight = insights.find(
    (insight) => insight.triggerAt === questionNumber,
  );

  if (!currentInsight) return null;

  const getVisualComponent = () => {
    switch (currentInsight.visual) {
      case "brain-scan":
        return (
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 animate-pulse" />
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 animate-ping"
              style={{ animationDuration: "2s" }}
            />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
        );

      case "strength-meter":
        return (
          <div className="relative w-40 h-20 mx-auto mb-6">
            <div className="w-full h-4 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "78%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-2xl font-bold text-green-600">78%</span>
              <p className="text-xs text-muted-foreground">
                Cognitive Strength
              </p>
            </div>
          </div>
        );

      case "attention-chart":
        return (
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-secondary"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 0.65) }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-amber-600">65%</div>
                <div className="text-xs text-muted-foreground">Focus</div>
              </div>
            </div>
          </div>
        );

      case "language-network":
        return (
          <div className="relative w-40 h-24 mx-auto mb-6">
            <div className="flex justify-between items-center h-full">
              {[1, 2, 3, 4, 5].map((bar, index) => (
                <motion.div
                  key={bar}
                  className="w-6 bg-gradient-to-t from-purple-500 to-pink-600 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 60 + 40}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Language Processing
            </p>
          </div>
        );

      case "final-analysis":
        return (
          <div className="relative w-32 h-32 mx-auto mb-6">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-4"
    >
      <div className="relative max-w-md w-full">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-xl" />

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className={`relative bg-card border ${currentInsight.borderColor} rounded-3xl shadow-2xl overflow-hidden`}
        >
          {/* Doctor Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border/50">
            <div className="relative">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40">
                <Image
                  src="/images/dr-sam-profile.webp"
                  alt="Dr. Samuel Richardson"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-primary border-2 border-card flex items-center justify-center">
                <Stethoscope className="h-2 w-2 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-sm">
                  Dr. Richardson
                </span>
                <currentInsight.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">
                Dementia Risk Analysis
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              {currentInsight.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {currentInsight.subtitle}
            </p>

            {/* Visual Element */}
            {getVisualComponent()}

            {/* Insight Message */}
            <div
              className={`${currentInsight.bgColor} border ${currentInsight.borderColor} rounded-2xl p-4 mb-6`}
            >
              <p className="text-sm text-foreground leading-relaxed">
                {currentInsight.message}
              </p>
            </div>

            {/* Continue Button */}
            <Button
              onClick={onContinue}
              className={`w-full bg-gradient-to-r ${currentInsight.color} hover:opacity-90 text-white font-medium py-3 text-sm rounded-xl transition-all hover:scale-[1.02]`}
            >
              Continue Assessment
            </Button>
          </div>

          {/* Bottom accent */}
          <div className={`h-1 bg-gradient-to-r ${currentInsight.color}`} />
        </motion.div>
      </div>
    </motion.div>
  );
}
