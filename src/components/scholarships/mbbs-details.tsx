"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Home, 
  CheckCircle, 
  AlertCircle, 
  Globe, 
  ChevronRight,
  TrendingUp,
  MapPin
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const indiaStructure = [
  { category: "Government MBBS Sponsorship", benefit: "Top 2 Rank Holders – First Year Tuition Fee Sponsored", bg: "bg-accent/10 dark:bg-accent/15" },
  { category: "Government MBBS Tuition Support", benefit: "3rd Rank Holder – Up To 50% First Year Tuition Fee Support" },
  { category: "Hostel Support Program", benefit: "Rank 4 – 23 Students – First Year Hostel Fee Support" },
  { category: "Academic Book Support Program", benefit: "Rank 24 – 50 Students – First Year Academic Book Support" },
  { category: "Counselling & Admission Guidance Benefit", benefit: "All NEET Aspirants participating in the Milestone Scholarship Program may receive Counselling & Admission Guidance Benefit" },
];

const abroadStructure = [
  { category: "MBBS Abroad Full Tuition Sponsorship", rank: "Top Merit Selection – Rank 1", students: "1 Student", benefit: "First Year MBBS Tuition Fee Sponsored Free of Cost", highlight: true },
  { category: "Premium Merit Scholarship", rank: "Rank 2 – 75", students: "74 Students", benefit: "Up To 5,00,000 INR Educational Scholarship Support", highlight: false },
  { category: "Excellence Scholarship", rank: "Rank 76 – 300", students: "225 Students", benefit: "Up To 3,00,000 INR Scholarship Support", highlight: false },
  { category: "Merit Scholarship", rank: "Rank 301 – 600", students: "300 Students", benefit: "Up To 2,50,000 INR Scholarship Support", highlight: false },
  { category: "Academic Support Scholarship", rank: "Rank 601 – 1100", students: "500 Students", benefit: "Up To 2,00,000 INR Educational Scholarship Support", highlight: false },
  { category: "Educational Reward Benefit", rank: "Rank 1101 – 1600", students: "500 Students", benefit: "Up To 1,50,000 INR Educational Support Benefit", highlight: false },
  { category: "International Support Benefit", rank: "Rank 1601 – 2300", students: "700 Students", benefit: "Up To 1,00,000 INR Educational Support Benefit", highlight: false },
  { category: "Global Educational Benefit", rank: "Rank 2301 – 3300", students: "1000 Students", benefit: "Up To 50,000 INR Educational Support Benefit", highlight: false },
  { category: "Processing Fee Support Program", rank: "Rank 3301 – 4300", students: "1000 Students", benefit: "Processing Fee Waiver / Educational Support", highlight: false },
  { category: "Hostel Support Program", rank: "Rank 5301 – 6300", students: "1000 Students", benefit: "Hostel Support / Accommodation Assistance", highlight: false },
  { category: "Mess & Food Support Program", rank: "Rank 6301 – 6875", students: "575 Students", benefit: "Mess / Food Assistance Support", highlight: false },
];

const additionalBenefits = [
  "Every student participating in the Milestone Scholarship Program may receive educational rewards, scholarship support opportunities, counselling support, admission assistance benefits, hostel support, or institutional educational benefits based on eligibility and applicable program terms.",
  "Scholarship support opportunities may be offered through participating universities, institutions, and educational partner organizations associated with the Milestone Scholarship Program.",
  "Visa Fee Support / Assistance Benefits may also be provided separately to eligible students under applicable categories, participating institutions, and support programs as per institutional policy and scholarship eligibility criteria.",
];

const guidelines = [
  "Scholarship, Educational Reward, and Support Benefits under the Milestone Scholarship Program will be applicable only for students taking admission through Medi Vision Career Pvt. Ltd. and its officially associated admission support platforms or partner channels.",
  "No scholarship or reward amount shall be provided directly in cash to students. Applicable scholarship support, educational reward benefits, cashback support, tuition fee waiver, hostel support, processing fee support, visa assistance support, or other educational benefits may be adjusted, redeemed, or reflected in the student's academic fee structure or institutional educational expenses as per applicable program terms and institutional policies.",
  "Scholarship and educational support benefits may vary depending upon the institution, university, country, course, scholarship category, merit ranking, seat availability, and institutional policies.",
  "If a student changes the selected university, institution, or course, the scholarship/support benefit structure may also change accordingly.",
  "All scholarship and educational support benefits are subject to merit ranking, eligibility verification, institutional approval, document verification, seat availability, and applicable terms & conditions of participating universities and educational partner institutions.",
  "The Milestone Scholarship Program reserves the right to modify, revise, approve, reject, increase, decrease, or restructure scholarship/support categories, benefits, and institutional allocations as per applicable policies and program requirements.",
];

export function MbbsDetails() {
  return (
    <section id="mbbs-program" className="py-20 md:py-28 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent dark:via-navy/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-4">
              <GraduationCap className="h-3.5 w-3.5" />
              MBBS Scholarship Program 2026
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white mb-6 max-w-5xl mx-auto leading-tight md:leading-tight">
              Scholarship Opportunities for Students Planning MBBS in <span className="text-accent">India & Abroad</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground dark:text-white/60 max-w-3xl mx-auto leading-relaxed text-pretty">
              Get up to ₹5,00,000 in scholarship support for your MBBS journey. We provide comprehensive assistance covering tuition fees, hostel accommodation, visa processing, and expert admission counselling.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Left Column: MBBS IN INDIA */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary dark:text-white">MBBS IN INDIA</h3>
                    <p className="text-xs text-muted-foreground">Applicable Only for Government Medical Colleges</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/30 overflow-hidden bg-background/50 dark:bg-navy-dark/10 divide-y divide-border/20">
                  {indiaStructure.map((row, i) => (
                    <div 
                      key={i} 
                      className={`flex flex-col py-3.5 px-4 hover:bg-muted/30 dark:hover:bg-white/5 transition-colors gap-1 ${
                        row.bg || ""
                      }`}
                    >
                      <span className="font-semibold text-primary dark:text-white text-sm">{row.category}</span>
                      <span className="font-bold text-accent text-xs md:text-sm">
                        {row.benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Additional Student Benefits */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-all shadow-premium h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-accent-light">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-primary dark:text-white">Additional Student Benefits</h4>
                </div>
                <ul className="space-y-4 text-xs md:text-sm text-muted-foreground dark:text-white/70">
                  {additionalBenefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-primary dark:text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* MBBS ABROAD SCHOLARSHIP SECTION */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-3xl p-6 md:p-10 border border-border/50 mb-16 shadow-premium">
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-primary dark:text-white">MBBS ABROAD SCHOLARSHIP & EDUCATIONAL SUPPORT STRUCTURE</h4>
                <p className="text-xs text-muted-foreground">Milestone Scholarship Program 2026 • 6875+ Opportunities</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/30 overflow-hidden bg-background/50 dark:bg-navy-dark/10 hidden md:block">
              <table className="w-full text-left text-sm text-muted-foreground dark:text-white/70">
                <thead className="bg-muted/50 dark:bg-white/5 border-b border-border/20 text-primary dark:text-white font-semibold">
                  <tr>
                    <th className="py-4 px-5">Scholarship Category</th>
                    <th className="py-4 px-5">Rank / Eligibility</th>
                    <th className="py-4 px-5">Students</th>
                    <th className="py-4 px-5 text-right">Educational Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {abroadStructure.map((row, i) => (
                    <tr 
                      key={i} 
                      className={`hover:bg-muted/30 dark:hover:bg-white/5 transition-colors ${row.highlight ? "bg-accent/5 dark:bg-accent/10 text-primary dark:text-white font-medium" : ""}`}
                    >
                      <td className="py-3 px-5 font-medium">{row.category}</td>
                      <td className="py-3 px-5">{row.rank}</td>
                      <td className="py-3 px-5">{row.students}</td>
                      <td className="py-3 px-5 text-right font-semibold text-accent">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View for Table */}
            <div className="md:hidden space-y-4">
              {abroadStructure.map((row, i) => (
                <div key={i} className={`rounded-xl border border-border/20 p-4 ${row.highlight ? "bg-accent/5 border-accent/20" : "bg-muted/10"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-primary dark:text-white text-sm">{row.category}</span>
                    <span className="text-xs px-2 py-1 bg-background rounded-md shadow-sm border border-border/30">{row.students}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">Rank: <span className="font-medium text-foreground">{row.rank}</span></div>
                  <div className="text-sm font-bold text-accent mt-2">{row.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Guidelines section */}
        <ScrollReveal>
          <div className="glass rounded-3xl p-6 md:p-10 border border-border/50 mb-16 shadow-premium bg-muted/20 dark:bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-primary dark:text-white">Important Scholarship & Educational Benefit Policy</h4>
                <p className="text-xs text-muted-foreground">Key rules, terms, and eligibility conditions</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground dark:text-white/70 leading-relaxed">
              {guidelines.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-accent/20">
                    {index + 1}
                  </div>
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
