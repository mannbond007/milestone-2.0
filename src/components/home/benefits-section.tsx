"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { benefits } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

export function BenefitsSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 md:py-28 relative" id="benefits">
      <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
      
      {/* Premium Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/10 dark:bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={t("homeBenefits.badge", "Why Choose Us")}
            title={
              <>
                {t("homeBenefits.titlePart1", "Scholarship")}{" "}
                <span className="text-accent">{t("homeBenefits.titlePart2", "Benefits")}</span>
              </>
            }
            subtitle={t(
              "homeBenefits.subtitle",
              "More than financial support — a complete ecosystem for education, mentorship, career growth, and student success."
            )}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const title = t(`benefitsList.${i}.title`, benefit.title);
            const desc = t(`benefitsList.${i}.desc`, benefit.description);

            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative bg-white dark:bg-card/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:border-accent/40 dark:hover:border-accent/40 overflow-hidden z-10">
                  {/* Subtle top gradient highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 mb-6 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                    <Icon className="h-7 w-7 text-accent group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-lg md:text-xl mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                    {title}
                  </h3>
                  
                  <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
