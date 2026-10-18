"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  User,
  LayoutDashboard,
} from "lucide-react";
import { BrandLogo } from "@/components/navigation/brand-logo";
import { LanguageSelector } from "@/components/navigation/language-selector";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { navigationItems, type NavItem } from "@/constants/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import { Show, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileAccordions, setExpandedMobileAccordions] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const { t } = useLocale();
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle ESC key for mobile drawer and dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (key: string) => {
    setExpandedMobileAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <header
        ref={navRef}
        id="main-navbar"
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          "border-b",
          scrolled
            ? "bg-white/95 dark:bg-[#0B1211]/95 backdrop-blur-md border-[#DDE4E1] dark:border-[#2A3934] shadow-xs"
            : "bg-white dark:bg-[#0B1211] border-[#DDE4E1] dark:border-[#2A3934]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 gap-4">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <BrandLogo variant="navbar" />
            </div>

            {/* Center: Desktop Navigation Links & Dropdowns */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isDropdownOpen = activeDropdown === item.key;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      id={`nav-link-${item.key}`}
                      className={cn(
                        "relative px-3 py-2 text-sm font-medium rounded-md transition-colors select-none",
                        isActive
                          ? "text-[#173B35] dark:text-[#59B892] font-semibold"
                          : "text-[#17201D]/80 dark:text-[#F1F5F3]/80 hover:text-[#173B35] dark:hover:text-[#59B892] hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      <span>{t(`nav.${item.key}`, item.label)}</span>
                      {isActive && (
                        <span
                          className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#3C8D72] dark:bg-[#59B892]"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      id={`nav-dropdown-btn-${item.key}`}
                      onClick={() =>
                        setActiveDropdown(isDropdownOpen ? null : item.key)
                      }
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={cn(
                        "relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors select-none cursor-pointer",
                        isActive || isDropdownOpen
                          ? "text-[#173B35] dark:text-[#59B892] font-semibold"
                          : "text-[#17201D]/80 dark:text-[#F1F5F3]/80 hover:text-[#173B35] dark:hover:text-[#59B892] hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      <span>{t(`nav.${item.key}`, item.label)}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
                          isDropdownOpen && "rotate-180 opacity-100"
                        )}
                        aria-hidden="true"
                      />
                      {isActive && (
                        <span
                          className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#3C8D72] dark:bg-[#59B892]"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {/* Desktop Dropdown Card */}
                    {isDropdownOpen && (
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        className={cn(
                          "absolute left-0 mt-1 w-72 rounded-xl p-1.5 z-50",
                          "bg-white dark:bg-[#17211E] text-[#17201D] dark:text-[#F1F5F3]",
                          "border border-[#DDE4E1] dark:border-[#2A3934] shadow-xl",
                          "animate-in fade-in slide-in-from-top-2 duration-150"
                        )}
                      >
                        <div className="space-y-0.5">
                          {item.dropdown?.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            const IconComponent = subItem.icon;
                            return (
                              <Link
                                key={subItem.key}
                                href={subItem.href}
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "group flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-xs transition-colors",
                                  isSubActive
                                    ? "bg-[#E8F2EE] dark:bg-[#1E3029] text-[#173B35] dark:text-[#59B892] font-semibold"
                                    : "hover:bg-[#EEF2F0] dark:hover:bg-[#1E3029]/70 text-[#17201D] dark:text-[#F1F5F3]"
                                )}
                              >
                                {IconComponent && (
                                  <IconComponent className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3C8D72] dark:text-[#59B892]" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-xs leading-tight group-hover:text-[#3C8D72] dark:group-hover:text-[#59B892] transition-colors">
                                    {t(`nav.${subItem.key}`, subItem.label)}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-[11px] text-[#66736E] dark:text-[#AAB8B1] line-clamp-1 mt-0.5">
                                      {t(`nav.${subItem.key}Desc`, subItem.description)}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: Controls (Language, Theme, Auth, Contact Us) */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Selector Pill */}
              <LanguageSelector />

              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Authentication Controls */}
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  id="nav-login-btn"
                  className={cn(
                    "h-9 px-3.5 inline-flex items-center text-xs font-semibold rounded-lg transition-colors",
                    "text-[#17201D] dark:text-[#F1F5F3] hover:text-[#3C8D72] dark:hover:text-[#59B892]",
                    "border border-transparent hover:border-border hover:bg-muted/50"
                  )}
                >
                  {t("nav.login", "Login")}
                </Link>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/dashboard"
                  id="nav-dashboard-link"
                  className={cn(
                    "h-9 px-3 inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg transition-colors",
                    "text-[#17201D] dark:text-[#F1F5F3] hover:text-[#3C8D72] dark:hover:text-[#59B892]",
                    "border border-border bg-card hover:bg-muted/50"
                  )}
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-accent" />
                  <span>{t("nav.dashboard", "Dashboard")}</span>
                </Link>
                <div className="flex items-center pl-1">
                  <UserButton />
                </div>
              </Show>

              {/* Contact Us CTA Button */}
              <Link
                href="/contact"
                id="nav-contact-btn"
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center text-xs font-semibold rounded-lg transition-all duration-150 select-none shadow-xs",
                  "bg-[#173B35] hover:bg-[#173B35]/90 text-white",
                  "dark:bg-[#59B892] dark:hover:bg-[#59B892]/90 dark:text-[#0F1715]",
                  "focus:outline-none focus:ring-2 focus:ring-accent/40"
                )}
              >
                {t("nav.contactUs", "Contact Us")}
              </Link>
            </div>

            {/* Mobile: Controls & Hamburger Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSelector />
              <ThemeToggle />
              <button
                type="button"
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={mobileOpen ? t("nav.closeMenu", "Close menu") : t("nav.openMenu", "Open menu")}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer",
                  "border border-border bg-card hover:bg-muted/50 text-foreground"
                )}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-foreground" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.mobileNavLabel", "Mobile Navigation")}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className={cn(
              "relative ml-auto w-full max-w-sm h-full flex flex-col",
              "bg-white dark:bg-[#0F1715] text-[#17201D] dark:text-[#F1F5F3]",
              "border-l border-[#DDE4E1] dark:border-[#2A3934] shadow-2xl",
              "animate-in slide-in-from-right duration-200"
            )}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <BrandLogo variant="mobile" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={t("nav.closeMenu", "Close navigation")}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Nav Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isExpanded = Boolean(expandedMobileAccordions[item.key]);

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#E8F2EE] dark:bg-[#1E3029] text-[#173B35] dark:text-[#59B892] font-semibold"
                          : "hover:bg-muted/50 text-foreground"
                      )}
                    >
                      <span>{t(`nav.${item.key}`, item.label)}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    </Link>
                  );
                }

                return (
                  <div key={item.key} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.key)}
                      aria-expanded={isExpanded}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                        isActive
                          ? "text-[#173B35] dark:text-[#59B892] font-semibold"
                          : "hover:bg-muted/50 text-foreground"
                      )}
                    >
                      <span>{t(`nav.${item.key}`, item.label)}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-muted-foreground",
                          isExpanded && "rotate-180 text-foreground"
                        )}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#DDE4E1] dark:border-[#2A3934] ml-3">
                        {item.dropdown?.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.key}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block px-3 py-2 rounded-md text-xs font-medium transition-colors",
                                isSubActive
                                  ? "bg-[#E8F2EE] dark:bg-[#1E3029] text-[#173B35] dark:text-[#59B892] font-semibold"
                                  : "text-[#66736E] dark:text-[#AAB8B1] hover:text-foreground hover:bg-muted/40"
                              )}
                            >
                              <div className="font-medium">
                                {t(`nav.${subItem.key}`, subItem.label)}
                              </div>
                              {subItem.description && (
                                <div className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                                  {t(`nav.${subItem.key}Desc`, subItem.description)}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-border space-y-2.5 bg-muted/20">
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "w-full h-10 inline-flex items-center justify-center text-sm font-semibold rounded-lg transition-colors",
                    "border border-border bg-card text-foreground hover:bg-muted/50"
                  )}
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>{t("nav.login", "Login")}</span>
                </Link>
              </Show>

              <Show when="signed-in">
                <div className="flex items-center justify-between p-2 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <UserButton />
                    <span className="text-xs font-medium">{t("nav.dashboard", "Dashboard")}</span>
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    {t("nav.open", "Open")}
                  </Link>
                </div>
              </Show>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "w-full h-10 inline-flex items-center justify-center text-sm font-semibold rounded-lg transition-all",
                  "bg-[#173B35] hover:bg-[#173B35]/90 text-white",
                  "dark:bg-[#59B892] dark:hover:bg-[#59B892]/90 dark:text-[#0F1715]"
                )}
              >
                {t("nav.contactUs", "Contact Us")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
