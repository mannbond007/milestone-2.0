"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  CheckCircle2, 
  ArrowRight, 
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";

export function ScholarshipFinder() {
  const { t } = useLocale();
  const [stream, setStream] = useState("medical");
  const [percentage, setPercentage] = useState("75-85");
  const [income, setIncome] = useState("under5");
  const [submittedStream, setSubmittedStream] = useState<string>("medical");

  const getResult = (activeStream: string) => {
    if (activeStream === "medical") {
      return {
        title: t("finder.results.medicalTitle", "MBBS & Healthcare Excellence Scholarship"),
        amount: "Up to ₹5,00,000",
        description: t(
          "finder.results.medicalDesc",
          "Full or partial tuition fee coverage, hostel stipend, and 1-on-1 mentorship with former AIIMS professors."
        ),
        benefits: [
          t("finder.results.medicalBenefit1", "100% Tuition Concession"),
          t("finder.results.medicalBenefit2", "Hostel Fee Waiver"),
          t("finder.results.medicalBenefit3", "AIIMS Professor Mentorship"),
          t("finder.results.medicalBenefit4", "Direct College Placement"),
        ],
      };
    } else if (activeStream === "engineering") {
      return {
        title: t("finder.results.engineeringTitle", "B.Tech & Future Tech Innovators Grant"),
        amount: "Up to ₹4,00,000",
        description: t(
          "finder.results.engineeringDesc",
          "Engineering scholarship for tech builders with IIT alumni mentorship and laptop stipends."
        ),
        benefits: [
          t("finder.results.engBenefit1", "Tuition Concession"),
          t("finder.results.engBenefit2", "IIT Alumni Mentorship"),
          t("finder.results.engBenefit3", "Coding & AI Bootcamps"),
          t("finder.results.engBenefit4", "Internship Guarantees"),
        ],
      };
    } else if (activeStream === "law") {
      return {
        title: t("finder.results.lawTitle", "National Legal Studies Scholarship"),
        amount: "Up to ₹3,00,000",
        description: t(
          "finder.results.lawDesc",
          "Support for BA LLB and CLAT aspirants with Supreme Court advocate guidance."
        ),
        benefits: [
          t("finder.results.lawBenefit1", "CLAT Fee Waiver"),
          t("finder.results.lawBenefit2", "Supreme Court Advocate Mentorship"),
          t("finder.results.lawBenefit3", "Judicial Exam Prep"),
          t("finder.results.lawBenefit4", "Moot Court Exposure"),
        ],
      };
    } else {
      return {
        title: t("finder.results.generalTitle", "Milestone All-Stream Merit & Need Aid"),
        amount: "Up to ₹2,50,000",
        description: t(
          "finder.results.generalDesc",
          "Comprehensive financial support and guidance for BBA, BCA, B.Sc, B.Com and general courses."
        ),
        benefits: [
          t("finder.results.genBenefit1", "Fee Concessions"),
          t("finder.results.genBenefit2", "Career Counseling"),
          t("finder.results.genBenefit3", "Skill Certification Grants"),
          t("finder.results.genBenefit4", "Placement Support"),
        ],
      };
    }
  };

  const handleSearch = () => {
    setSubmittedStream(stream);
  };

  const matchingResult = getResult(submittedStream);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="scholarship-finder">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge={t("finder.badge", "Instant Grant Finder")}
            title={
              <>
                {t("finder.titlePart1", "Find Your")}{" "}
                <span className="text-accent">{t("finder.titlePart2", "Matching Scholarship")}</span>{" "}
                {t("finder.titlePart3", "in 10 Seconds")}
              </>
            }
            subtitle={t(
              "finder.subtitle",
              "Select your current stream, academic percentage, and income bracket to discover instant fee waivers and grant amounts."
            )}
          />
        </ScrollReveal>

        <div className="mt-8 max-w-5xl mx-auto bg-card dark:bg-[#0b0f19] rounded-3xl border-2 border-border/80 p-6 md:p-10 shadow-2xl">
          {/* Inputs Row */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {t("finder.streamLabel", "Target Academic Stream")}
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full p-3.5 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
              >
                <option value="medical">{t("finder.streams.medical", "Medical (MBBS / BAMS / BDS)")}</option>
                <option value="engineering">{t("finder.streams.engineering", "Engineering (B.Tech / M.Tech)")}</option>
                <option value="law">{t("finder.streams.law", "Law (BA LLB / LLB)")}</option>
                <option value="management">{t("finder.streams.management", "Management & Commerce (BBA / B.Com)")}</option>
                <option value="science">{t("finder.streams.science", "Science & Computer Apps (B.Sc / BCA)")}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {t("finder.scoreLabel", "Class 12th / Qualifying Score")}
              </label>
              <select
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full p-3.5 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
              >
                <option value="90+">{t("finder.scores.top", "90% and Above (Top Merit)")}</option>
                <option value="75-85">{t("finder.scores.high", "75% to 89% (High Merit)")}</option>
                <option value="60-74">{t("finder.scores.qualifying", "60% to 74% (Qualifying)")}</option>
                <option value="55-59">{t("finder.scores.standard", "55% to 59% (Standard)")}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {t("finder.incomeLabel", "Annual Family Income")}
              </label>
              <select
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full p-3.5 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
              >
                <option value="under3">{t("finder.incomes.under3", "Under ₹3.0 Lakhs (Priority Grant)")}</option>
                <option value="under5">{t("finder.incomes.under5", "₹3.0 Lakhs to ₹5.0 Lakhs")}</option>
                <option value="above5">{t("finder.incomes.above5", "Above ₹5.0 Lakhs (Merit Grant)")}</option>
              </select>
            </div>
          </div>

          <Button
            onClick={handleSearch}
            className="w-full bg-accent hover:bg-accent/90 text-black font-extrabold py-4 rounded-xl shadow-lg transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>{t("finder.searchBtn", "Check My Instant Scholarship Grant")}</span>
          </Button>

          {/* Results Box */}
          {matchingResult && (
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-accent/40 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                    {t("finder.matchedBadge", "Matched Scholarship")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-primary dark:text-white mt-1.5">
                    {matchingResult.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {matchingResult.description}
                  </p>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <span className="text-xs text-muted-foreground block font-medium">
                    {t("finder.grantCoverage", "Eligible Grant Coverage")}
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-accent">
                    {matchingResult.amount}
                  </span>
                </div>
              </div>

              {/* Benefits checklist */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {matchingResult.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-foreground bg-secondary/60 p-2.5 rounded-xl border border-border/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-muted-foreground">
                  {t(
                    "finder.note",
                    "⚡ Note: Over 92% of qualified candidates receive immediate fee waivers upon document submission."
                  )}
                </span>
                <Link href="/sign-up">
                  <Button className="bg-accent hover:bg-accent/90 text-black font-extrabold px-6 py-2.5 rounded-xl text-xs cursor-pointer flex items-center gap-1.5 shrink-0">
                    <span>{t("finder.applyBtn", "Apply For This Grant")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
