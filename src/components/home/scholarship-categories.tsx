"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipCategories } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

export function ScholarshipCategories() {
  const { t } = useLocale();

  return (
    <section className="py-14 md:py-20 relative overflow-hidden" id="scholarship-categories">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge={t("homeCategories.badge", "Scholarship Programs")}
            title={
              <>
                {t("homeCategories.titlePart1", "Explore Our")}{" "}
                <span className="text-accent">{t("homeCategories.titlePart2", "Scholarships")}</span>
              </>
            }
            subtitle={t(
              "homeCategories.subtitle",
              "Choose from 100+ Scholarship categories across Medical, Engineering, Law, Arts and many more."
            )}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {scholarshipCategories.map((cat, i) => {
            const Icon = cat.icon;
            const title = t(`categoriesList.${cat.id}.title`, cat.title);
            const desc = t(`categoriesList.${cat.id}.desc`, cat.description);
            const amount = t(`categoriesList.${cat.id}.amount`, cat.amount);

            return (
              <ScrollReveal key={cat.id} delay={i * 0.05}>
                <Link href={`/scholarships#${cat.id}`} className="block h-full group">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="relative bg-white/60 dark:bg-transparent dark:bg-gradient-to-b dark:from-[#1E2433]/70 dark:to-[#141926]/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/5 rounded-3xl p-6 h-full cursor-pointer overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-[0_20px_40px_rgba(200,205,215,0.25)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between"
                  >
                    {/* Radial background glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 10% 10%, ${cat.color}0e, transparent 65%)`
                      }}
                    />

                    {/* Accent glow line at top */}
                    <div
                      className="absolute top-0 inset-x-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-current to-transparent"
                      style={{ color: cat.color }}
                    />

                    <div>
                      {/* Icon container */}
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 mb-5 relative"
                        style={{
                          background: `linear-gradient(135deg, ${cat.color}18, ${cat.color}05)`,
                          border: `1px solid ${cat.color}25`
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: cat.color }} />
                        {/* Soft glow behind the icon */}
                        <div
                          className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
                          style={{ backgroundColor: cat.color }}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-base mb-2 group-hover:text-accent transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-muted-foreground/85 leading-relaxed line-clamp-2 mb-6">
                        {desc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/[0.04] relative z-10">
                      <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/5 px-2.5 py-1 rounded-lg border border-accent/10 group-hover:bg-accent/10 transition-colors duration-300">
                        {amount}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
            >
              {t("homeCategories.viewAll", "View All Scholarships")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
