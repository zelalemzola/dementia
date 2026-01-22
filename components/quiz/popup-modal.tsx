"use client";

import { PopupData } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupModalProps {
  popup: PopupData | null;
  onContinue: () => void;
  onRecallAnswer?: (remembered: boolean) => void;
}

export function PopupModal({ popup, onContinue, onRecallAnswer }: PopupModalProps) {
  if (!popup) return null;

  const icons = {
    warning: <AlertTriangle className="h-8 w-8 text-destructive" />,
    info: <Info className="h-8 w-8 text-primary" />,
    recall: <Brain className="h-8 w-8 text-accent" />
  };

  const titles = {
    warning: "text-destructive",
    info: "text-primary",
    recall: "text-accent"
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        >
          {/* Decorative glow */}
          <div className={cn(
            "absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full blur-3xl",
            popup.type === "warning" ? "bg-destructive/30" : 
            popup.type === "info" ? "bg-primary/30" : "bg-accent/30"
          )} />

          <div className="relative p-8">
            {/* Icon */}
            <div className={cn(
              "mb-6 flex h-16 w-16 items-center justify-center rounded-full mx-auto",
              popup.type === "warning" ? "bg-destructive/20" : 
              popup.type === "info" ? "bg-primary/20" : "bg-accent/20"
            )}>
              {icons[popup.type]}
            </div>

            {/* Title */}
            <h3 className={cn(
              "mb-4 text-center text-2xl font-bold",
              titles[popup.type]
            )}>
              {popup.title}
            </h3>

            {/* Content */}
            <div className="mb-8 space-y-4 text-center text-muted-foreground leading-relaxed">
              {popup.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Actions */}
            {popup.type === "recall" && onRecallAnswer ? (
              <div className="flex gap-4">
                <Button
                  onClick={() => onRecallAnswer(true)}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Yes, I remember
                </Button>
                <Button
                  onClick={() => onRecallAnswer(false)}
                  variant="outline"
                  className="flex-1"
                >
                  No, I don't
                </Button>
              </div>
            ) : (
              <Button
                onClick={onContinue}
                className={cn(
                  "w-full py-6 text-lg font-semibold",
                  popup.type === "warning" 
                    ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground" 
                    : "bg-primary hover:bg-primary/90"
                )}
              >
                {popup.type === "warning" ? "I Understand, Continue" : "Continue Assessment"}
              </Button>
            )}
          </div>

          {/* Bottom decoration */}
          <div className={cn(
            "h-1",
            popup.type === "warning" ? "bg-destructive" : 
            popup.type === "info" ? "bg-primary" : "bg-accent"
          )} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
