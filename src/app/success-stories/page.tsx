import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SuccessStoriesGrid } from "@/components/scholarships/success-stories-grid";

export const metadata: Metadata = {
  title: "Success Stories | Milestone Scholars",
  description: "Read real stories from Milestone scholars who transformed their lives through our scholarship program.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f9] dark:bg-[#030712]">
      {/* Golden Trophy Hero Section Banner */}
      <section className="relative h-[240px] md:h-[320px] flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/scholars/trophy_banner.png')` }}
        />
        {/* Darkening & Warm Golden Overlay */}
        <div className="absolute inset-0 bg-slate-950/45 dark:bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f0f4f9] dark:to-[#030712]" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              Scholar Success Stories
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-100/90 font-medium max-w-xl mx-auto drop-shadow-sm">
              Real stories from real students whose academic and professional lives were transformed through our scholarship ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scholars Grid Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SuccessStoriesGrid />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
