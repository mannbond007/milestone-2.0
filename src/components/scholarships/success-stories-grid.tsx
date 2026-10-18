"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, X, User } from "lucide-react";
import { successStories, SuccessStory } from "@/constants/home-data";

export function SuccessStoriesGrid() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <div 
            key={story.id} 
            className="bg-white dark:bg-[#0b0f19] rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.05)] hover:border-slate-200/50 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Image & Scholar Identity */}
            <div className="flex gap-4 items-start">
              {/* Scholar Image */}
              <div className="w-[105px] h-[125px] flex-shrink-0 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200/40 dark:border-slate-700 overflow-hidden shadow-sm flex items-center justify-center">
                {story.image ? (
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <User className="w-8 h-8" />
                  </div>
                )}
              </div>
              
              {/* Scholar Name & Scholarship info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-black text-slate-900 dark:text-white text-lg tracking-tight truncate">
                  {story.name}
                </h3>
                <div className="mt-2">
                  <span className="text-[10px] font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wider block">
                    Scholarship Amount:
                  </span>
                  <span className="text-[17px] font-black text-slate-800 dark:text-slate-200 block mt-0.5 leading-none">
                    {story.scholarship.includes("/-") ? story.scholarship : `${story.scholarship}/-`}
                  </span>
                </div>
                <p className="mt-3 text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-normal font-medium line-clamp-3">
                  {story.quote.replace(/\.\.\.\s*Read More$/, "")}
                </p>
              </div>
            </div>

            {/* Bottom Row: Education/Career boxes & Detailed Snippet */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-12 gap-4">
              {/* Left side: Aspiration stats stack */}
              <div className="col-span-5 flex flex-col gap-2">
                {/* Current Education */}
                <div className="bg-[#f8fafc] dark:bg-[#111827] border border-slate-100 dark:border-slate-800/50 p-2 rounded-xl flex items-start gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-250/50 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] font-extrabold text-orange-500 dark:text-orange-400 uppercase tracking-wider block">
                      Current Education:
                    </span>
                    <span className="text-[10px] md:text-[11px] font-extrabold text-slate-800 dark:text-slate-200 block mt-0.5 leading-tight truncate">
                      {story.currentEducation || "Student"}
                    </span>
                  </div>
                </div>
                
                {/* Career Aspiration */}
                <div className="bg-[#f8fafc] dark:bg-[#111827] border border-slate-100 dark:border-slate-800/50 p-2 rounded-xl flex items-start gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-250/50 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] font-extrabold text-orange-500 dark:text-orange-400 uppercase tracking-wider block">
                      Career Aspiration:
                    </span>
                    <span className="text-[10px] md:text-[11px] font-extrabold text-slate-850 dark:text-slate-200 block mt-0.5 leading-tight line-clamp-2">
                      {story.careerAspiration || "Professional"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side: Detailed Background story snippet */}
              <div className="col-span-7 flex flex-col justify-between">
                <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-normal line-clamp-5">
                  {story.fullStory || story.quote}
                </p>
                <div className="text-right mt-2">
                  <button 
                    onClick={() => setSelectedStory(story)}
                    className="text-xs font-bold underline text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
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

            {/* Left Column: Image & Scholarship amount */}
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
              <p className="mt-1 font-black text-xl text-slate-850 dark:text-slate-100">
                {selectedStory.scholarship.includes("/-") ? selectedStory.scholarship : `${selectedStory.scholarship}/-`}
              </p>
            </div>

            {/* Right Column: Story Detail */}
            <div className="flex-1 mt-2 md:mt-0 flex flex-col justify-start">
              <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                {selectedStory.name}
              </h3>
              
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="font-bold text-slate-700 dark:text-slate-350">Education:</span> {selectedStory.currentEducation || selectedStory.course}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="font-bold text-slate-700 dark:text-slate-350">Aspiration:</span> {selectedStory.careerAspiration || "Professional"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="font-bold text-slate-700 dark:text-slate-350">Institution/Location:</span> {selectedStory.college} ({selectedStory.year})
                </p>
              </div>
              
              <div className="border-t border-slate-100 dark:border-slate-800 my-4" />
              
              <p className="text-slate-650 dark:text-slate-300 text-sm md:text-base leading-relaxed italic pr-2">
                &ldquo;{selectedStory.fullStory || selectedStory.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
