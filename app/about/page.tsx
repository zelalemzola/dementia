"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Award, Users, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
              About Brainly
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Pioneering Cognitive Health Assessment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are on a mission to make cognitive health assessment accessible, accurate, 
              and actionable for everyone. Our team of world-renowned experts has developed 
              a comprehensive assessment backed by decades of research.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Cognitive decline affects millions of people worldwide, yet early detection 
              remains challenging. Our mission is to bridge this gap by providing an 
              accessible, scientifically-validated assessment tool that can help identify 
              potential cognitive concerns early.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that everyone deserves access to high-quality cognitive health 
              screening, regardless of their location or socioeconomic status. By combining 
              cutting-edge research with innovative technology, we are making this vision a reality.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Target, label: "Early Detection" },
                { icon: Heart, label: "Accessible Care" },
                { icon: Award, label: "Research-Backed" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/example1.jpg"
                alt="Medical team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative z-10 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our assessment was developed by leading neurologists, cognitive scientists, 
              and psychologists from top institutions worldwide.
            </p>
          </motion.div>

          {/* Lead Doctor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card border border-border">
              <div className="shrink-0">
                <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-primary/30">
                  <Image
                    src="/images/dr-sam-profile.webp"
                    alt="Dr. Samuel Richardson"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-1">Dr. Samuel Richardson</h3>
                <p className="text-primary font-medium mb-3">Lead Neurologist, MD, PhD</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With over 30 years of experience in cognitive neuroscience, Dr. Richardson 
                  has led groundbreaking research in early dementia detection. He has published 
                  over 200 peer-reviewed papers and served on advisory boards for major health 
                  organizations worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50+", label: "Expert Contributors" },
              { value: "200+", label: "Research Papers" },
              { value: "15+", label: "Years of Research" },
              { value: "30+", label: "Countries Represented" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Scientific Integrity",
              desc: "Every aspect of our assessment is grounded in peer-reviewed research and validated through rigorous clinical testing.",
            },
            {
              icon: Users,
              title: "Accessibility",
              desc: "We believe cognitive health assessment should be available to everyone, regardless of their background or location.",
            },
            {
              icon: Heart,
              title: "Compassion",
              desc: "We approach cognitive health with empathy, understanding the sensitive nature of our assessments and their implications.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="rounded-full bg-primary/20 p-3 w-fit mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Research Section */}
      <div className="relative z-10 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/example3.jpg"
                  alt="Research and analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Evidence-Based Research</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our assessment methodology is built on decades of cognitive research and 
                validated through extensive clinical trials. Every question has been carefully 
                crafted and tested to ensure accuracy and reliability.
              </p>
              <ul className="space-y-3">
                {[
                  "Published in peer-reviewed medical journals",
                  "Validated across diverse populations",
                  "Continuous improvement based on new research",
                  "Adheres to international clinical standards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our comprehensive assessment takes just 10-15 minutes and provides 
            valuable insights into your cognitive health.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90"
          >
            <Link href="/quiz">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
