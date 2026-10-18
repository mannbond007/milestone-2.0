import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, GraduationCap, Trophy } from "lucide-react";
import { SuccessStoriesGrid } from "@/components/scholarships/success-stories-grid";

export const metadata: Metadata = {
  title: "Achievers & Success Stories",
  description:
    "Explore the achievements of MileStone Scholarship recipients and students who pursued medical, engineering, and higher education.",
};

export default function AchieversPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header Banner */}
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EE] dark:bg-[#1E3029] text-[#173B35] dark:text-[#59B892] mb-3 border border-[#3C8D72]/20">
              <Trophy className="w-3.5 h-3.5" />
              <span>MileStone Honor Roll</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Achievers & Scholar Stories
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Celebrating students who earned scholarships, gained admission into premier medical and engineering colleges, and achieved academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuccessStoriesGrid />
        </div>
      </section>
    </div>
  );
}
