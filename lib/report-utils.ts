import { questions } from "@/lib/quiz-data";
import { iqAnswers } from "@/lib/quiz-data";

export interface CategoryScore {
  category: string;
  score: number;
  maxQuestions: number;
}

export interface GeneratedReport {
  categoryScores: CategoryScore[];
  overallScore: number;
  riskLevel: "Low" | "Moderate" | "Elevated";
  riskSummary: string;
  recommendations: string[];
  generatedAt: string;
}

const FREQUENCY_SCORE: Record<string, number> = {
  Never: 100,
  Sometimes: 50,
  Often: 20,
  Always: 10,
};

function getScoreForAnswer(
  questionId: number,
  answer: string,
  type: string,
): number | null {
  if (type === "frequency") {
    return FREQUENCY_SCORE[answer] ?? 50;
  }
  if (type === "yes-no") {
    return answer === "No" ? 100 : 40; // "No" to concern = better
  }
  if (type === "iq") {
    const correct = iqAnswers[questionId as keyof typeof iqAnswers];
    return correct && answer === correct ? 100 : 30;
  }
  if (type === "recall" || type === "gender") {
    return 50; // neutral for recall/gender in overall score
  }
  return null;
}

export function generateReportFromAnswers(
  answers: Record<number, string>,
): GeneratedReport {
  const byCategory: Record<string, number[]> = {};

  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer == null) return;
    const score = getScoreForAnswer(q.id, answer, q.type);
    if (score === null) return;
    if (!byCategory[q.category]) byCategory[q.category] = [];
    byCategory[q.category].push(score);
  });

  const categoryScores: CategoryScore[] = Object.entries(byCategory).map(
    ([category, scores]) => ({
      category,
      score: Math.round(
        scores.reduce((a, b) => a + b, 0) / scores.length,
      ),
      maxQuestions: scores.length,
    }),
  );

  const allScores = categoryScores.flatMap((c) =>
    Array(c.maxQuestions).fill(c.score),
  );
  const overallScore =
    allScores.length > 0
      ? Math.round(
          allScores.reduce((a, b) => a + b, 0) / allScores.length,
        )
      : 0;

  let riskLevel: GeneratedReport["riskLevel"] = "Low";
  let riskSummary = "Your responses suggest a low likelihood of significant cognitive concern in the screened areas.";

  if (overallScore < 50) {
    riskLevel = "Elevated";
    riskSummary =
      "Your responses indicate areas that may benefit from further evaluation. We recommend discussing these results with a healthcare provider.";
  } else if (overallScore < 70) {
    riskLevel = "Moderate";
    riskSummary =
      "Some patterns in your responses suggest it may be helpful to monitor cognition and consider lifestyle measures. A follow-up with a clinician can provide clarity.";
  }

  const recommendations: string[] = [];
  const lowCategories = categoryScores.filter((c) => c.score < 60);
  if (lowCategories.length > 0) {
    const names = lowCategories.map((c) => c.category).join(" and ");
    recommendations.push(
      `Focus on activities that support ${names}, such as structured routines and cognitive exercises.`,
    );
  }
  recommendations.push(
    "Stay physically active and maintain social connections; both are associated with better cognitive health.",
  );
  recommendations.push(
    "Schedule a follow-up with your doctor to review this assessment and any concerns.",
  );
  if (riskLevel === "Elevated") {
    recommendations.unshift(
      "Share this report with a healthcare provider for a full clinical evaluation.",
    );
  }

  return {
    categoryScores: categoryScores.sort((a, b) => a.category.localeCompare(b.category)),
    overallScore,
    riskLevel,
    riskSummary,
    recommendations,
    generatedAt: new Date().toISOString(),
  };
}

export type ReportDraft = {
  answers: Record<number, string>;
  email: string;
  plan: string;
  savedAt: number;
};

const REPORT_DRAFT_KEY = "brainly_report_draft";

export function getReportDraft(): ReportDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(REPORT_DRAFT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as ReportDraft;
    if (!data.answers || !data.email) return null;
    return data;
  } catch {
    return null;
  }
}

export function clearReportDraft(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(REPORT_DRAFT_KEY);
  } catch {
    // ignore
  }
}
