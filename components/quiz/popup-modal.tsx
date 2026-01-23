"use client";

import { PopupData } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, Brain, Stethoscope, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PopupModalProps {
  popup: PopupData | null;
  onContinue: () => void;
  onRecallAnswer?: (remembered: boolean) => void;
}

export function PopupModal({
  popup,
  onContinue,
  onRecallAnswer,
}: PopupModalProps) {
  if (!popup) return null;

  const icons = {
    warning: <AlertTriangle className="h-6 w-6 text-destructive" />,
    info: <Info className="h-6 w-6 text-primary" />,
    recall: <Brain className="h-6 w-6 text-accent" />,
  };

  const colors = {
    warning: "border-destructive/30 bg-destructive/5",
    info: "border-primary/30 bg-primary/5",
    recall: "border-accent/30 bg-accent/5",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-background/60 backdrop-blur-sm p-4 pt-20"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={cn(
            "relative w-full max-w-md overflow-hidden rounded-2xl border shadow-2xl",
            colors[popup.type],
          )}
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
                {icons[popup.type]}
              </div>
              <p className="text-xs text-muted-foreground">
                Medical Assessment Notice
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-3 text-lg">
              {popup.title}
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed mb-4">
              {popup.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Actions */}
            {popup.type === "recall" && onRecallAnswer ? (
              <div className="flex gap-3">
                <Button
                  onClick={() => onRecallAnswer(true)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-sm py-2"
                >
                  Yes, I remember
                </Button>
                <Button
                  onClick={() => onRecallAnswer(false)}
                  variant="outline"
                  className="flex-1 text-sm py-2"
                >
                  No, I don't
                </Button>
              </div>
            ) : (
              <Button
                onClick={onContinue}
                className={cn(
                  "w-full text-sm py-2 font-medium",
                  popup.type === "warning"
                    ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    : "bg-primary hover:bg-primary/90",
                )}
              >
                {popup.type === "warning"
                  ? "I Understand, Continue"
                  : "Continue Assessment"}
              </Button>
            )}
          </div>

          {/* Medical accent line */}
          <div
            className={cn(
              "h-1",
              popup.type === "warning"
                ? "bg-destructive"
                : popup.type === "info"
                  ? "bg-primary"
                  : "bg-accent",
            )}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
