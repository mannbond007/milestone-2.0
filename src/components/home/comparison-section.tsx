"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Check, X, Award } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

const comparisonData = [
  {
    feature: "Tuition Fee Concession & Aid",
    milestone: "Up to 100% Fee Concessions & Grants",
    traditional: "Full Self-Funded Fees (₹5L - ₹50L)",
    milestoneCheck: true,
    traditionalCheck: false,
  },
  {
    feature: "1-on-1 Senior Faculty Mentorship",
    milestone: "Dedicated AIIMS / IIT Alumni Mentors",
    traditional: "No Dedicated Mentorship Provided",
    milestoneCheck: true,
    traditionalCheck: false,
  },
  {
    feature: "Scholarship Test & Merit Ranking",
    milestone: "Transparent Phase 1 & Phase 2 Evaluation",
    traditional: "Opaque or No Entrance Assistance",
    milestoneCheck: true,
    traditionalCheck: false,
  },
  {
    feature: "Competitive Exam Prep Support",
    milestone: "Full NEET, JEE, CLAT Study Material & Mocks",
    traditional: "Expensive Extra Coaching Fees",
    milestoneCheck: true,
    traditionalCheck: false,
  },
  {
    feature: "Disbursement & Financial Support",
    milestone: "Direct College Concessions within 30 Days",
    traditional: "Long Delays or Unclear Approvals",
    milestoneCheck: true,
    traditionalCheck: false,
  },
];

export function ComparisonSection() {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/30 dark:bg-[#080d1a]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge={t("homeComparison.badge", "Why Choose Milestone")}
            title={
              <>
                {t("homeComparison.titlePart1", "Milestone Ecosystem vs")}{" "}
                <span className="text-accent">{t("homeComparison.titlePart2", "Traditional Admission")}</span>
              </>
            }
            subtitle={t(
              "homeComparison.subtitle",
              "Compare how Milestone Scholarship Program protects your financial future and accelerates your academic career."
            )}
          />
        </ScrollReveal>

        <div className="mt-8 max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse rounded-3xl overflow-hidden border border-border/70 bg-card dark:bg-[#0b0f19] shadow-xl">
            <thead>
              <tr className="bg-secondary/80 text-foreground font-bold border-b border-border">
                <th className="p-4 md:p-5 w-1/3">
                  {t("homeComparison.featureCol", "Key Feature / Benefit")}
                </th>
                <th className="p-4 md:p-5 w-1/3 bg-amber-500/10 text-amber-500 border-x border-amber-500/20">
                  <div className="flex items-center gap-1.5 font-extrabold text-base">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>{t("homeComparison.milestoneCol", "Milestone Program")}</span>
                  </div>
                </th>
                <th className="p-4 md:p-5 w-1/3 text-muted-foreground">
                  {t("homeComparison.traditionalCol", "Traditional Colleges / Direct")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              {comparisonData.map((row, idx) => {
                const feature = t(`comparisonRowsList.${idx}.feature`, row.feature);
                const milestone = t(`comparisonRowsList.${idx}.milestone`, row.milestone);
                const traditional = t(`comparisonRowsList.${idx}.traditional`, row.traditional);

                return (
                  <tr key={idx} className="hover:bg-secondary/40 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-foreground">
                      {feature}
                    </td>
                    <td className="p-4 md:p-5 bg-amber-500/5 font-semibold text-foreground border-x border-amber-500/15">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-foreground">{milestone}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-muted-foreground">{traditional}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
