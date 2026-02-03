"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Brain,
  AlertTriangle,
  FileText,
  Download,
  Shield,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  getReportDraft,
  generateReportFromAnswers,
  type GeneratedReport,
} from "@/lib/report-utils";
import { cn } from "@/lib/utils";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") ?? "";
  const plan = searchParams.get("plan") ?? "";
  const [open, setOpen] = useState(false);
  const [report, setReport] = useState<GeneratedReport | null>(null);
  const [email, setEmail] = useState<string>("");
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const draft = getReportDraft();
    if (draft?.answers && Object.keys(draft.answers).length > 0) {
      setReport(generateReportFromAnswers(draft.answers));
      setEmail(draft.email ?? "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 print:py-6 print:max-w-none">
        {/* Success header - hide in print if we have report */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "text-center mb-10",
            report ? "print:hidden" : "",
          )}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
            <CheckCircle className="h-9 w-9" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Payment successful
          </h1>
          {amount && (
            <p className="text-muted-foreground mb-4">
              {plan && (
                <span className="font-medium text-foreground">{plan}</span>
              )}
              {plan && " — "}${amount} paid successfully.
            </p>
          )}
          {!report && (
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              No report data found. Complete the assessment and complete
              payment to see your personalized report.
            </p>
          )}
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground print:hidden"
          >
            <Brain className="h-4 w-4" />
            Back to Brainly
          </Link>
        </motion.div>

        {/* Report content */}
        {report && (
          <motion.div
            ref={reportRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="report-print-area space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              {/* Report header */}
              <div className="flex items-center gap-4 p-6 border-b border-border bg-secondary/30">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Dementia Risk Assessment Report
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {email && `Prepared for ${email}`}
                    {plan && ` · ${plan} plan`}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Overall score & risk */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-secondary/50 p-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Overall score
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {report.overallScore}
                      <span className="text-lg font-normal text-muted-foreground">
                        /100
                      </span>
                    </p>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-4 flex flex-col justify-center">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Risk level
                    </p>
                    <p
                      className={cn(
                        "text-lg font-bold",
                        report.riskLevel === "Low" && "text-green-600",
                        report.riskLevel === "Moderate" && "text-amber-600",
                        report.riskLevel === "Elevated" && "text-destructive",
                      )}
                    >
                      {report.riskLevel}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{report.riskSummary}</p>
                  </div>
                </div>

                {/* Category scores */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Scores by category
                  </h3>
                  <div className="space-y-3">
                    {report.categoryScores.map((cat) => (
                      <div
                        key={cat.category}
                        className="flex items-center gap-3"
                      >
                        <span className="w-40 text-sm text-muted-foreground shrink-0">
                          {cat.category}
                        </span>
                        <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              cat.score >= 70 && "bg-green-500",
                              cat.score >= 50 && cat.score < 70 && "bg-amber-500",
                              cat.score < 50 && "bg-destructive/80",
                            )}
                            style={{ width: `${cat.score}%` }}
                          />
                        </div>
                        <span className="w-10 text-right text-sm font-medium text-foreground">
                          {cat.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="rounded-lg border border-border p-4 space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {report.recommendations.map((rec, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-medium">
                          {i + 1}
                        </span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Download / Print */}
            <div className="flex flex-wrap gap-3 print:hidden">
              <Button
                onClick={handlePrint}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="h-4 w-4 mr-2" />
                Download / Print report
              </Button>
              <Link href="/">
                <Button variant="outline">Back to home</Button>
              </Link>
            </div>
          </motion.div>
        )}

        {!report && (
          <div className="print:hidden">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Take assessment
            </Link>
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={true}
          className="sm:max-w-md border-amber-200 bg-card print:hidden"
        >
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-amber-100 p-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <DialogTitle className="text-lg">
                Important — please read
              </DialogTitle>
            </div>
            <DialogDescription className="text-left text-foreground/90 pt-2">
              Payment successful. Please do not reload before finishing reading
              your report or before you download your report, so you don’t lose
              the report and get sent back to the pricing page.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              I understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
