"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Target, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  BookOpen,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Define core values data
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description: "Ensuring an unbiased, highly transparent, and merit-based selection process that values genuine need and potential above all.",
    gradient: "from-amber-500/10 to-yellow-500/5",
    iconColor: "text-amber-500",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Partnering with expert mentors and providing premium resources to guide students toward exceptional academic achievements.",
    gradient: "from-blue-500/10 to-indigo-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: HeartHandshake,
    title: "Empathy & Support",
    description: "Fostering an inclusive, warm ecosystem that listens to personal constraints and provides holistic mental and financial assistance.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Constantly expanding our scholarship reach and upgrading mentor programs to adapt to shifting career terrains and student needs.",
    gradient: "from-rose-500/10 to-orange-500/5",
    iconColor: "text-rose-500",
  },
];

// Define roadmap step data
const journeySteps = [
  {
    step: "01",
    title: "Eligibility & Discovery",
    description: "Reaching out to deserving candidates across India, identifying potential through transparent, comprehensive evaluation.",
  },
  {
    step: "02",
    title: "Mentorship & Guidance",
    description: "Pairing selected scholars with subject experts, offering disciplined schedules, curated study materials, and regular progress reviews.",
  },
  {
    step: "03",
    title: "Success & Pay-It-Forward",
    description: "Guiding students into high-value professional colleges and careers, nurturing a community that eventually guides the next generation.",
  },
];

export function VisionMissionContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.2] dark:opacity-[0.4] pointer-events-none" />
      
      {/* Dynamic light sources / gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 dark:bg-accent/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/5 dark:bg-accent/[0.02] blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] bg-accent/10 text-accent border border-accent/20 shadow-[0_2px_10px_rgba(163,120,44,0.05)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            Our North Star
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
          >
            Vision & <span className="gradient-text-gold font-extrabold">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty font-normal"
          >
            Empowering dreams beyond financial limits through structured mentorship, disciplined academic guidance, and equitable access to quality education. We believe every capable mind deserves the sky.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-3.5 mt-10"
          >
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-accent" />
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(163,120,44,0.65)]" />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
        </div>
      </section>

      {/* Core Split Cards (Vision & Program Objective) */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <ScrollReveal delay={0.1}>
              <div className="group relative h-full rounded-3xl bg-white dark:bg-card/70 border border-slate-200 dark:border-white/10 p-8 md:p-10 flex flex-col shadow-premium hover:shadow-card-hover hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 overflow-hidden">
                {/* Visual hover highlight lines */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-grid opacity-[0.01] dark:opacity-[0.03] group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Rocket className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">The Dream</span>
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white">
                      Our Vision
                    </h2>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-200/90 leading-relaxed font-medium">
                    To create a focused, high-discipline and future-ready academic ecosystem where students receive direct mentorship, resource assistance, and opportunities from an early stage to achieve their career goals.
                  </p>

                  <div className="space-y-3.5 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Early Direction:</strong> Steer young aspirants in the right direction before critical exam milestones.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Quality Materials:</strong> Demolish geographical barriers to top-tier academic books & tests.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Equitable Ecosystem:</strong> Bridge the support gap between well-off and underprivileged families.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-extrabold text-base md:text-lg text-accent italic">
                      &ldquo;Focused Learning Today. Successful Career Tomorrow.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission / Objective Card */}
            <ScrollReveal delay={0.2}>
              <div className="group relative h-full rounded-3xl bg-white dark:bg-card/70 border border-slate-200 dark:border-white/10 p-8 md:p-10 flex flex-col shadow-premium hover:shadow-card-hover hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 overflow-hidden">
                {/* Visual hover highlight lines */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-grid opacity-[0.01] dark:opacity-[0.03] group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Target className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">The Action</span>
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white">
                      Program Objective
                    </h2>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-200/90 leading-relaxed font-medium">
                    The Milestone Scholarship Program aims to identify deserving students early on and provide robust financial aid alongside academic and personal accountability support.
                  </p>

                  <div className="space-y-3.5 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Targeted Financial Aid:</strong> Fully or partially cover coaching, textbooks, or institutional tuition.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Structured Mentorship:</strong> Direct connect with senior students, engineers, doctors, and professionals.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-[15px] text-muted-foreground"><strong className="text-slate-800 dark:text-white font-semibold">Empowered Careers:</strong> Remove the mental stress of finances to allow candidates to thrive fully.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                  <p className="text-xs md:text-sm font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-widest">
                    Milestone Scholarship Initiative
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 relative z-10 bg-slate-50/50 dark:bg-navy/10 border-y border-slate-150 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                How We Operate
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Core <span className="text-accent">Values</span>
              </h2>
              <p className="mt-4 text-[15px] md:text-base text-muted-foreground">
                These principles guide every scholarship awarded, every mentorship session held, and every long-term strategy we deploy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => {
              const IconComponent = val.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative h-full rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-white/10 p-6 flex flex-col hover:border-accent/40 dark:hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-card-hover overflow-hidden">
                    {/* Top gradient highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`h-12 w-12 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-150 dark:border-white/10 flex items-center justify-center mb-5 ${val.iconColor} group-hover:bg-accent group-hover:text-white group-hover:shadow-md group-hover:shadow-accent/10 transition-all duration-300`}>
                      <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mb-2.5">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed flex-1">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scholar Journey Roadmap ("From Dream to Reality") */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                The Scholar Lifecycle
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                From Dream to <span className="gradient-text-gold">Reality</span>
              </h2>
              <p className="mt-4 text-[15px] md:text-base text-muted-foreground">
                We don&apos;t just award checks. We build structural support steps to transition promising minds into successful professionals.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps Timeline Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line for Large Screens */}
            <div className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-white/10 z-0">
              <div className="h-full bg-gradient-to-r from-accent via-accent-light to-transparent w-full" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {journeySteps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.15} className="flex flex-col h-full">
                  {/* Step Header (Desktop: centered circle & title, Mobile: inline) */}
                  <div className="flex flex-col items-center text-center lg:mb-6">
                    {/* Desktop Circle */}
                    <div className="hidden lg:flex h-10 w-10 rounded-full bg-white dark:bg-[#12141C] border-2 border-accent items-center justify-center text-sm font-heading font-extrabold text-accent shadow-[0_0_12px_rgba(163,120,44,0.25)] z-10 relative mb-3">
                      {step.step}
                    </div>
                    {/* Desktop Title */}
                    <h3 className="hidden lg:block font-heading font-extrabold text-base text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    {/* Mobile Header Layout */}
                    <div className="flex items-center gap-4 mb-4 lg:hidden w-full">
                      <div className="h-10 w-10 rounded-full bg-accent/10 dark:bg-accent/20 border border-accent/30 flex items-center justify-center text-sm font-heading font-extrabold text-accent shadow-[0_0_12px_rgba(163,120,44,0.15)] shrink-0">
                        {step.step}
                      </div>
                      <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="flex flex-col flex-grow bg-white dark:bg-card/30 border border-slate-150 dark:border-white/5 p-6 rounded-2xl hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 hover:shadow-premium text-left">
                    <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 pb-24 relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative glass rounded-3xl p-8 md:p-12 text-center border border-slate-200 dark:border-white/10 shadow-premium overflow-hidden">
              {/* Background gradient flares */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/20 mb-6">
                <Sparkles className="h-3 w-3" />
                Let&apos;s Build the Future
              </span>

              <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                Be Part of Our Mission
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
                Whether you are a deserving student looking for support, or a volunteer wishing to offer guidance, your contribution counts.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gradient-gold text-slate-950 font-bold rounded-xl px-8 h-11 shadow-gold hover:opacity-95 transition-all text-sm group"
                  >
                    Apply for Scholarship
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl px-8 h-11 text-sm border-slate-200 hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                  >
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
