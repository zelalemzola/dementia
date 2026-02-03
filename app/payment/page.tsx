"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/payment/CheckoutPage";
import { motion } from "framer-motion";
import { Brain, Shield, Loader2 } from "lucide-react";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
);

function PaymentContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";
  const amountParam = searchParams.get("amount");
  const amount = useMemo(() => {
    const n = amountParam ? parseFloat(amountParam) : NaN;
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [amountParam]);

  if (amount === null) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-md"
        >
          <h1 className="text-xl font-bold text-foreground mb-2">
            Invalid payment details
          </h1>
          <p className="text-muted-foreground mb-6">
            Please choose a plan from the pricing page to continue.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Back to assessment
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <Brain className="h-5 w-5" />
            <span className="font-semibold">Brainly</span>
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-sm font-medium text-primary w-fit mb-4">
            <Shield className="h-3.5 w-3.5" />
            Secure checkout
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            Complete your purchase
          </h1>
          <p className="text-muted-foreground">
            {plan ? (
              <>
                <span className="font-medium text-foreground">{plan}</span> plan
                — ${amount.toFixed(2)} one-time
              </>
            ) : (
              <>${amount.toFixed(2)} one-time</>
            )}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} plan={plan} />
          </Elements>
        </motion.div>
      </div>
    </div>
  );
}

function PaymentFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Loading checkout…</span>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentFallback />}>
      <PaymentContent />
    </Suspense>
  );
}
