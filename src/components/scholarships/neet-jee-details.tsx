"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Home, 
  BookOpen, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const tuitionFeeStructure = [
  { rank: "District Topper", benefit: "100% Tuition Fee Waiver", bg: "bg-accent/10 dark:bg-accent/15" },
  { rank: "95% & Above", benefit: "Up to 90% Fee Support" },
  { rank: "90% – 94.99%", benefit: "Up to 75% Fee Support" },
  { rank: "85% – 89.99%", benefit: "Up to 60% Fee Support" },
  { rank: "80% – 84.99%", benefit: "Up to 50% Fee Support" },
  { rank: "75% – 79.99%", benefit: "Up to 40% Fee Support" },
  { rank: "70% – 74.99%", benefit: "Up to 30% Fee Support" },
  { rank: "All Participating Students", benefit: "Up to 25% Fee Support" },
];

const residentialStructure = [
  { category: "Top 10 Students", benefit: "Free Hostel, Mess & Mentorship", highlight: true },
  { category: "Rank 11 – 25", benefit: "Hostel Accommodation & Mentorship", highlight: false },
  { category: "Rank 26 – 50", benefit: "Partial Hostel Assistance", highlight: false },
  { category: "Economically Weaker Meritorious (5 Students)", benefit: "Special Residential Consideration", highlight: true },
];

const assistanceItems = [
  "Hostel accommodation assistance",
  "Mess / food support",
  "Academic mentorship",
  "Preparation guidance",
  "Attendance & discipline monitoring",
  "Test performance review",
  "Parent progress updates",
  "Career guidance support",
];

const monitoringItems = [
  "Regular performance tracking",
  "Test analysis & review",
  "Study planning guidance",
  "Motivation sessions",
  "Parent interaction support",
  "Career counseling assistance",
];

const guidelines = [
  "Benefits may be applicable in the form of tuition fee waiver, fee adjustment, hostel assistance, mentorship support, academic guidance, or institutional educational assistance.",
  "Residential assistance will be provided on the basis of merit ranking, academic performance, discipline, eligibility criteria, institutional policy, and seat availability.",
  "All benefits will be applicable only in associated coaching institutes and academic partner organizations.",
  "No direct guaranteed cash distribution is applicable under this initiative.",
  "Applicable benefits may be adjusted against tuition fees, hostel charges, academic services, or approved institutional support systems.",
  "Support structure may vary depending upon category, eligibility, institutional policy, and available seats.",
];

export function NeetJeeDetails() {
  return (
    <section id="neet-jee-program" className="py-20 md:py-28 relative overflow-hidden scroll-mt-24">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent dark:via-navy/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-4">
              <GraduationCap className="h-3.5 w-3.5" />
              Special Admission Program 2027
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white mb-6">
              NEET & IIT-JEE <span className="text-accent">Coaching Scholarship</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground dark:text-white/60 max-w-3xl mx-auto leading-relaxed text-pretty">
              The NEET & IIT-JEE Coaching Scholarship Program is designed for students preparing for competitive entrance
              examinations after Class 12th. The initiative aims to assist deserving and meritorious students through tuition fee
              support, residential assistance, mentorship, academic monitoring, and structured preparation guidance.
            </p>
          </div>
        </ScrollReveal>

        {/* Structure Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Left Column: Tuition Fee Table */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary dark:text-white">Tuition Fee Scholarship Structure</h3>
                    <p className="text-xs text-muted-foreground">Comprehensive tier-based fee benefits</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/30 overflow-hidden bg-background/50 dark:bg-navy-dark/10 divide-y divide-border/20">
                  {tuitionFeeStructure.map((row, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between py-3.5 px-4 hover:bg-muted/30 dark:hover:bg-white/5 transition-colors ${
                        row.bg || ""
                      }`}
                    >
                      <span className="font-semibold text-primary dark:text-white text-sm">{row.rank}</span>
                      <span className="font-extrabold text-accent bg-accent/5 dark:bg-accent/10 px-3 py-1 rounded-full text-xs md:text-sm border border-accent/10">
                        {row.benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Benefits will be directly mapped against tuition fee structure of associated institutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Residential Support & Assistance */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-accent-light">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary dark:text-white">Merit-Based Residential Support</h3>
                    <p className="text-xs text-muted-foreground">Premium hostel, accommodation & mess assistance</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/30 overflow-hidden bg-background/50 dark:bg-navy-dark/10 divide-y divide-border/20 mb-6">
                  {residentialStructure.map((row, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between py-3.5 px-4 hover:bg-muted/30 dark:hover:bg-white/5 transition-colors ${
                        row.highlight ? "bg-accent/[0.03] dark:bg-accent/[0.05]" : ""
                      }`}
                    >
                      <span className="font-semibold text-primary dark:text-white text-sm pr-2">{row.category}</span>
                      <span className="font-bold text-primary dark:text-accent bg-primary/5 dark:bg-accent/10 px-3 py-1 rounded-full text-xs md:text-sm border border-primary/10 dark:border-accent/10 shrink-0 text-right">
                        {row.benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Seats Banner */}
                <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-primary/5 p-4 border border-accent/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">Total Support Pool</span>
                      <span className="text-sm font-bold text-primary dark:text-white">200 Deserving Students</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-2xs font-extrabold bg-accent text-white uppercase shadow-gold">
                    Seat-Limited
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 italic">
                *Residential privileges are limited strictly by merit rank & institutional seat capabilities.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Support & Monitoring Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Residential Card */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8 border border-border/50 hover:border-accent/20 transition-all shadow-premium h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-primary dark:text-white">Residential & Academic Assistance</h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3.5 text-xs md:text-sm text-muted-foreground dark:text-white/70">
                  {assistanceItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/30 text-xs text-muted-foreground leading-relaxed italic">
                *Support may be available for up to <strong>10 months</strong> depending upon merit, eligibility, institutional policy, and seat availability.
              </div>
            </div>
          </ScrollReveal>

          {/* Academic Monitoring Card */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-all shadow-premium h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-accent-light">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-primary dark:text-white">Academic Monitoring & Mentorship</h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3.5 text-xs md:text-sm text-muted-foreground dark:text-white/70">
                  {monitoringItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary dark:text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/30 text-xs text-muted-foreground leading-relaxed italic">
                *Designed to help students maximize focus, improve consistency, quality of preparation, and academic standing.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Guidelines section */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-6 md:p-10 border border-border/50 mb-16 shadow-premium bg-muted/20 dark:bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-primary dark:text-white">Important Program Guidelines</h4>
                <p className="text-xs text-muted-foreground">Key rules, terms, and eligibility conditions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-sm text-muted-foreground dark:text-white/70 leading-relaxed">
              <div className="space-y-4">
                {guidelines.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-accent/20">
                      {index + 1}
                    </div>
                    <p className="flex-1">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {guidelines.slice(3).map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-accent/20">
                      {index + 4}
                    </div>
                    <p className="flex-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
}
