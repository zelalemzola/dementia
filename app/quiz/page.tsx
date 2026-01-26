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
import { CognitiveInsight } from "@/components/quiz/cognitive-insight";
import { QuickInsight } from "@/components/quiz/quick-insight";

// Import doctor quotes to check when they should show
const doctorQuotes = [
  {
    quote:
      "As a neurologist, I've designed these questions to identify early cognitive changes. Your honest answers help us provide accurate insights.",
    category: "memory",
    showOnQuestions: [2, 11, 18],
  },
  {
    quote:
      "These cognitive assessments are based on clinical protocols I use in my practice. Each question serves a specific diagnostic purpose.",
    category: "executive",
    showOnQuestions: [19, 24],
  },
  {
    quote:
      "In my 20 years of practice, early detection has been key to better outcomes. This assessment follows proven medical guidelines.",
    category: "attention",
    showOnQuestions: [25, 30],
  },
  {
    quote:
      "Language processing questions help me evaluate multiple brain regions. These are the same assessments we use in clinical settings.",
    category: "language",
    showOnQuestions: [35, 38],
  },
  {
    quote:
      "Orientation questions may seem simple, but they provide crucial information about cognitive health that I rely on in diagnosis.",
    category: "orientation",
    showOnQuestions: [31, 33],
  },
  {
    quote:
      "Remember, this assessment is designed to help, not worry you. Answer honestly so we can provide the most accurate medical insights.",
    category: "general",
    showOnQuestions: [10, 20, 39],
  },
];
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Brain,
  AlertTriangle,
  Shield,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type QuizStage = "quiz" | "analyzing" | "email" | "pricing" | "success";

export default function QuizPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [stage, setStage] = useState<QuizStage>("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentPopup, setCurrentPopup] = useState<(typeof popups)[0] | null>(
    null,
  );
  const [showCognitiveInsight, setShowCognitiveInsight] = useState(false);
  const [showQuickInsight, setShowQuickInsight] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [recallAnswer, setRecallAnswer] = useState<boolean | null>(null);

  // Get gender from localStorage if available
  const userGender =
    typeof window !== "undefined" ? localStorage.getItem("userGender") : null;

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

  // Check if we should show a cognitive insight
  const checkForCognitiveInsight = useCallback((questionNumber: number) => {
    const insightTriggers = [5, 12, 20, 28, 35];
    return insightTriggers.includes(questionNumber);
  }, []);

  // Check if we should show a quick insight
  const checkForQuickInsight = useCallback((questionNumber: number) => {
    const quickInsightTriggers = [8, 15, 22, 30];
    return quickInsightTriggers.includes(questionNumber);
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));

      // Small delay before moving to next question or showing popup/insight
      setTimeout(() => {
        const hasPopup = checkForPopup(currentQuestion.id);
        const shouldShowInsight = checkForCognitiveInsight(
          currentQuestionIndex + 1,
        );
        const shouldShowQuickInsight = checkForQuickInsight(
          currentQuestionIndex + 1,
        );

        if (hasPopup) {
          // Show popup first if there is one
          return;
        } else if (shouldShowInsight) {
          // Show cognitive insight
          setShowCognitiveInsight(true);
          return;
        } else if (shouldShowQuickInsight) {
          // Show quick insight
          setShowQuickInsight(true);
          return;
        } else {
          // Continue to next question or finish
          if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
          } else {
            setStage("analyzing");
          }
        }
      }, 300);
    },
    [
      currentQuestion,
      currentQuestionIndex,
      totalQuestions,
      checkForPopup,
      checkForCognitiveInsight,
    ],
  );

  const handlePopupContinue = useCallback(() => {
    setCurrentPopup(null);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStage("analyzing");
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handleRecallAnswer = useCallback(
    (remembered: boolean) => {
      setRecallAnswer(remembered);
      handlePopupContinue();
    },
    [handlePopupContinue],
  );

  const handleCognitiveInsightContinue = useCallback(() => {
    setShowCognitiveInsight(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStage("analyzing");
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handleQuickInsightContinue = useCallback(() => {
    setShowQuickInsight(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStage("analyzing");
    }
  }, [currentQuestionIndex, totalQuestions]);

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
    setShowCognitiveInsight(false);
    setShowQuickInsight(false);
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
      <div className="min-h-screen bg-background flex items-start justify-center p-4 pt-10">
        {/* Background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative z-10 max-w-md w-full"
        >
          <div className="bg-card border border-amber-200 rounded-2xl shadow-2xl overflow-hidden">
            {/* Doctor Header */}
            <div className="flex items-center gap-3 p-6 border-b border-border/50 bg-amber-50/50">
              <div className="relative">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40">
                  <Image
                    src="/images/dr-sam-profile.webp"
                    alt="Dr. Samuel Richardson"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-amber-500 border-2 border-card flex items-center justify-center">
                  <AlertTriangle className="h-2 w-2 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground ">
                    Dr. Richardson
                  </span>
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <p className=" text-muted-foreground">
                  Important Assessment Guidelines
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                Assessment Guidelines
              </h3>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Please complete this assessment independently
                    </p>
                    <p className="text-[14px] text-muted-foreground">
                      For accurate results, avoid using external help or
                      resources
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2  text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>Answer honestly and to the best of your ability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>Find a quiet, distraction-free environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                  <span>Complete in one sitting (10-15 minutes)</span>
                </div>
              </div>

              <Button
                onClick={() => setShowDisclaimer(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 text-lg"
              >
                I Understand, Begin Assessment
              </Button>

              <p className="text-center  text-muted-foreground mt-2">
                By continuing, you agree to complete independently
              </p>
            </div>

            {/* Medical accent line */}
            <div className="h-1 bg-amber-500" />
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
    return (
      <SuccessScreen
        email={email}
        plan={selectedPlan}
        onStartOver={handleStartOver}
      />
    );
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
        {/* Doctor Quote Section - Only show occasionally */}
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
            onRecallAnswer={
              currentPopup.type === "recall" ? handleRecallAnswer : undefined
            }
          />
        )}
      </AnimatePresence>

      {/* Cognitive Insight Modal */}
      <AnimatePresence>
        {showCognitiveInsight && (
          <CognitiveInsight
            questionNumber={currentQuestionIndex + 1}
            category={currentCategory}
            answers={answers}
            onContinue={handleCognitiveInsightContinue}
          />
        )}
      </AnimatePresence>

      {/* Quick Insight Notification */}
      <AnimatePresence>
        {showQuickInsight && (
          <QuickInsight
            questionNumber={currentQuestionIndex + 1}
            category={currentCategory}
            answers={answers}
            onContinue={handleQuickInsightContinue}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
