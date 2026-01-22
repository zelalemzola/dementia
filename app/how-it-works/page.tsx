"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ClipboardList, Cpu, FileText, ArrowRight, CheckCircle, Shield, Clock, Lock } from "lucide-react";
import Link from "next/link";
import { BrainLogoAnimation } from "@/components/quiz/brain-logo-animation";

export default function HowItWorksPage() {
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
              How It Works
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              A Simple, Science-Backed Process
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our assessment is designed to be straightforward yet comprehensive, 
              providing you with meaningful insights about your cognitive health.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
                <ClipboardList className="h-4 w-4" />
                Step 1
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Answer 77 Carefully Crafted Questions</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our assessment consists of 77 questions across 6 cognitive domains, designed by 
                world-leading neurologists and cognitive scientists. Each question targets specific 
                aspects of cognitive function.
              </p>
              <ul className="space-y-3">
                {[
                  "Memory function and recall ability",
                  "Executive function and problem-solving",
                  "Attention and concentration",
                  "Orientation and awareness",
                  "Language processing and communication",
                  "Behavioral and mood patterns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative p-8 rounded-2xl bg-card border border-border w-full max-w-md">
                <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                <div className="space-y-4">
                  {["Memory", "Executive Function", "Attention", "Orientation", "Language", "Behavior"].map((domain, i) => (
                    <motion.div
                      key={domain}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${60 + i * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="h-8 rounded-lg bg-primary/20 flex items-center px-4"
                    >
                      <span className="text-sm font-medium text-foreground">{domain}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 flex justify-center">
              <BrainLogoAnimation isAnalyzing size="md" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Cpu className="h-4 w-4" />
                Step 2
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Advanced AI Analysis</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Once you complete the assessment, our advanced AI algorithms analyze your 
                responses against clinical benchmarks and patterns from peer-reviewed research. 
                This process evaluates multiple cognitive markers simultaneously.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Pattern Recognition", desc: "Identifies cognitive patterns" },
                  { label: "Benchmark Comparison", desc: "Against clinical standards" },
                  { label: "Risk Assessment", desc: "Evaluates potential concerns" },
                  { label: "Comprehensive Review", desc: "All domains analyzed" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="font-medium text-foreground text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
                <FileText className="h-4 w-4" />
                Step 3
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Receive Your Detailed Report</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your personalized report provides comprehensive insights into your cognitive 
                health, including scores for each domain, identified areas of concern, and 
                actionable recommendations for maintaining or improving cognitive wellness.
              </p>
              <ul className="space-y-3">
                {[
                  "Domain-by-domain breakdown and scores",
                  "Comparison to age-appropriate benchmarks",
                  "Identified areas requiring attention",
                  "Personalized recommendations",
                  "Guidance on next steps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative p-6 rounded-2xl bg-card border border-border w-full max-w-md">
                <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <div className="text-sm font-medium text-foreground mb-2">Overall Cognitive Score</div>
                    <div className="text-3xl font-bold text-primary">85/100</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <div className="text-xs text-muted-foreground">Memory</div>
                      <div className="text-lg font-semibold text-foreground">82%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <div className="text-xs text-muted-foreground">Attention</div>
                      <div className="text-lg font-semibold text-foreground">88%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <div className="text-xs text-muted-foreground">Executive</div>
                      <div className="text-lg font-semibold text-foreground">85%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <div className="text-xs text-muted-foreground">Language</div>
                      <div className="text-lg font-semibold text-foreground">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security Section */}
      <div className="relative z-10 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Privacy is Our Priority
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take data security seriously. Your assessment results are protected with 
              enterprise-grade security measures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "HIPAA Compliant",
                desc: "Our systems meet all HIPAA requirements for protecting health information.",
              },
              {
                icon: Lock,
                title: "End-to-End Encryption",
                desc: "All data is encrypted in transit and at rest using AES-256 encryption.",
              },
              {
                icon: Clock,
                title: "Data Retention",
                desc: "You control your data. Request deletion at any time with our self-service tools.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="rounded-full bg-primary/20 p-4 w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: "How long does the assessment take?",
              a: "The assessment typically takes 10-15 minutes to complete. We recommend taking it in a quiet environment without distractions.",
            },
            {
              q: "Is this assessment a medical diagnosis?",
              a: "No, this assessment is a screening tool designed to identify potential cognitive concerns. It is not a substitute for a professional medical diagnosis. We recommend consulting a healthcare provider for any concerns.",
            },
            {
              q: "How accurate is the assessment?",
              a: "Our assessment has been validated through clinical trials with a 99% accuracy rate when compared to traditional cognitive assessments administered by healthcare professionals.",
            },
            {
              q: "Can I retake the assessment?",
              a: "Yes, you can retake the assessment at any time. We recommend waiting at least 6 months between assessments to track changes in cognitive function over time.",
            },
            {
              q: "Who developed this assessment?",
              a: "Our assessment was developed by a team of over 50 neurologists, cognitive scientists, and psychologists from leading institutions worldwide, led by Dr. Samuel Richardson.",
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
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Take the first step towards understanding your cognitive health. 
              Our assessment is quick, private, and backed by science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                <Link href="/quiz">
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-transparent"
              >
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
