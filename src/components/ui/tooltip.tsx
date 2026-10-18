"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full mb-2.5 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2.5 left-1/2 -translate-x-1/2",
    left: "right-full mr-2.5 top-1/2 -translate-y-1/2",
    right: "left-full ml-2.5 top-1/2 -translate-y-1/2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-slate-900 dark:border-t-slate-800 border-x-transparent border-b-transparent border-t-4 border-x-4",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 dark:border-b-slate-800 border-x-transparent border-t-transparent border-b-4 border-x-4",
    left: "left-full top-1/2 -translate-y-1/2 border-l-slate-900 dark:border-l-slate-800 border-y-transparent border-r-transparent border-l-4 border-y-4",
    right: "right-full top-1/2 -translate-y-1/2 border-r-slate-900 dark:border-r-slate-800 border-y-transparent border-l-transparent border-r-4 border-y-4",
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 pointer-events-none transition-all duration-200 animate-in fade-in zoom-in-95",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div className={cn("absolute w-0 h-0", arrowClasses[position])} />
        </div>
      )}
    </div>
  );
}
