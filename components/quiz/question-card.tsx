"use client";

import { Question } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

const frequencyOptions = ["Never", "Sometimes", "Often"];
const yesNoOptions = ["Yes", "No"];

export function QuestionCard({ question, onAnswer, selectedAnswer }: QuestionCardProps) {
  const getOptions = () => {
    switch (question.type) {
      case "frequency":
        return frequencyOptions;
      case "yes-no":
        return yesNoOptions;
      case "iq":
      case "gender":
      case "recall":
        return question.options || [];
      default:
        return frequencyOptions;
    }
  };

  const options = getOptions();
  const isIQ = question.type === "iq";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        {/* Category badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className={cn(
            "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide",
            isIQ 
              ? "bg-accent/20 text-accent border border-accent/30" 
              : "bg-primary/20 text-primary border border-primary/30"
          )}>
            {isIQ ? "COGNITIVE TEST" : question.category.toUpperCase()}
          </div>
          <span className="text-xs text-muted-foreground">Question {question.id}</span>
        </div>

        {/* Question text */}
        <h2 className="relative mb-8 text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
          {question.text}
        </h2>

        {/* Options */}
        <div className={cn(
          "grid gap-3",
          options.length > 3 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        )}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={cn(
                "group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300",
                selectedAnswer === option
                  ? "border-primary bg-primary/20 text-foreground"
                  : "border-border bg-secondary/50 text-foreground hover:border-primary/50 hover:bg-secondary"
              )}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

              <div className="relative flex items-center gap-3">
                {/* Radio indicator */}
                <div className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                  selectedAnswer === option
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/50 group-hover:border-primary"
                )}>
                  {selectedAnswer === option && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-2 w-2 rounded-full bg-primary-foreground"
                    />
                  )}
                </div>

                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
