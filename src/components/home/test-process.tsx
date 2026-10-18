"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipProcessSteps } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

export function TestProcess() {
  const { t } = useLocale();

  return (
    <section className="py-20 md:py-28 relative" id="test-process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={t("homeProcess.badge", "How It Works")}
            title={
              <>
                {t("homeProcess.titlePart1", "Scholarship")}{" "}
                <span className="text-accent">{t("homeProcess.titlePart2", "Process")}</span>
              </>
            }
            subtitle={t(
              "homeProcess.subtitle",
              "A simple 6-step process to apply, qualify, and access scholarship benefits under the Milestone Scholarship Program."
            )}
          />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8 md:space-y-12">
            {scholarshipProcessSteps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              const stepTitle = t(`processStepsList.${i}.title`, step.title);
              const stepDesc = t(`processStepsList.${i}.desc`, step.description);

              return (
                <ScrollReveal key={i} delay={i * 0.15} direction={isEven ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="group bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-premium hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-500" />
                        
                        <div className="flex items-start md:items-center gap-4 mb-5 relative z-10">
                          <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300 shrink-0">
                            <Icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                          </div>
                          <div>
                            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider mb-1 block">
                              {t("homeProcess.stepPrefix", "Step")} {step.step}
                            </span>
                            <h3 className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-lg md:text-xl group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                              {stepTitle}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line relative z-10">
                          {stepDesc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-accent shadow-sm z-10 mt-6 md:mt-0">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
