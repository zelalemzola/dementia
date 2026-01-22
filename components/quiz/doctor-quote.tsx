"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const doctorQuotes = [
  {
    quote: "Each question in this assessment has been carefully calibrated based on decades of clinical research. Answer honestly for the most accurate results.",
    category: "memory"
  },
  {
    quote: "Memory fluctuations are normal. Our questions are designed to distinguish everyday forgetfulness from patterns that may need attention.",
    category: "memory"
  },
  {
    quote: "Executive function is crucial for daily life. These questions help us understand how your brain processes complex tasks.",
    category: "executive"
  },
  {
    quote: "Don't be alarmed by challenging questions. They're designed to thoroughly assess different cognitive domains.",
    category: "attention"
  },
  {
    quote: "Attention and focus vary throughout the day. Our assessment accounts for natural variations to give you accurate insights.",
    category: "attention"
  },
  {
    quote: "Language processing is a complex cognitive skill. These questions help evaluate multiple brain regions working together.",
    category: "language"
  },
  {
    quote: "Orientation questions may seem simple, but they provide valuable information about cognitive health patterns.",
    category: "orientation"
  },
  {
    quote: "Emotional well-being is deeply connected to cognitive function. Your honest answers help us see the complete picture.",
    category: "mood"
  },
  {
    quote: "Our team of neurologists and cognitive scientists has validated every question against clinical benchmarks.",
    category: "iq"
  },
  {
    quote: "Take your time with each question. There are no time limits, and thoughtful answers lead to better insights.",
    category: "general"
  }
];

interface DoctorQuoteProps {
  currentQuestion: number;
  category: string;
}

export function DoctorQuote({ currentQuestion, category }: DoctorQuoteProps) {
  // Get a quote based on category or cycle through general quotes
  const getQuote = () => {
    const categoryQuotes = doctorQuotes.filter(q => q.category === category);
    if (categoryQuotes.length > 0) {
      return categoryQuotes[currentQuestion % categoryQuotes.length].quote;
    }
    return doctorQuotes[currentQuestion % doctorQuotes.length].quote;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mb-3"
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-2.5">
        {/* Decorative quote icon */}
        <div className="absolute -right-2 -top-2 opacity-10">
          <Quote className="h-10 w-10 text-primary" />
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
          {/* Doctor avatar */}
          <div className="relative shrink-0">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <Image
                src="/images/dr-sam-profile.webp"
                alt="Dr. Samuel Richardson"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
          </div>

          {/* Quote content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-semibold text-foreground text-xs">Dr. Samuel Richardson</span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline">MD, PhD - Lead Neurologist</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuestion}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-muted-foreground leading-snug italic line-clamp-2"
              >
                "{getQuote()}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtle animated border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
