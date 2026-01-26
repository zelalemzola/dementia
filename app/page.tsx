"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ArrowRight,
  Stethoscope,
  UserCheck,
  TextIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    // Store gender in localStorage and navigate to quiz
    localStorage.setItem("userGender", gender);
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Simplified and Doctor Themed */}
      <div className="relative overflow-hidden">
        {/* Background effects - lighter */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-12">
          <div className="">
            {/* Left side - Simplified Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Doctor Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-fit flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm  font-medium text-primary border border-primary/20 mx-auto"
              >
                <Stethoscope className="h-4 w-4" />
                Doctor-Designed Assessment
              </motion.div> */}

              {/* Simplified Heading */}
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-foreground leading-tight text-center">
                Check Your
                <span className=" text-primary"> Memory Health</span>
              </h1>

              {/* Simplified Description */}
              <p className="text-md md:text-lg text-muted-foreground leading-relaxed text-center">
                A quick, doctor-designed assessment to understand your cognitive
                wellness. Get personalized insights in just 10 minutes.
              </p>
              
              {/* Doctor Attribution */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-6 py-2 shadow-sm w-fit mx-auto "
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-3 border-primary/40 shadow-lg">
                      <Image
                        src="/images/dr-sam-profile.webp"
                        alt="Dr. Samuel Richardson"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary border-2 border-card flex items-center justify-center">
                      <Stethoscope className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" font-bold text-foreground mb-1">
                      Created by Dr. Samuel Richardson, MD, PhD
                    </h4>
                    <p className="text-sm text-primary font-medium mb-1">
                      Lead Neurologist & Dementia Specialist
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Harvard Medical School • 20+ Years Experience • 500+
                      Research Publications
                    </p>
                  </div>
                </div>
                
              </motion.div>
<motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-fit flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm  font-medium text-primary border border-primary/20 mx-auto"
              >
                <TextIcon className="h-4 w-4" />
                Start by taking our Assessment
              </motion.div>
              {/* Sample Question Preview */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full ">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Question 1
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What is your gender?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => handleGenderSelect("Male")}
                  >
                    Male
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => handleGenderSelect("Female")}
                  >
                    Female
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Start with simple questions like this, then progress to
                  dementia-focused memory and cognitive assessments
                </p>
              </div>
            </motion.div>

            {/* Right side - Doctor Image */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/images/example5.png"
                    alt="Dr. Samuel Richardson - Lead Neurologist"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">
                      Dr. Richardson
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Lead Neurologist
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10 border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "10", label: "Minutes", desc: "Quick assessment" },
              { value: "6", label: "Areas", desc: "Cognitive domains" },
              { value: "99%", label: "Accuracy", desc: "Clinical validation" },
              { value: "50K+", label: "Users", desc: "Trusted worldwide" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How It Works - Simplified */}
      <div className="relative z-10 bg-background">
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
                desc: "Complete 35-40 carefully selected questions about memory, attention, and daily activities.",
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "Our doctor-designed system analyzes your responses using clinical research.",
              },
              {
                step: "03",
                title: "Get Your Report",
                desc: "Receive personalized insights and recommendations from our medical team.",
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
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-2xl p-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">
              Doctor-Approved Assessment
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to check your memory health?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step with our quick, private assessment designed by
            medical experts.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            <Link href="/quiz">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • 100% private
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
                <span className="font-bold text-lg text-foreground">
                  Brainly
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Doctor-designed cognitive assessment for better brain health.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Assessment</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/quiz"
                    className="hover:text-primary transition-colors"
                  >
                    Take Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-primary transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    Medical Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">
                    Privacy
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">
                    Terms
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">
                    Medical Disclaimer
                  </span>
                </li>
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
