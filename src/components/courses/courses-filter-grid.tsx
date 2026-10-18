"use client";

import { useState, useMemo, CSSProperties } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  X, 
  ArrowRight, 
  Sparkles,
  Stethoscope,
  Cpu,
  Briefcase,
  GraduationCap,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { scholarshipCategories } from "@/constants/home-data";

const STREAM_CATEGORIES = [
  { 
    id: "all", 
    label: "All Disciplines", 
    desc: "Explore all supported fields of study eligible for financial aid and academic mentoring.",
    icon: GraduationCap,
    gradient: "from-amber-500/10 via-amber-600/5 to-transparent dark:from-amber-500/10 dark:via-transparent dark:to-transparent",
    borderColor: "border-amber-500/20 dark:border-amber-500/15",
    color: "#B88A34",
    benefits: [
      "Mentorship from industry professionals",
      "Direct partnership admissions benefits",
      "Soft skills & language training access"
    ]
  },
  { 
    id: "healthcare", 
    label: "Medical & Healthcare", 
    desc: "Full support for medical professionals including MBBS, BAMS, Nursing, Pharmacy, and NEET coaching.",
    icon: Stethoscope,
    gradient: "from-rose-500/10 via-emerald-500/5 to-transparent dark:from-rose-500/10 dark:via-transparent dark:to-transparent",
    borderColor: "border-rose-500/20 dark:border-rose-500/15",
    color: "#EF4444",
    benefits: [
      "Mentorship from senior AIIMS professors",
      "Free access to online medical libraries",
      "Equipment grant allowance options"
    ]
  },
  { 
    id: "tech", 
    label: "Engineering & Tech", 
    desc: "Empowering developers and builders through engineering degrees, computer applications, and JEE coaching.",
    icon: Cpu,
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent dark:from-blue-500/10 dark:via-transparent dark:to-transparent",
    borderColor: "border-blue-500/20 dark:border-blue-500/15",
    color: "#3B82F6",
    benefits: [
      "IIT alumni coding mentorship panels",
      "Hackathon entry fees sponsorship",
      "Placement interview prep bootcamps"
    ]
  },
  { 
    id: "commerce", 
    label: "Business & Commerce", 
    desc: "Fostering entrepreneurial mindsets with scholarships for corporate management, accounting, and commerce.",
    icon: Briefcase,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent dark:from-purple-500/10 dark:via-transparent dark:to-transparent",
    borderColor: "border-purple-500/20 dark:border-purple-500/15",
    color: "#8B5CF6",
    benefits: [
      "Corporate network access & events",
      "CA / CFA online prep coaching aids",
      "Financial terminal training modules"
    ]
  },
  { 
    id: "arts-law", 
    label: "Arts, Law & Media", 
    desc: "Championing critical thinkers, legal advocates, agricultural scientists, designers, and storytellers.",
    icon: GraduationCap,
    gradient: "from-amber-500/10 via-rose-500/5 to-transparent dark:from-amber-500/10 dark:via-transparent dark:to-transparent",
    borderColor: "border-amber-500/20 dark:border-amber-500/15",
    color: "#F59E0B",
    benefits: [
      "CLAT mock test materials",
      "Design portfolio review panels",
      "Agricultural field trip travel grants"
    ]
  }
];

const categoryToStreamMap: Record<string, string> = {
  mbbs: "healthcare",
  bams: "healthcare",
  nursing: "healthcare",
  pharmacy: "healthcare",
  neet: "healthcare",
  btech: "tech",
  bca: "tech",
  bsc: "tech",
  "iit-jee": "tech",
  bba: "commerce",
  bcom: "commerce",
  ba: "arts-law",
  design: "arts-law",
  law: "arts-law",
  agriculture: "arts-law",
  journalism: "arts-law"
};

const categoryToAbbrMap: Record<string, string> = {
  mbbs: "MBBS",
  bams: "BAMS",
  btech: "BTECH",
  bba: "BBA",
  ba: "BA",
  bsc: "BSC",
  neet: "NEET",
  "iit-jee": "JEE",
  nursing: "CARE",
  pharmacy: "PHAR",
  agriculture: "AGRI",
  bca: "BCA",
  bcom: "BCOM",
  design: "DSGN",
  law: "LAW",
  journalism: "NEWS"
};

export function CoursesFilterGrid() {
  const [selectedStream, setSelectedStream] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamically calculate dynamic counts based on original data (unfiltered)
  const streamCounts = useMemo(() => {
    const counts: Record<string, number> = { all: scholarshipCategories.length };
    scholarshipCategories.forEach(cat => {
      const stream = categoryToStreamMap[cat.id] || "arts-law";
      counts[stream] = (counts[stream] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered categories based on selectedStream and searchQuery
  const filteredCategories = useMemo(() => {
    return scholarshipCategories.filter(cat => {
      const matchesStream = selectedStream === "all" || categoryToStreamMap[cat.id] === selectedStream;
      const matchesSearch = cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cat.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStream && matchesSearch;
    });
  }, [selectedStream, searchQuery]);

  // Find info about the currently active stream tab
  const activeStream = useMemo(() => {
    return STREAM_CATEGORIES.find(s => s.id === selectedStream) || STREAM_CATEGORIES[0];
  }, [selectedStream]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* LEFT COLUMN: Sticky Interactive Navigator (35% width on desktop) */}
      <div className="w-full lg:w-[35%] lg:sticky lg:top-28 space-y-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-accent/80 bg-accent/5 px-2.5 py-1 rounded-md border border-accent/15">
            Course Directory
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-900 dark:text-white mt-3 tracking-tight">
            Academic Fields
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Filter by academic stream to view scholarship limits, eligibility, and specialized programs.
          </p>
        </div>

        {/* Timeline Stream Selectors */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 border-b border-slate-100 dark:border-white/[0.04] lg:border-none">
          {STREAM_CATEGORIES.map((stream, idx) => {
            const count = streamCounts[stream.id] || 0;
            const isActive = selectedStream === stream.id;

            return (
              <button
                key={stream.id}
                onClick={() => setSelectedStream(stream.id)}
                className={`group relative w-full flex items-center justify-between gap-4 p-3 rounded-2xl transition-all duration-300 text-left cursor-pointer outline-none ${
                  isActive
                    ? "text-slate-900 dark:text-white bg-slate-100/50 dark:bg-white/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.01]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Timeline Indicator Node */}
                  <div className="relative hidden lg:flex flex-col items-center justify-center shrink-0">
                    <div 
                      className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? "bg-slate-900 dark:bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]" 
                          : "bg-transparent border-slate-300 dark:border-white/20 group-hover:border-slate-400"
                      }`}
                      style={isActive ? { borderColor: stream.color } : {}}
                    />
                    {idx < STREAM_CATEGORIES.length - 1 && (
                      <div className="absolute top-4 w-[1px] h-10 bg-slate-200 dark:bg-white/10" />
                    )}
                  </div>

                  <span className="text-xs font-bold font-heading tracking-tight">{stream.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all ${
                    isActive 
                      ? "bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white" 
                      : "bg-slate-100 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200"
                  }`}>
                    {count}
                  </span>
                  <ChevronRight className={`h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0 ${
                    isActive ? "text-slate-900 dark:text-white opacity-50" : ""
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stream Overview Card */}
        <div
          className={`relative overflow-hidden p-6 rounded-3xl border transition-all duration-500 backdrop-blur-md shadow-premium bg-gradient-to-br ${activeStream.gradient} ${activeStream.borderColor}`}
          style={{ '--stream-accent': activeStream.color } as CSSProperties}
        >
          {/* Accent vertical sidebar */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ backgroundColor: activeStream.color }}
          />

          <h3 className="font-heading font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span>{activeStream.label}</span>
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            {activeStream.desc}
          </p>

          {/* Dynamic Benefit Bullet List */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.04] space-y-2">
            <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Stream Benefits</span>
            <ul className="space-y-2 mt-1">
              {activeStream.benefits.map((benefit, bidx) => (
                <li key={bidx} className="flex items-start gap-2 text-[10px] text-slate-600 dark:text-slate-350">
                  <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.04]">
            <div>
              <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Disbursements</span>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                {selectedStream === "all" ? "Up to ₹5,00,000" : (selectedStream === "healthcare" ? "Up to ₹5,00,000" : (selectedStream === "tech" ? "Up to ₹4,00,000" : "Up to ₹3,00,000"))}
              </p>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Status</span>
              <p className="text-xs font-bold text-accent mt-0.5 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                Applications Open
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Bento Grid & Search Controls (65% width) */}
      <div className="w-full lg:w-[65%] space-y-6">
        {/* Search Controls */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search degrees, key qualifications or fields..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 text-xs rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] outline-none focus:border-slate-300 dark:focus:border-white/10 transition-all duration-300 shadow-[0_8px_30px_rgb(240,242,245,0.2)] dark:shadow-none focus:shadow-[0_8px_30px_rgb(240,242,245,0.4)] dark:focus:shadow-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Bento Grid */}
        {filteredCategories.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((cat) => {
                const Icon = cat.icon;
                const isHighImpact = ["mbbs", "btech", "neet", "iit-jee"].includes(cat.id);
                const streamLabel = STREAM_CATEGORIES.find(s => s.id === categoryToStreamMap[cat.id])?.label || "Others";
                const abbr = categoryToAbbrMap[cat.id] || "DEG";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    key={cat.id}
                    className={`group ${isHighImpact ? "col-span-1 sm:col-span-2" : "col-span-1"}`}
                  >
                    <Link href={`/scholarships#${cat.id}`} className="block h-full">
                      <div
                        className={`relative overflow-hidden h-full flex flex-col justify-between p-6 rounded-3xl border transition-all duration-500 backdrop-blur-md hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                          isHighImpact
                            ? "bg-white/80 dark:bg-white/[0.03] border-accent/25 dark:border-accent/15 hover:border-accent/50"
                            : "bg-white/50 dark:bg-white/[0.015] border-slate-200/50 dark:border-white/[0.04] hover:border-[var(--theme-color-hover-border)]"
                        }`}
                        style={{
                          '--theme-color': cat.color,
                          '--theme-color-bg': `${cat.color}10`,
                          '--theme-color-hover-border': `${cat.color}35`,
                          '--theme-color-glow': `${cat.color}06`,
                        } as CSSProperties}
                      >
                        {/* Huge outline background typographic label */}
                        <span className="font-heading font-black text-6xl sm:text-7xl absolute right-4 bottom-4 opacity-[0.03] dark:opacity-[0.01] tracking-tighter select-none pointer-events-none group-hover:scale-110 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.02] transition-all duration-700 text-slate-900 dark:text-white">
                          {abbr}
                        </span>

                        {/* Hover radial ambient glow backdrop */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 10% 10%, var(--theme-color-glow), transparent 75%)`
                          }}
                        />

                        {/* Top Accent Bar highlight */}
                        <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-[var(--theme-color)] to-transparent" />

                        <div className="relative z-10 flex-1 flex flex-col">
                          {/* Card Header row */}
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden"
                              style={{
                                background: `linear-gradient(135deg, var(--theme-color-bg), transparent)`,
                                border: `1px solid var(--theme-color-hover-border)`
                              }}
                            >
                              <Icon className="h-4.5 w-4.5 transition-transform duration-500 group-hover:scale-110" style={{ color: cat.color }} />
                            </div>

                            {isHighImpact ? (
                              <div className="flex items-center gap-1 bg-accent/10 dark:bg-accent/15 border border-accent/25 px-2 py-0.5 rounded-md backdrop-blur-md shadow-sm">
                                <Sparkles className="h-2.5 w-2.5 text-accent animate-pulse" />
                                <span className="text-[8px] font-bold text-accent uppercase tracking-widest">High Impact</span>
                              </div>
                            ) : (
                              <span className="text-[8px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100/60 dark:bg-white/[0.02] px-2 py-0.5 rounded-md border border-slate-200/40 dark:border-white/[0.04]">
                                {streamLabel}
                              </span>
                            )}
                          </div>

                          {/* Titles */}
                          <div className="mb-4 pr-10">
                            <h4 className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-base group-hover:text-[var(--theme-color)] transition-colors duration-300">
                              {cat.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5 line-clamp-2">
                              {cat.description}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer Detail Grid */}
                        <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.04]">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                              <div>
                                <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Grant Limit</span>
                                <span className="font-extrabold text-accent text-sm block mt-0.5">{cat.amount}</span>
                              </div>
                              <div>
                                <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Required Eligibility</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300 block mt-0.5">{cat.eligibility}</span>
                              </div>
                            </div>

                            {/* Arrow expand icon action */}
                            <div className="self-end sm:self-center h-8 w-8 rounded-full bg-slate-50 dark:bg-white/[0.01] border border-slate-200/50 dark:border-white/[0.04] group-hover:bg-[var(--theme-color-bg)] group-hover:border-[var(--theme-color-hover-border)] flex items-center justify-center transition-all duration-300 shrink-0">
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[var(--theme-color)] group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-slate-50/50 dark:bg-white/[0.01] border border-dashed border-slate-200/60 dark:border-white/[0.05] rounded-3xl backdrop-blur-md">
            <p className="text-slate-500 dark:text-slate-400 text-sm">No academic fields match your active search terms.</p>
            <button 
              onClick={() => { setSelectedStream("all"); setSearchQuery(""); }}
              className="mt-3 text-xs text-accent font-semibold underline underline-offset-4 cursor-pointer hover:text-accent-light"
            >
              Reset exploration query
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
