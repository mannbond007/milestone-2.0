import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipCategories } from "@/constants/home-data";
import { ArrowRight, Sparkles, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeetJeeDetails } from "@/components/scholarships/neet-jee-details";
import { FutureFoundationDetails } from "@/components/scholarships/future-foundation-details";
import { MbbsDetails } from "@/components/scholarships/mbbs-details";

export const metadata: Metadata = {
  title: "Scholarships",
  description: "Explore 16+ scholarship categories including MBBS, B.Tech, Law, Nursing, and more at Milestone Scholarship Program.",
};

export default function ScholarshipsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="All Scholarships"
              title="Find Your Perfect Scholarship"
              subtitle="Opportunities across every Career Stream"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {scholarshipCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 0.04}>
                  <div
                    id={cat.id}
                    className={`group rounded-3xl border p-7 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden ${
                      cat.id === "mbbs"
                        ? "bg-card/40 backdrop-blur-xl border-accent/40 shadow-[0_8px_40px_-12px_rgba(229,170,54,0.2)] hover:shadow-[0_16px_60px_-15px_rgba(229,170,54,0.3)] hover:border-accent/80 hover:-translate-y-1 z-10"
                        : "bg-card border-border/50 hover:shadow-card-hover hover:border-accent/20"
                    }`}
                  >
                    {/* Modern premium lighting effects for MBBS */}
                    {cat.id === "mbbs" && (
                      <>
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-accent/15 blur-[60px] z-0 pointer-events-none transition-all duration-700 group-hover:bg-accent/25 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-56 w-56 rounded-full bg-accent/10 blur-[50px] z-0 pointer-events-none transition-all duration-700 group-hover:bg-accent/20" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-50" />
                      </>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${cat.id === 'mbbs' ? 'bg-gradient-to-br from-accent/20 to-accent/5 shadow-inner' : ''}`} style={cat.id !== 'mbbs' ? { backgroundColor: `${cat.color}15` } : {}}>
                          <Icon className="h-7 w-7" style={{ color: cat.color }} />
                        </div>
                        {cat.id === "mbbs" && (
                          <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 px-3.5 py-1.5 border border-accent/20 backdrop-blur-md shadow-sm">
                            <HeartPulse className="h-3.5 w-3.5 text-accent animate-pulse" />
                            <span className="text-[11px] font-bold text-accent uppercase tracking-widest whitespace-nowrap">Future Doctor</span>
                          </div>
                        )}
                      </div>
                      <h3 className={`font-heading font-extrabold tracking-tight mb-2.5 ${cat.id === 'mbbs' ? 'text-xl text-primary dark:text-white' : 'text-lg text-primary dark:text-white'}`}>{cat.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-5 flex-1">{cat.description}</p>
                    </div>

                    <div className="relative z-10">
                      <div className="space-y-2 pt-4 border-t border-border/50">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Scholarship</span>
                          <span className="font-semibold text-accent">{cat.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Eligibility</span>
                          <span className="text-foreground text-xs text-right max-w-[60%]">{cat.eligibility}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Link href="/sign-up" className="w-full">
                          <Button size="sm" className="w-full gradient-gold text-white rounded-xl shadow-gold hover:opacity-90 group/btn">
                            Apply Now
                            <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        {(cat.id === "neet" || cat.id === "iit-jee") && (
                          <Link href="#neet-jee-program" className="w-full">
                            <Button size="sm" variant="outline" className="w-full rounded-xl border-accent/20 text-accent hover:bg-accent/5 dark:border-white/10 dark:hover:bg-white/5 transition-all text-xs font-semibold">
                              View Detailed Structure
                            </Button>
                          </Link>
                        )}
                        {cat.id === "mbbs" && (
                          <Link href="#mbbs-program" className="w-full">
                            <Button size="sm" variant="outline" className="w-full rounded-xl border-accent/20 text-accent hover:bg-accent/5 dark:border-white/10 dark:hover:bg-white/5 transition-all text-xs font-semibold">
                              View Detailed Structure
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <MbbsDetails />
      <NeetJeeDetails />
      <FutureFoundationDetails />
    </div>
  );
}
