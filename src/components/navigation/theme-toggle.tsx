"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-full border border-border bg-card opacity-0",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      id="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={t("theme.toggle", "Toggle theme")}
      title={isDark ? t("theme.light", "Light Mode") : t("theme.dark", "Dark Mode")}
      className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer",
        "border border-border bg-card hover:bg-muted/60 text-foreground",
        "focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-xs",
        className
      )}
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-accent transition-transform duration-200" aria-hidden="true" />
      ) : (
        <Sun className="w-4 h-4 text-accent transition-transform duration-200" aria-hidden="true" />
      )}
      <span className="sr-only">{t("theme.toggle", "Toggle theme")}</span>
    </button>
  );
}
