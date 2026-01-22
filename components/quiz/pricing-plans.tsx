"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlansProps {
  onSelectPlan: (plan: string) => void;
  email: string;
}

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "one-time",
    description: "Essential cognitive insights",
    icon: Zap,
    features: [
      "Complete cognitive assessment report",
      "Memory analysis breakdown",
      "Attention score evaluation",
      "Basic recommendations",
      "PDF download",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$24.99",
    period: "one-time",
    description: "Comprehensive analysis & guidance",
    icon: Crown,
    features: [
      "Everything in Basic",
      "Detailed risk assessment",
      "Personalized action plan",
      "Executive function deep dive",
      "Language processing analysis",
      "Mood & behavior insights",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "$49.99",
    period: "one-time",
    description: "For healthcare providers",
    icon: Building,
    features: [
      "Everything in Premium",
      "Clinical-grade report format",
      "Longitudinal tracking",
      "Comparison benchmarks",
      "API access for integration",
      "White-label options",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export function PricingPlans({ onSelectPlan, email }: PricingPlansProps) {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Check className="h-4 w-4" />
            Email Verified: {email}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Report Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your needs. All plans include your complete 
            cognitive assessment results delivered instantly to your email.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl border bg-card overflow-hidden",
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border"
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={cn("p-6 space-y-6", plan.popular && "pt-12")}>
                {/* Icon and name */}
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "rounded-full p-3",
                    plan.popular ? "bg-primary/20" : "bg-secondary"
                  )}>
                    <plan.icon className={cn(
                      "h-6 w-6",
                      plan.popular ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        "rounded-full p-1 shrink-0 mt-0.5",
                        plan.popular ? "bg-primary/20" : "bg-secondary"
                      )}>
                        <Check className={cn(
                          "h-3 w-3",
                          plan.popular ? "text-primary" : "text-muted-foreground"
                        )} />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => onSelectPlan(plan.name)}
                  className={cn(
                    "w-full h-12 text-base font-semibold",
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  )}
                >
                  Select {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>30-Day Guarantee</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
