"use client";

import { useState, useEffect } from "react";
import { Trophy, Zap, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  { student: "Rahul Sharma", location: "Patna, Bihar", grant: "₹4,00,000 B.Tech Grant", course: "B.Tech Computer Science", time: "2 mins ago" },
  { student: "Ananya Deshmukh", location: "Pune, Maharashtra", grant: "₹5,00,000 MBBS Grant", course: "MBBS Medical Science", time: "5 mins ago" },
  { student: "Vishwajeet Ghosh", location: "Kolkata, West Bengal", grant: "₹2,50,000 MBA Aid", course: "Symbiosis Institute", time: "12 mins ago" },
  { student: "Priya B. K.", location: "Nagpur, Maharashtra", grant: "₹3,00,000 Law Grant", course: "BA LLB Legal Studies", time: "18 mins ago" },
  { student: "Kiran Kumar", location: "Hyderabad, Telangana", grant: "₹2,00,000 BCA Aid", course: "BCA Computer Applications", time: "25 mins ago" },
];

export function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = activities[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } 
          }}
          className="overflow-hidden w-full bg-slate-950/95 dark:bg-[#070b14]/95 backdrop-blur-md border-b border-accent/20 relative z-50 text-xs shadow-sm"
        >
          <div className="py-2 px-3 sm:px-6">
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
              
              {/* Left Live Badge */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-500 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Live Award
                </span>
              </div>

              {/* Center Live Ticker Text */}
              <div className="flex-1 overflow-hidden text-center sm:text-left">
                <div className="inline-flex items-center gap-2 transition-all duration-300 animate-in fade-in truncate max-w-full">
                  <Trophy className="w-3.5 h-3.5 text-accent shrink-0 hidden sm:inline-block" />
                  <span className="text-slate-200 text-xs font-normal truncate">
                    <strong className="font-bold text-white">{current.student}</strong> ({current.location}) was awarded <strong className="text-amber-400 font-bold">{current.grant}</strong>
                  </span>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded shrink-0 hidden md:inline-block">
                    {current.time}
                  </span>
                </div>
              </div>

              {/* Right Action & Close */}
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/sign-up"
                  className="text-amber-400 hover:text-amber-300 font-extrabold text-[11px] flex items-center gap-1 transition-colors"
                >
                  <span className="hidden sm:inline">Claim Grant</span>
                  <Zap className="w-3 h-3 fill-amber-400" />
                </Link>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
                  title="Dismiss Announcement"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
