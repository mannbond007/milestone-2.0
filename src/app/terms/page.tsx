import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | MileStone Scholarship",
  description: "Terms and conditions of use for MileStone Scholarship Program.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 rounded-2xl bg-card border border-border shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-secondary text-accent">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Terms and Conditions
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Effective Date: 2026 Academic Session
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              By accessing the MileStone Scholarship platform, you agree to comply with the terms and statutory educational advisory guidelines stated herein.
            </p>
            <h2 className="text-sm font-bold text-foreground">1. Nature of Advisory Services</h2>
            <p>
              MileStone Scholarship provides educational counselling, information regarding institutional requirements, entrance tests, and scholarship applications. We do not guarantee admission to any educational institution or grant unverified claims of seat reservation.
            </p>
            <h2 className="text-sm font-bold text-foreground">2. Scholarship Awards</h2>
            <p>
              Scholarships offered through MileStone or affiliated partners are awarded subject to authentic document verification, eligibility audits, and available sponsor allocations.
            </p>
            <h2 className="text-sm font-bold text-foreground">3. Student Responsibilities</h2>
            <p>
              Applicants are solely responsible for ensuring the accuracy and genuineness of all documents and academic scores submitted during registration and consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
