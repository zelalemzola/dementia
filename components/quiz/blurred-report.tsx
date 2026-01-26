"use client";

import { motion } from "framer-motion";

export function BlurredReport() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-background/80 z-10" />

      {/* Locked indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Report Locked
        </div>
      </div>

      {/* Fake report content */}
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-border">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              Dementia Risk Assessment Report
            </h3>
            <p className="text-sm text-muted-foreground">
              Complete Dementia Analysis Results
            </p>
          </div>
        </div>

        {/* Fake scores */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Memory Score", value: "▓▓" },
            { label: "Attention Score", value: "▓▓" },
            { label: "Executive Function", value: "▓▓" },
            { label: "Language Score", value: "▓▓" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-secondary/50 p-4">
              <div className="text-xs text-muted-foreground mb-1">
                {item.label}
              </div>
              <div className="text-2xl font-bold text-foreground">
                {item.value}/100
              </div>
            </div>
          ))}
        </div>

        {/* Fake chart bars */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-foreground">
            Detailed Analysis
          </div>
          {[85, 72, 68, 91, 77, 83].map((value, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-24 text-xs text-muted-foreground">
                Category {i + 1}
              </div>
              <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary/60"
                  style={{ width: `${value}%` }}
                />
              </div>
              <div className="w-8 text-xs text-right text-muted-foreground">
                ▓▓
              </div>
            </div>
          ))}
        </div>

        {/* Fake recommendations */}
        <div className="rounded-lg border border-border p-4 space-y-3">
          <div className="text-sm font-medium text-foreground">
            Recommendations
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs text-primary">{i}</span>
              </div>
              <div className="flex-1 h-4 rounded bg-secondary/50" />
            </div>
          ))}
        </div>

        {/* Fake risk assessment */}
        <div className="rounded-lg bg-accent/10 border border-accent/30 p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="h-5 w-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium text-foreground">
              Dementia Risk Assessment
            </span>
          </div>
          <div className="h-4 w-3/4 rounded bg-secondary/50" />
        </div>
      </div>

      {/* Animated scan line */}
      <motion.div
        animate={{ y: [0, 400, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent z-5"
      />
    </motion.div>
  );
}
