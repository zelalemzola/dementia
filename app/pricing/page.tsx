"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Check, ArrowRight, Star, Shield, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Essential cognitive assessment report",
    features: [
      "Complete cognitive assessment",
      "Basic report with overall score",
      "Domain-by-domain breakdown",
      "General recommendations",
      "Email delivery",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$24.99",
    description: "Comprehensive analysis with detailed insights",
    features: [
      "Everything in Basic",
      "Detailed analysis per domain",
      "Age-adjusted benchmarks",
      "Personalized action plan",
      "Risk factor identification",
      "Lifestyle recommendations",
      "Priority email support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Professional",
    price: "$49.99",
    description: "Complete cognitive health package",
    features: [
      "Everything in Premium",
      "Clinical-grade report",
      "Trend tracking over time",
      "1-on-1 consultation session",
      "Caregiver guide included",
      "Brain training program access",
      "Quarterly reassessment",
      "Dedicated support",
    ],
    highlighted: false,
    cta: "Best Value",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Brain className="h-4 w-4" />
              Pricing Plans
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Choose Your Assessment Plan
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Select the plan that best fits your needs. All plans include our comprehensive 
              77-question cognitive assessment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-2xl border ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/report</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full h-12 font-semibold ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                <Link href="/quiz">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-500 border border-green-500/20">
            <Shield className="h-4 w-4" />
            30-Day Money-Back Guarantee
          </div>
          <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto">
            Not satisfied with your report? Contact us within 30 days for a full refund. 
            No questions asked.
          </p>
        </motion.div>
      </div>

      {/* Comparison Table */}
      <div className="relative z-10 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare Plans
            </h2>
            <p className="text-muted-foreground">
              See what is included in each plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Basic</th>
                  <th className="text-center py-4 px-4 text-primary font-semibold">Premium</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Professional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "77-Question Assessment", basic: true, premium: true, professional: true },
                  { feature: "Overall Cognitive Score", basic: true, premium: true, professional: true },
                  { feature: "Domain Breakdown", basic: true, premium: true, professional: true },
                  { feature: "Age-Adjusted Benchmarks", basic: false, premium: true, professional: true },
                  { feature: "Detailed Analysis", basic: false, premium: true, professional: true },
                  { feature: "Personalized Action Plan", basic: false, premium: true, professional: true },
                  { feature: "Risk Identification", basic: false, premium: true, professional: true },
                  { feature: "Clinical-Grade Report", basic: false, premium: false, professional: true },
                  { feature: "1-on-1 Consultation", basic: false, premium: false, professional: true },
                  { feature: "Brain Training Access", basic: false, premium: false, professional: true },
                  { feature: "Quarterly Reassessment", basic: false, premium: false, professional: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 px-4 text-muted-foreground text-sm">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.basic ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {row.premium ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.professional ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card border border-border text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Zap className="h-4 w-4" />
            Enterprise
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer custom enterprise plans for healthcare organizations, research institutions, 
            and employers looking to assess cognitive health at scale.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-6 font-semibold bg-transparent"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="relative z-10 bg-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pricing FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to pay before taking the assessment?",
                a: "No! You can complete the entire assessment for free. Payment is only required to unlock your detailed report.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Yes, you can upgrade to a higher plan at any time. You will only pay the difference between your current plan and the new plan.",
              },
              {
                q: "Is there a subscription?",
                a: "No, our pricing is a one-time payment per assessment report. There are no recurring charges unless you choose the Professional plan's quarterly reassessment option.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are processed securely through Stripe.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
