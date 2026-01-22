"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  category?: string;
}

export function ProgressBar({ current, total, category }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full space-y-1.5">
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
          <span className="font-mono text-muted-foreground text-xs">{total}</span>
        </div>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        {/* Animated background glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, var(--primary), transparent)`,
            animation: "shimmer 2s infinite",
          }}
        />

        {/* Progress fill */}
        <div
          className={cn(
            "relative h-full rounded-full transition-all duration-500 ease-out",
            "bg-gradient-to-r from-primary via-accent to-primary"
          )}
          style={{ width: `${percentage}%` }}
        >
          {/* Animated pulse on progress bar */}
          <div className="absolute inset-0 animate-pulse bg-white/20 rounded-full" />
        </div>

        {/* Percentage indicator */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
          style={{ left: `${Math.max(percentage - 3, 0)}%` }}
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card px-1.5 py-0.5 text-[10px] font-medium text-primary shadow-lg border border-border">
              {percentage}%
            </div>
          </div>
        </div>
      </div>

      {/* Visual markers */}
      <div className="relative h-1">
        {[0, 25, 50, 75, 100].map((marker) => (
          <div
            key={marker}
            className={cn(
              "absolute top-0 h-1 w-px",
              percentage >= marker ? "bg-primary/60" : "bg-border"
            )}
            style={{ left: `${marker}%` }}
          />
        ))}
      </div>
    </div>
  );
}
