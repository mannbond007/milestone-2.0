import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredCourses } from "@/constants/home-data";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { CoursesFilterGrid } from "@/components/courses/courses-filter-grid";
import { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Courses Covered",
  description: "Explore courses covered by the Milestone Scholarship Program including MBBS, B.Tech, Law, Nursing, Pharmacy, BBA, and more.",
};

const featuredCardSettings = [
  { 
    id: "mbbs", 
    abbr: "MBBS", 
    colSpan: "col-span-1 lg:col-span-2", 
    theme: "#EF4444", 
    bgGlow: "rgba(239,68,68,0.04)",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "btech", 
    abbr: "TECH", 
    colSpan: "col-span-1 lg:col-span-1", 
    theme: "#3B82F6", 
    bgGlow: "rgba(59,130,246,0.04)",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "law", 
    abbr: "LAW", 
    colSpan: "col-span-1 lg:col-span-1", 
    theme: "#D97706", 
    bgGlow: "rgba(217,119,6,0.04)",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "nursing", 
    abbr: "CARE", 
    colSpan: "col-span-1 lg:col-span-2", 
    theme: "#14B8A6", 
    bgGlow: "rgba(20,184,166,0.04)",
    image: "https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "pharmacy", 
    abbr: "PHAR", 
    colSpan: "col-span-1 lg:col-span-1", 
    theme: "#6366F1", 
    bgGlow: "rgba(99,102,241,0.04)",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: "bba", 
    abbr: "BBA", 
    colSpan: "col-span-1 lg:col-span-1", 
    theme: "#8B5CF6", 
    bgGlow: "rgba(139,92,246,0.04)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-16">
      {/* Premium Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-zinc-950/20 border-b border-slate-100 dark:border-white/[0.03]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid opacity-[0.6] pointer-events-none" />
        
        {/* Floating radial glow backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
        <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Course Directories"
              title={<>Supported <span className="gradient-text-gold">Academic Streams</span></>}
              subtitle="India's leading scholarship ecosystem providing equal financial access and mentoring to students across high-impact medical, tech, law, and business paths."
            />
          </ScrollReveal>

          {/* Quick Stats Bar */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl mx-auto mt-10 grid grid-cols-3 gap-6 p-5 rounded-3xl bg-white/60 dark:bg-white/[0.015] border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-md shadow-premium">
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-black font-heading text-slate-900 dark:text-white">16</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider mt-1.5">Fields Covered</span>
              </div>
              <div className="text-center border-x border-slate-100 dark:border-white/[0.04]">
                <span className="text-2xl md:text-3xl font-black font-heading text-slate-900 dark:text-white">₹5L</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider mt-1.5">Max Grant Limit</span>
              </div>
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-black font-heading text-slate-900 dark:text-white">100%</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider mt-1.5">Verified Partners</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent/80 bg-accent/5 px-2.5 py-1 rounded-md border border-accent/15">
                Merit Paths
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                Featured Programs
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
                Explore our high-impact programs, covering tuition fees and coaching fees for deserving candidates.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, i) => {
              const config = featuredCardSettings.find(c => c.id === course.id) || { abbr: "DEG", colSpan: "col-span-1", theme: "#E5AA36", bgGlow: "rgba(229,170,54,0.04)", image: "" };

              return (
                <ScrollReveal key={course.id} delay={i * 0.05}>
                  <div 
                    className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between ${config.colSpan} ${
                      course.id === "mbbs" || course.id === "btech"
                        ? "bg-white/80 dark:bg-white/[0.03] border-accent/25 dark:border-accent/15 hover:border-accent/50"
                        : "bg-white/50 dark:bg-white/[0.015] border-slate-200/50 dark:border-white/[0.04] hover:border-[var(--card-accent-border)]"
                    }`}
                    style={{
                      '--card-accent': config.theme,
                      '--card-accent-bg': `${config.theme}10`,
                      '--card-accent-border': `${config.theme}35`,
                      '--card-accent-glow': config.bgGlow,
                    } as CSSProperties}
                  >
                    {/* Top Image Section */}
                    <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-slate-100 dark:bg-zinc-900 rounded-t-[27px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={config.image} 
                        alt={course.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Absolute duration tag */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[9px] font-bold text-white bg-slate-955/85 dark:bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      
                      {/* Background typographic outline code overlay on image */}
                      <span className="font-heading font-black text-4xl absolute left-4 bottom-3 opacity-25 text-white select-none pointer-events-none tracking-tighter">
                        {config.abbr}
                      </span>
                    </div>

                    {/* Content Details Area */}
                    <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        {/* Title and Featured Pill */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <h4 className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-base group-hover:text-[var(--card-accent)] transition-colors duration-300">
                            {course.title}
                          </h4>
                          <span className="shrink-0 inline-flex items-center gap-1 bg-accent/10 dark:bg-accent/15 border border-accent/25 px-2 py-0.5 rounded-md text-[9px] font-extrabold text-accent uppercase tracking-wider shadow-sm">
                            <Sparkles className="h-2 w-2 text-accent animate-pulse" />
                            Featured
                          </span>
                        </div>
                        
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                          {course.description}
                        </p>

                        {/* Specs columns */}
                        <div className="grid grid-cols-2 gap-4 py-3.5 border-y border-slate-100 dark:border-white/[0.04] mb-5">
                          <div>
                            <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block">Grant Limit</span>
                            <span className="font-extrabold text-accent text-sm block mt-0.5">{course.scholarshipAmount}</span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block">Academic Path</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-350 text-xs block mt-0.5">Professional Degree</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button matching screenshot layout */}
                      <Link href="/sign-up" className="w-full block mt-1">
                        <button 
                          className="w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm
                          bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-slate-100"
                        >
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Explorer Grid Section */}
      <section className="py-20 md:py-24 border-t border-slate-100 dark:border-white/[0.03] bg-slate-50/20 dark:bg-white/[0.005]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CoursesFilterGrid />
        </div>
      </section>
    </div>
  );
}
