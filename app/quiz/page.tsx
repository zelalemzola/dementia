"use client";

import { useState, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions, popups } from "@/lib/quiz-data";
import { ProgressBar } from "@/components/quiz/progress-bar";
import { QuestionCard } from "@/components/quiz/question-card";
import { PopupModal } from "@/components/quiz/popup-modal";
import { AnalysisScreen } from "@/components/quiz/analysis-screen";
import { EmailCapture } from "@/components/quiz/email-capture";
import { PricingPlans } from "@/components/quiz/pricing-plans";
import { SuccessScreen } from "@/components/quiz/success-screen";
import { DoctorQuote } from "@/components/quiz/doctor-quote";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

type QuizStage = "quiz" | "analyzing" | "email" | "pricing" | "success";

export default function QuizPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [stage, setStage] = useState<QuizStage>("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentPopup, setCurrentPopup] = useState<typeof popups[0] | null>(null);
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [recallAnswer, setRecallAnswer] = useState<boolean | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Check if we should show a popup after answering
  const checkForPopup = useCallback((questionId: number) => {
    const popup = popups.find((p) => p.triggerAfterQuestion === questionId);
    if (popup) {
      setCurrentPopup(popup);
      return true;
    }
    return false;
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));

    // Small delay before moving to next question or showing popup
    setTimeout(() => {
      const hasPopup = checkForPopup(currentQuestion.id);
      if (!hasPopup) {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          setStage("analyzing");
        }
      }
    }, 300);
  }, [currentQuestion, currentQuestionIndex, totalQuestions, checkForPopup]);

  const handlePopupContinue = useCallback(() => {
    setCurrentPopup(null);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStage("analyzing");
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handleRecallAnswer = useCallback((remembered: boolean) => {
    setRecallAnswer(remembered);
    handlePopupContinue();
  }, [handlePopupContinue]);

  const handleAnalysisComplete = useCallback(() => {
    setStage("email");
  }, []);

  const handleEmailSubmit = useCallback((submittedEmail: string) => {
    setEmail(submittedEmail);
    setStage("pricing");
  }, []);

  const handlePlanSelect = useCallback((plan: string) => {
    setSelectedPlan(plan);
    setStage("success");
  }, []);

  const handleStartOver = useCallback(() => {
    setStage("quiz");
    setCurrentQuestionIndex(0);
    setAnswers({});
    setEmail("");
    setSelectedPlan("");
    setRecallAnswer(null);
    setCurrentPopup(null);
  }, []);

  const handleGoBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  // Memoize category for progress bar
  const currentCategory = useMemo(() => {
    return currentQuestion?.category || "";
  }, [currentQuestion]);

  // Render disclaimer popup first
  if (showDisclaimer) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        {/* Background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg w-full"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with warning */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-b border-amber-500/30 p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/20 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Important: Please Read</h2>
                  <p className="text-amber-400/80 text-sm">Before Starting Your Assessment</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Please do not cheat or use help from anyone or anything.</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      So we can give you the most accurate detailed report of your cognitive health.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <p className="leading-relaxed">
                  This assessment is designed to evaluate your memory and cognitive function naturally. 
                  Using external assistance will compromise the accuracy of your results.
                </p>
                
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Answer all questions honestly and to the best of your ability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Do not use notes, internet, or ask others for help</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Complete the assessment in one sitting if possible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Find a quiet, distraction-free environment</span>
                  </div>
                </div>
              </div>

              {/* Estimated time */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary/30 rounded-lg py-3">
                <Brain className="h-4 w-4 text-primary" />
                <span>Estimated completion time: 10-15 minutes</span>
              </div>
            </div>

            {/* Footer with button */}
            <div className="p-6 pt-0">
              <Button
                onClick={() => setShowDisclaimer(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl transition-all hover:scale-[1.02]"
              >
                I Understand, Begin Assessment
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                By continuing, you agree to complete this assessment without external assistance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Render different stages
  if (stage === "analyzing") {
    return <AnalysisScreen onComplete={handleAnalysisComplete} />;
  }

  if (stage === "email") {
    return <EmailCapture onSubmit={handleEmailSubmit} />;
  }

  if (stage === "pricing") {
    return <PricingPlans onSelectPlan={handlePlanSelect} email={email} />;
  }

  if (stage === "success") {
    return <SuccessScreen email={email} plan={selectedPlan} onStartOver={handleStartOver} />;
  }

  // Quiz stage
  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="rounded-lg bg-primary/20 p-2 transition-all group-hover:bg-primary/30">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-foreground">Brainly</span>
            </Link>
            {currentQuestionIndex > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleGoBack}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
          </div>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            category={currentCategory}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Doctor Quote Section */}
        <DoctorQuote 
          currentQuestion={currentQuestionIndex} 
          category={currentCategory} 
        />

        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion.id]}
          />
        </AnimatePresence>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          Select an answer to continue
        </motion.div>
      </main>

      {/* Popup Modal */}
      <AnimatePresence>
        {currentPopup && (
          <PopupModal
            popup={currentPopup}
            onContinue={handlePopupContinue}
            onRecallAnswer={currentPopup.type === "recall" ? handleRecallAnswer : undefined}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
