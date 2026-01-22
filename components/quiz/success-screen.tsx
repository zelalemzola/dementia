"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Clock, ArrowRight } from "lucide-react";

interface SuccessScreenProps {
  email: string;
  plan: string;
  onStartOver: () => void;
}

export function SuccessScreen({ email, plan, onStartOver }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-lg w-full"
      >
        <div className="rounded-2xl border border-border bg-card p-8 text-center space-y-6">
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 300, delay: 0.2 }}
            className="mx-auto"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              {/* Animated rings */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-green-500/30"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute inset-0 rounded-full border-2 border-green-500/20"
              />
            </div>
          </motion.div>

          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Thank You for Your Purchase!
            </h1>
            <p className="text-muted-foreground">
              Your {plan} report is being prepared and will be sent shortly.
            </p>
          </div>

          {/* Email confirmation */}
          <div className="rounded-xl bg-secondary/50 border border-border p-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">Report will be sent to:</span>
            </div>
            <p className="text-lg font-semibold text-primary">{email}</p>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-foreground mb-4">What happens next?</div>
            <div className="space-y-3">
              {[
                { icon: Clock, text: "Your report is being generated", time: "Now" },
                { icon: Mail, text: "Report sent to your email", time: "Within 5 minutes" },
                { icon: CheckCircle, text: "Review your detailed results", time: "Anytime" },
              ].map((step, index) => (
                <motion.div
                  key={step.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 rounded-lg bg-card border border-border p-3"
                >
                  <div className="rounded-full bg-primary/20 p-2 shrink-0">
                    <step.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-foreground">{step.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{step.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important note */}
          <div className="rounded-lg bg-accent/10 border border-accent/30 p-4 text-left">
            <p className="text-sm text-foreground">
              <strong className="text-accent">Important:</strong> Please check your spam/junk folder if you 
              don't see the email within 5 minutes. Add our email to your contacts to ensure delivery.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={onStartOver}
              variant="outline"
              className="w-full h-12 text-base bg-transparent"
            >
              Take Another Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Support link */}
          <p className="text-xs text-muted-foreground">
            Need help? Contact our support team at{" "}
            <span className="text-primary">support@brainly.com</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
