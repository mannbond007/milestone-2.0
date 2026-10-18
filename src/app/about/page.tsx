import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Eye, Heart, Target, Users, Award, Compass, Lightbulb, BookOpen, Zap, Palette, Puzzle, Sparkles, GraduationCap, Laptop, Globe, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About Program",
  description: "Learn about the Milestone Scholarship Program — our mission, vision, and commitment to empowering students across India.",
};

const values = [
  { icon: Shield, title: "Trust & Transparency", description: "Every scholarship decision is made with complete transparency and fairness." },
  { icon: Eye, title: "Equal Opportunity", description: "We believe every student deserves access to quality education regardless of background." },
  { icon: Heart, title: "Student-First", description: "Our programs are designed with students at the center of every decision." },
  { icon: Target, title: "Excellence", description: "We set high standards and help students achieve academic and professional excellence." },
  { icon: Users, title: "Community", description: "Building a nationwide community of scholars who support and uplift each other." },
  { icon: Award, title: "Impact", description: "Measuring success by the real-world impact we create in students' lives." },
];

const milestones = [
  { year: "2018", title: "Foundation Year", description: "Milestone Scholarship Program was established with a vision to democratize education.", icon: Compass },
  { year: "2019", title: "First Cohort", description: "500+ students received scholarships in our inaugural year across 5 states.", icon: GraduationCap },
  { year: "2020", title: "Digital Expansion", description: "Launched online scholarship tests and digital application portal.", icon: Laptop },
  { year: "2021", title: "National Reach", description: "Expanded operations to 15+ states with 2,000+ scholars.", icon: Globe },
  { year: "2023", title: "Mentorship Launch", description: "Introduced mentorship programs with 100+ industry professionals.", icon: Users },
  { year: "2025", title: "15,000+ Scholars", description: "Crossed the milestone of supporting 15,000+ students nationwide.", icon: Trophy },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden border-b border-border/30 bg-gradient-to-b from-transparent to-background/50">
        {/* Background elements for premium aesthetic */}
        <div className="absolute inset-0 bg-grid opacity-[0.6] dark:opacity-[0.4] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none z-0" />
        
        {/* Glowing light beams/orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/25 dark:bg-accent/15 rounded-full blur-[130px] pointer-events-none animate-pulse-soft z-0" />
        <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none animate-float-slow z-0" />
        
        {/* Animated Background SVG Line */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0">
          <svg className="w-full h-full min-h-[500px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A3782C" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4A84A" stopOpacity="1" />
                <stop offset="100%" stopColor="#A3782C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-100 200 C300 120, 400 380, 800 280 C1200 180, 1400 350, 2000 220"
              fill="none"
              stroke="url(#glowGrad)"
              strokeWidth="1.5"
              className="animate-[pulse_3s_ease-in-out_infinite]"
            />
            <path
              d="M-50 250 C400 180, 500 420, 900 320 C1300 220, 1500 400, 2100 270"
              fill="none"
              stroke="url(#glowGrad)"
              strokeWidth="0.75"
              strokeDasharray="4 8"
              className="opacity-70"
            />
          </svg>
        </div>

        {/* Subtle Background Watermarks */}
        <div className="absolute left-[8%] top-[15%] opacity-[0.08] dark:opacity-[0.04] pointer-events-none animate-float-slow hidden lg:block z-0">
          <Sparkles className="h-20 w-20 text-accent" />
        </div>
        <div className="absolute right-[8%] top-[30%] opacity-[0.08] dark:opacity-[0.04] pointer-events-none animate-float hidden lg:block z-0">
          <Compass className="h-24 w-24 text-primary dark:text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <ScrollReveal>
            <SectionHeader
              badge="ABOUT US"
              title={
                <>
                  Building India&apos;s <span className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 bg-[length:200%_auto] bg-clip-text text-transparent font-extrabold tracking-tight animate-gradient">Most Trusted</span>
                  <br className="hidden sm:block" /> Scholarship Ecosystem
                </>
              }
              subtitle="Since 2018, we've been committed to breaking financial barriers in education and empowering the next generation of leaders, doctors, engineers, and changemakers."
              className="mb-8 md:mb-10"
            />
          </ScrollReveal>

          {/* Visual Metrics Showcase Board */}
          <ScrollReveal delay={0.15}>
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="bg-white/40 dark:bg-card/45 backdrop-blur-xl border border-border/40 rounded-3xl p-8 md:p-10 shadow-premium overflow-hidden relative group hover:border-accent/30 transition-all duration-500">
                {/* Background glows inside the card */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/40 text-center">
                  {/* Metric 1 */}
                  <div className="px-4 py-2 flex flex-col justify-center items-center">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-2.5">Our Reach</span>
                    <h3 className="text-4xl md:text-5xl font-black font-heading text-primary dark:text-white mb-2 leading-none">15,000+</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">Deserving scholars supported across India</p>
                    
                    {/* Scholar Avatars mockup */}
                    <div className="flex items-center -space-x-2 mt-5">
                      <div className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-slate-200 overflow-hidden shadow-sm">
                        <img src="/scholars/gauri_pa.png" alt="Gauri" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-slate-200 overflow-hidden shadow-sm">
                        <img src="/scholars/giridev.png" alt="Giridev" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-slate-200 overflow-hidden shadow-sm">
                        <img src="/scholars/kiran_k.png" alt="Kiran" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-slate-200 overflow-hidden shadow-sm">
                        <img src="/scholars/rahul.png" alt="Rahul" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-accent text-white text-[10px] font-black flex items-center justify-center shadow-sm">
                        +15k
                      </div>
                    </div>
                  </div>
                  
                  {/* Metric 2 */}
                  <div className="px-4 py-2 flex flex-col justify-center items-center">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-2.5">Mentorship Network</span>
                    <h3 className="text-4xl md:text-5xl font-black font-heading text-primary dark:text-white mb-2 leading-none">100+</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">Industry experts & counseling partners</p>
                    <div className="flex gap-2 mt-5 text-[11px] font-bold text-accent bg-accent/10 dark:bg-accent/20 px-3.5 py-1 rounded-full border border-accent/20 shadow-sm">
                      Google • IITs • AIIMS
                    </div>
                  </div>
                  
                  {/* Metric 3 */}
                  <div className="px-4 py-2 flex flex-col justify-center items-center">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-2.5">National Presence</span>
                    <h3 className="text-4xl md:text-5xl font-black font-heading text-primary dark:text-white mb-2 leading-none">15+</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">States covered with local support hubs</p>
                    <div className="flex items-center gap-1.5 mt-5 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Expansion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative group overflow-hidden bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-8 md:p-10 flex flex-col justify-between shadow-premium hover:shadow-card-hover hover:border-accent/30 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 h-full">
                {/* Decorative glows inside the card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
                
                {/* Watermark Icon */}
                <Compass className="absolute -bottom-8 -right-8 h-40 w-40 text-accent/[0.04] dark:text-accent/[0.02] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500 shrink-0">
                      <Compass className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/20">Our Mission</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-primary dark:text-white mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    Empowering Dreams Beyond Financial Limits
                  </h3>
                  
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-base">
                    <p className="font-medium text-slate-800 dark:text-slate-200 border-l-3 border-accent pl-4 py-1 bg-accent/[0.02] dark:bg-accent/[0.01]">
                      Our mission is to identify, support, and empower deserving and talented students from every background — whether they belong to rural areas, towns, or cities, and whether they are financially weak or financially stable but in need of proper guidance, mentorship, and opportunities.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Through the Milestone Scholarship Program, we aim to provide scholarships, rewards, mentorship, career counseling, academic support, skill development, and opportunity-driven initiatives that help students move confidently toward their goals.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Our mission is not only to reduce financial barriers in education, but also to bridge the gap between students and the right direction, awareness, mentorship, and opportunities required for success.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      We strive to create an ecosystem where every student receives equal encouragement, recognition, and support based on talent, dedication, and potential.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative group overflow-hidden bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-8 md:p-10 flex flex-col justify-between shadow-premium hover:shadow-card-hover hover:border-accent/30 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 h-full">
                {/* Decorative glows inside the card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
                
                {/* Watermark Icon */}
                <Lightbulb className="absolute -bottom-8 -right-8 h-40 w-40 text-accent/[0.04] dark:text-accent/[0.02] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500 shrink-0">
                      <Lightbulb className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/20">Our Vision</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-primary dark:text-white mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    A Future Where Talent Wins Over Privilege
                  </h3>
                  
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-base">
                    <p className="font-medium text-slate-800 dark:text-slate-200 border-l-3 border-accent pl-4 py-1 bg-accent/[0.02] dark:bg-accent/[0.01]">
                      Our vision is to build a future where every student — whether from a village, town, or city — gets equal access to quality education, guidance, mentorship, and opportunities needed to achieve their dreams.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Milestone Scholarship Program is not limited only to financially weak students. While we strongly support students from rural, underserved, and economically challenged backgrounds, we also believe that many talented students, regardless of their financial condition, need the right mentorship, direction, motivation, and opportunities to unlock their true potential.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Through scholarships, rewards, educational support, mentorship, career guidance, and opportunity-based initiatives, we aim to empower all deserving and talented students without discrimination. Our goal is to ensure that no student is held back due to lack of financial support, proper guidance, awareness, or opportunity.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      We envision creating future doctors, professionals, innovators, leaders, and responsible citizens whose success is defined by talent, hard work, determination, and the opportunities they receive — not by their background, location, or financial status.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why We Started / Feature Section */}
      <section className="py-20 md:py-24 bg-muted/10 dark:bg-navy/10 relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="About our program"
              subtitle="A complete ecosystem of support — each component crafted with intention, guidance and care."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mt-6">
            {/* Left: Image */}
            <ScrollReveal className="md:col-span-6 lg:col-span-6" direction="left">
              <div className="relative group overflow-hidden rounded-3xl border border-border/50 shadow-premium aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  src="/about-workspace.png"
                  alt="Minimalist productive workspace representing student focus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </ScrollReveal>

            {/* Right: Features */}
            <ScrollReveal className="md:col-span-6 lg:col-span-6 space-y-8" direction="right" delay={0.1}>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-3">
                  Our Latest features
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                  Empower Students Without the Financial Overhead — Structured, scalable, and scholar-friendly support systems.
                </p>
              </div>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] dark:bg-navy-light border border-[#E0E7FF] dark:border-border/50 shadow-sm">
                    <Zap className="h-5 w-5 text-amber-500 fill-amber-500/20" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-primary dark:text-white text-lg leading-snug">
                      Lightning-Fast Support
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground mt-0.5 leading-relaxed">
                      Simple application setup — quick reviews and rapid scholarship disbursals.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] dark:bg-navy-light border border-[#E0E7FF] dark:border-border/50 shadow-sm">
                    <Palette className="h-5 w-5 text-violet-500 fill-violet-500/20" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-primary dark:text-white text-lg leading-snug">
                      1-on-1 Expert Mentorship
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground mt-0.5 leading-relaxed">
                      Connect directly with established doctors, engineers, and counselors.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] dark:bg-navy-light border border-[#E0E7FF] dark:border-border/50 shadow-sm">
                    <Puzzle className="h-5 w-5 text-emerald-500 fill-emerald-500/20" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-primary dark:text-white text-lg leading-snug">
                      All-in-One Career Ecosystem
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground mt-0.5 leading-relaxed">
                      Access specialized preparatory tests, learning resources, and counseling.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Our Values" title="What We Stand For" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover hover:border-accent/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-xl mb-3">{val.title}</h3>
                    <p className="text-base text-muted-foreground leading-loose">{val.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Our Journey" title="Milestones Along The Way" className="mb-16" />
          </ScrollReveal>
          
          <div className="relative">
            {/* Gradient Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/80 via-accent/40 to-transparent -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((item, i) => {
                const isEven = i % 2 === 0;
                const Icon = item.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.1} direction={isEven ? "left" : "right"}>
                    <div className="relative flex items-start w-full group">
                      
                      {/* Timeline Card */}
                      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                        <div className="bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-6 md:p-8 hover:border-accent/30 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 shadow-sm relative overflow-hidden group">
                          {/* Corner hover glow */}
                          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                          
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-accent/10 text-accent border border-accent/20 tracking-wider mb-4">
                            {item.year}
                          </span>
                          <h3 className="font-heading font-extrabold text-primary dark:text-white text-lg md:text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Center Dot / Icon */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-accent shadow-md transition-all duration-300 group-hover:scale-115 group-hover:bg-accent group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30">
                        <Icon className="h-5 w-5 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
