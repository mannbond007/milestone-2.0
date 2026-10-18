"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Target, 
  Star, 
  Lightbulb,
  BookOpen, 
  CheckCircle, 
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Rocket
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const programObjectives = [
  "Strong Academic Foundation Development",
  "Focused Learning & Study Discipline",
  "Personality & Leadership Development",
  "Communication & Confidence Building",
  "Early Career Awareness & Goal Orientation",
  "Time Management & Productivity Development",
  "Competitive Thinking & Problem-Solving Skills",
  "Future Preparation for NEET, IIT-JEE, Olympiads & Civil Services Foundation",
];

const whyThisProgramFeatures = [
  "A disciplined residential academic environment",
  "Focused learning support",
  "Structured mentorship system",
  "Strong conceptual learning",
  "Continuous motivation & monitoring",
  "Future-oriented academic preparation",
];

const scholarshipSupport = [
  { category: "Top 50 Students", benefit: "Tuition Fee Support / Waiver Benefit", highlight: true },
  { category: "50 Students", benefit: "Hostel & Mess Support", highlight: false },
  { category: "Other Selected Participants", benefit: "20% – 50% Merit-Based Academic Benefit", highlight: false },
];

const specialFeatures = [
  "Foundation for NEET / IIT / Olympiads",
  "English Communication Development",
  "Mental Ability & IQ Sessions",
  "Coding & AI Awareness Sessions",
  "Daily Mentorship Monitoring",
  "Personality & Leadership Training",
  "Parent Progress Reports",
  "Study Discipline & Productivity System",
  "Reading & Library Development Program",
  "Meditation, Focus & Physical Development Activities",
];

export function FutureFoundationDetails() {
  return (
    <section id="future-foundation-program" className="py-20 md:py-28 relative overflow-hidden scroll-mt-24">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/5 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary dark:text-accent-light border border-primary/20 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              For Class 6 Students
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white mb-4">
              Milestone Future Foundation <span className="text-accent block mt-2">Residential Program</span>
            </h2>
            <p className="text-lg md:text-xl font-medium text-muted-foreground dark:text-white/80 mb-8">
              Specially Designed Academic & Mentorship Program
            </p>
            <p className="text-base md:text-lg text-muted-foreground dark:text-white/60 max-w-4xl mx-auto leading-relaxed text-pretty">
              The Milestone Future Foundation Residential Program is a specially designed academic and
              mentorship initiative created to help young students develop strong educational foundations, discipline,
              confidence, communication skills, and future career readiness from an early stage. This program
              focuses on building future doctors, engineers, scientists, civil servants, and leaders through a structured
              learning ecosystem and focused mentorship support.
            </p>
          </div>
        </ScrollReveal>

        {/* Objectives & Why this program */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Program Objectives */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-border/50 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-accent-light">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary dark:text-white">Program Objectives</h3>
              </div>
              <ul className="space-y-4 text-sm md:text-base text-muted-foreground dark:text-white/70 flex-1">
                {programObjectives.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary dark:text-accent flex items-center justify-center text-xs shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Why This Program? */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-border/50 h-full flex flex-col bg-muted/20 dark:bg-white/[0.01]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary dark:text-white">Why This Program?</h3>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground dark:text-white/70 mb-6 leading-relaxed">
                Many students lose valuable years later due to lack of proper guidance, discipline, academic direction,
                and focused mentorship. The Milestone Program is designed to provide students with:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-6 flex-1">
                {whyThisProgramFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground dark:text-white/70">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-primary dark:text-white/90 font-medium italic">
                  The objective is to help students utilize their potential effectively from an early stage and avoid
                  unstructured preparation in later years.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scholarship Support Structure Table */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-6 md:p-10 shadow-premium border border-border/50 mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary dark:text-white">Residential Scholarship Support Structure</h3>
                  <p className="text-xs text-muted-foreground">Merit-based assistance for participating students</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/30 overflow-hidden bg-background/50 dark:bg-navy-dark/10 divide-y divide-border/20">
              <div className="flex items-center justify-between py-3.5 px-4 md:px-6 bg-muted/50 dark:bg-white/5 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                <span className="w-1/2">Category</span>
                <span className="w-1/2 text-right">Educational Support Benefit</span>
              </div>
              {scholarshipSupport.map((row, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between py-4 px-4 md:px-6 hover:bg-muted/30 dark:hover:bg-white/5 transition-colors ${
                    row.highlight ? "bg-accent/[0.03] dark:bg-accent/[0.05]" : ""
                  }`}
                >
                  <span className="font-semibold text-primary dark:text-white text-sm w-1/2">{row.category}</span>
                  <div className="w-1/2 flex justify-end">
                    <span className="font-bold text-primary dark:text-accent bg-primary/5 dark:bg-accent/10 px-3 py-1.5 rounded-full text-xs md:text-sm border border-primary/10 dark:border-accent/10 text-right">
                      {row.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Special Features */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-6 md:p-10 border border-border/50 mb-16 shadow-premium">
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-accent-light">
                <Star className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-bold text-xl text-primary dark:text-white">Special Features</h4>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 text-sm md:text-base text-muted-foreground dark:text-white/70 font-medium">
              {specialFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(229,170,54,0.6)]" />
                  <p className="flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>



      </div>
    </section>
  );
}
