"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Building2, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

const partnerInstitutes = [
  { name: "AIIMS New Delhi", categoryKey: "medical", defaultCat: "Medical Sciences" },
  { name: "IIT Bombay", categoryKey: "tech", defaultCat: "Engineering & Tech" },
  { name: "National Law University", categoryKey: "law", defaultCat: "Legal Studies" },
  { name: "Symbiosis Institute", categoryKey: "management", defaultCat: "Management & MBA" },
  { name: "IISc Bangalore", categoryKey: "research", defaultCat: "Research & Science" },
  { name: "Delhi University", categoryKey: "arts", defaultCat: "Arts & Humanities" },
  { name: "JIPMER Puducherry", categoryKey: "medical", defaultCat: "Medical Research" },
  { name: "BITS Pilani", categoryKey: "tech", defaultCat: "Technology" },
];

export function PartnerMarquee() {
  const { t } = useLocale();

  return (
    <section className="py-12 relative overflow-hidden bg-card/40 dark:bg-[#080d1a]/80 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t("marquee.badge", "Trusted Ecosystem")}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-primary dark:text-white mt-2">
              {t(
                "marquee.headline",
                "Partnered with 1,750+ Top Universities & Educational Institutions Across India"
              )}
            </h3>
          </div>
        </ScrollReveal>

        {/* Marquee Grid Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {partnerInstitutes.map((inst, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-card dark:bg-[#0f172a] border border-border/60 text-center hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center"
            >
              <Building2 className="w-5 h-5 text-accent mb-1.5 opacity-80" />
              <span className="text-xs font-bold text-primary dark:text-white line-clamp-1">
                {inst.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5">
                {inst.defaultCat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
