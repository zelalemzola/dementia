"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Clock, AlertTriangle, Award, Users, CheckCircle, ArrowRight, Sparkles, Activity, Heart } from "lucide-react";
import { BrainLogoAnimation } from "@/components/quiz/brain-logo-animation";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30"
              >
                <Brain className="h-4 w-4" />
                Advanced Cognitive Assessment
              </motion.div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Understand Your
                <span className="block text-primary">Cognitive Health</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Take our comprehensive assessment to evaluate memory, attention, 
                executive function, and more. Get personalized insights about your 
                cognitive wellness in just 10-15 minutes.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "10-15 Minutes", desc: "Quick & comprehensive" },
                  { icon: Shield, label: "100% Private", desc: "Your data is secure" },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-start gap-3">
                    <div className="rounded-lg bg-secondary p-2">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{feature.label}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
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
                  <Link href="/how-it-works">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Brain Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <BrainLogoAnimation />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-10 border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by thousands worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {["Harvard Medical", "Mayo Clinic", "Johns Hopkins", "Stanford Health", "Cleveland Clinic"].map((name) => (
                <span key={name} className="text-lg font-semibold text-muted-foreground">{name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* World-Class Experts Section */}
      <div className="relative z-10 bg-background">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Award className="h-4 w-4" />
              Crafted by World-Leading Experts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Assessment Designed by the Best Professionals in the Field
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our cognitive assessment has been meticulously crafted by leading neurologists, 
              cognitive scientists, and psychologists from top institutions worldwide.
            </p>
          </motion.div>

          {/* Expert Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/example2.jpg"
                  alt="Neurologist analyzing brain scans"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-semibold text-foreground">Advanced Brain Analysis</h3>
                <p className="text-sm text-muted-foreground">Using cutting-edge neuroimaging research</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/example1.jpg"
                  alt="Team of medical professionals"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-semibold text-foreground">Collaborative Research</h3>
                <p className="text-sm text-muted-foreground">Teams from leading medical institutions</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/example3.jpg"
                  alt="Doctor reviewing cognitive assessments"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-semibold text-foreground">Evidence-Based Methods</h3>
                <p className="text-sm text-muted-foreground">Backed by peer-reviewed studies</p>
              </div>
            </motion.div>
          </div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Award, label: "Peer-Reviewed", desc: "Published in medical journals" },
              { icon: Users, label: "50+ Experts", desc: "Collaborated on development" },
              { icon: CheckCircle, label: "Clinically Validated", desc: "Tested in clinical settings" },
              { icon: Shield, label: "HIPAA Compliant", desc: "Your data is protected" },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="rounded-full bg-primary/20 p-3 mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium text-foreground text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative z-10 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Assess
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive assessment evaluates six critical cognitive domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Memory Function", desc: "Evaluates short-term memory, recall ability, and information retention patterns." },
              { icon: Activity, title: "Executive Function", desc: "Assesses planning, problem-solving, and task management capabilities." },
              { icon: Sparkles, title: "Attention & Focus", desc: "Measures concentration, sustained attention, and ability to filter distractions." },
              { icon: Clock, title: "Orientation", desc: "Tests awareness of time, place, and situational context." },
              { icon: Heart, title: "Language Processing", desc: "Evaluates verbal fluency, comprehension, and communication skills." },
              { icon: Users, title: "Behavioral Patterns", desc: "Analyzes mood changes, social engagement, and daily functioning." },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="rounded-full bg-primary/20 p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Section */}
      <div className="relative z-10 bg-background">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-destructive/20 p-3 shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">
                  Important: Please Read Before Starting
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Please do not cheat or use help from anyone or anything.
                  </p>
                  <p>
                    So we can give you the most accurate detailed report of your cognitive health.
                  </p>
                  <p className="text-sm">
                    This assessment is designed to evaluate your memory and cognitive function 
                    naturally. Using external assistance will compromise the accuracy of your results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to understand your cognitive health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Answer Questions", 
                desc: "Complete 77 carefully crafted questions across 6 cognitive areas including memory, attention, and executive function." 
              },
              { 
                step: "02", 
                title: "AI Analysis", 
                desc: "Our advanced algorithms analyze your responses against clinical benchmarks and peer-reviewed research data." 
              },
              { 
                step: "03", 
                title: "Get Your Report", 
                desc: "Receive a detailed personalized report with insights, recommendations, and next steps for your cognitive health." 
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90"
            >
              <Link href="/how-it-works">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "77", label: "Questions" },
            { value: "6", label: "Cognitive Areas" },
            { value: "99%", label: "Accuracy Rate" },
            { value: "50K+", label: "Assessments Taken" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to understand your cognitive health?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step towards better brain health. Our assessment is quick, 
            private, and backed by world-leading experts.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            <Link href="/quiz">
              Begin Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required to start
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-foreground">Brainly</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced cognitive assessment designed by world-leading experts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/quiz" className="hover:text-primary transition-colors">Take Assessment</Link></li>
                <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">HIPAA Compliance</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Brainly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
