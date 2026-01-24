"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlurredReport } from "./blurred-report";
import { Mail, Shield, Clock, FileText } from "lucide-react";

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
}

export function EmailCapture({ onSubmit }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Email form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4"
              >
                <FileText className="h-4 w-4" />
                Analysis Complete
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Report is Ready
              </h1>
              <p className=" text-muted-foreground">
                Enter your email to receive your detailed cognitive assessment report. 
                Your results have been analyzed and are waiting for you.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "100% Private & Secure", desc: "Your data is encrypted" },
                { icon: Clock, label: "Instant Delivery", desc: "Report sent immediately" },
                { icon: FileText, label: "Detailed Analysis", desc: "Comprehensive breakdown" },
                { icon: Mail, label: "PDF Format", desc: "Easy to save & share" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
                  <div className="rounded-full bg-primary/20 p-2">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email form */}
            <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
              <label className="block text-sm font-medium text-foreground">
                Enter your email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="your@email.com"
                  className="pl-12 h-14 text-lg bg-secondary/50 border-border"
                />
                {email && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    {isValid ? (
                      <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center">
                        <svg className="h-3 w-3 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Button
                onClick={() => isValid && onSubmit(email)}
                disabled={!isValid}
                className="w-full h-12 font-semibold bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Unlock My Report
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy.
                We will never share your email with third parties.
              </p>
            </div>
          </motion.div>

          {/* Right side - Blurred report preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-8"
          >
            <BlurredReport />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
