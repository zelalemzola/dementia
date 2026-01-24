"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Stethoscope } from "lucide-react";

const doctorQuotes = [
  {
    quote:
      "As a neurologist, I've designed these questions to identify early cognitive changes. Your honest answers help us provide accurate insights.",
    category: "memory",
    showOnQuestions: [2, 11, 18],
  },
  {
    quote:
      "These cognitive assessments are based on clinical protocols I use in my practice. Each question serves a specific diagnostic purpose.",
    category: "executive",
    showOnQuestions: [19, 24],
  },
  {
    quote:
      "In my 20 years of practice, early detection has been key to better outcomes. This assessment follows proven medical guidelines.",
    category: "attention",
    showOnQuestions: [25, 30],
  },
  {
    quote:
      "Language processing questions help me evaluate multiple brain regions. These are the same assessments we use in clinical settings.",
    category: "language",
    showOnQuestions: [35, 38],
  },
  {
    quote:
      "Orientation questions may seem simple, but they provide crucial information about cognitive health that I rely on in diagnosis.",
    category: "orientation",
    showOnQuestions: [31, 33],
  },
  {
    quote:
      "Remember, this assessment is designed to help, not worry you. Answer honestly so we can provide the most accurate medical insights.",
    category: "general",
    showOnQuestions: [10, 20, 39],
  },
];

interface DoctorQuoteProps {
  currentQuestion: number;
  category: string;
}

export function DoctorQuote({ currentQuestion }: DoctorQuoteProps) {
  // Find quotes that should show for this specific question
  const applicableQuotes = doctorQuotes.filter(
    (q) => q.showOnQuestions.includes(currentQuestion + 1), // +1 because currentQuestion is 0-indexed
  );

  // If no specific quote for this question, don't show anything
  if (applicableQuotes.length === 0) {
    return null;
  }

  const quote = applicableQuotes[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mb-4"
    >
      <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm p-4">
        {/* Medical badge */}
        <div className="absolute -right-1 -top-1 opacity-20">
          <Stethoscope className="h-8 w-8 text-primary" />
        </div>

        <div className="flex items-start gap-4 relative z-10">
          {/* Doctor avatar */}
          <div className="relative shrink-0">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/20">
              <Image
                src="/images/dr-sam-profile.webp"
                alt="Dr. Samuel Richardson"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Medical indicator */}
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-primary border-2 border-card flex items-center justify-center">
              <Stethoscope className="h-2 w-2 text-white" />
            </div>
          </div>

          {/* Quote content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foreground text-sm">
                Dr. Samuel Richardson
              </span>
              <span className="text-xs text-primary font-medium">MD, PhD</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">
              Lead Neurologist • Cognitive Health Specialist
            </p>
          </div>
        </div>

        {/* Medical border accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
