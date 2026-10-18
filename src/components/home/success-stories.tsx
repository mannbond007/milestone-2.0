"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { successStories, SuccessStory } from "@/constants/home-data";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at the first original item (after 3 prefix clones)
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTransitioning(false); // Disable transition during layout shifts
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone 3 items at the start and end to support infinite loop carousel
  const clonedStories = [
    ...successStories.slice(-3),
    ...successStories,
    ...successStories.slice(0, 3)
  ];

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (isHovered || selectedStory) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered, selectedStory, nextSlide]);

  const handleTransitionEnd = () => {
    const N = successStories.length;
    if (currentIndex >= N + 3) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - N);
    } else if (currentIndex < 3) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + N);
    }
  };

  return (
    <section className="py-20 relative bg-white dark:bg-[#030712] overflow-hidden" id="success-stories-preview">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#1e293b] dark:text-slate-100 mb-16 tracking-tight">
            Our Scholars
          </h2>
        </ScrollReveal>

        {/* Carousel Container */}
        <div 
          className="relative w-full px-8 md:px-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md active:scale-95 cursor-pointer"
            aria-label="Previous scholar"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Carousel Window */}
          <div className="overflow-hidden py-4">
            <div 
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {clonedStories.map((story, index) => {
                const cleanQuote = story.quote.replace(/\.\.\.\s*Read More$/, "").trim();
                const hasReadMore = story.quote.includes("... Read More") || !!story.fullStory;

                return (
                  <div 
                    key={`${story.id}-${index}`} 
                    className="flex-shrink-0 px-2 transition-all duration-300"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    {/* Card Design */}
                    <div className="relative flex items-center bg-gradient-to-r from-slate-50 to-slate-100/50 dark:from-[#0b0f19] dark:to-[#0f172a]/60 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)] dark:shadow-none hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:border-slate-700 transition-all duration-300 min-h-[210px] md:min-h-[225px] ml-6 mr-2">
                      
                      {/* Overlapping Scholar Image Container */}
                      <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[95px] md:w-[105px] h-[120px] md:h-[130px] bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-slate-200/40 dark:border-slate-700 overflow-hidden flex items-center justify-center">
                        {story.image ? (
                          <img 
                            src={story.image} 
                            alt={story.name} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                            <User className="w-8 h-8" />
                          </div>
                        )}
                      </div>

                      {/* Details Container */}
                      <div className="pl-[86px] md:pl-[96px] w-full flex flex-col justify-center">
                        <h3 className="font-heading font-bold text-slate-800 dark:text-slate-100 text-base md:text-lg tracking-tight truncate leading-tight">
                          {story.name}
                        </h3>
                        <p className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug font-medium line-clamp-2">
                          {story.subtitle || `${story.name}, ${story.course}, ${story.college}`}
                        </p>
                        
                        <p className="mt-2 text-xs md:text-[13px] text-slate-650 dark:text-slate-300 leading-relaxed font-normal">
                          {cleanQuote}
                          {hasReadMore && (
                            <>
                              ...
                              <button 
                                onClick={() => setSelectedStory(story)}
                                className="font-bold underline text-slate-850 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer ml-1 inline-block"
                              >
                                Read More
                              </button>
                            </>
                          )}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md active:scale-95 cursor-pointer"
            aria-label="Next scholar"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Center Bottom Button */}
        <ScrollReveal>
          <div className="mt-16 flex justify-center">
            <Link 
              href="/success-stories" 
              className="bg-gradient-to-r from-[#ff5e36] to-[#ffa022] hover:brightness-105 active:scale-[0.98] text-white font-bold text-sm md:text-base px-7 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(255,94,54,0.25)] transition-all duration-200 cursor-pointer"
            >
              More Success Stories
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Story Details Modal Overlay */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200 flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column - Image & Scholarship Badge */}
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="w-32 h-40 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden flex items-center justify-center">
                {selectedStory.image ? (
                  <img 
                    src={selectedStory.image} 
                    alt={selectedStory.name} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <User className="w-12 h-12 text-slate-400" />
                )}
              </div>
              <p className="mt-4 text-[10px] font-bold text-orange-500 bg-orange-500/10 dark:bg-orange-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Scholarship
              </p>
              <p className="mt-1 font-bold text-lg text-slate-800 dark:text-slate-100">
                {selectedStory.scholarship}
              </p>
            </div>

            {/* Right Column - Story Content */}
            <div className="flex-1 mt-2 md:mt-0 flex flex-col justify-start">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">
                {selectedStory.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {selectedStory.subtitle || `${selectedStory.name}, ${selectedStory.course}, ${selectedStory.college} (${selectedStory.year})`}
              </p>
              
              <div className="border-t border-slate-100 dark:border-slate-800 my-4" />
              
              <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed italic pr-2">
                &ldquo;{selectedStory.fullStory || selectedStory.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
