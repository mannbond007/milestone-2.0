"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { mentors, Mentor } from "@/constants/home-data";
import { 
  CheckCircle2, 
  Star, 
  Users, 
  Award, 
  Building2, 
  ArrowUpRight, 
  Calendar, 
  X,
  Sparkles,
  Send,
  User,
  Mail,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function MentorshipSection() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    course: "",
    topic: "",
  });

  const handleBookSession = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setSubmitted(false);
    setFormData({ studentName: "", email: "", course: "", topic: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="mentorship">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Expert Mentorship"
            title={<>Learn From Industry <span className="text-accent">Leaders & Educators</span></>}
            subtitle="Get direct 1-on-1 guidance, academic roadmaps, and career mentorship from India's top professors and professionals."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
          {mentors.map((mentor, i) => (
            <ScrollReveal key={mentor.id || i} delay={i * 0.08}>
              <div className="group relative bg-card/80 dark:bg-[#0b0f19]/90 backdrop-blur-md rounded-2xl border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-[0_12px_40px_rgba(217,119,6,0.12)] transition-all duration-300 flex flex-col justify-between p-6 md:p-7 h-full">
                
                {/* Top Row: Avatar + Rating & Verified Badge */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name}
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-accent/20 group-hover:border-accent/50 shadow-md transition-all duration-300 group-hover:scale-105"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm border border-card" title="Verified Mentor">
                        <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{mentor.rating.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium bg-secondary/60 px-2.5 py-1 rounded-md">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span>{mentor.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mentor Details Header */}
                  <div className="mt-2">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-heading font-extrabold text-xl tracking-tight text-primary dark:text-white group-hover:text-accent transition-colors">
                        {mentor.name}
                      </h3>
                    </div>

                    <p className="text-xs font-semibold text-accent mt-0.5">
                      {mentor.designation}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground/70 shrink-0" />
                      <span>{mentor.institution}</span>
                    </div>

                    <div className="inline-block mt-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                      {mentor.specialization}
                    </div>
                  </div>

                  {/* Bio / Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3.5 line-clamp-3">
                    {mentor.description}
                  </p>

                  {/* Expertise Tags */}
                  {mentor.expertiseTags && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {mentor.expertiseTags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="text-[11px] font-medium bg-secondary/80 dark:bg-slate-800/80 text-foreground/80 px-2.5 py-0.5 rounded-md border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action & Mentee Stats */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Users className="w-4 h-4 text-accent" />
                    <span><strong className="text-foreground">{mentor.menteesCount}</strong> Mentees</span>
                  </div>

                  <Button 
                    size="sm"
                    onClick={() => handleBookSession(mentor)}
                    className="bg-accent/10 hover:bg-accent text-accent hover:text-black font-semibold text-xs rounded-xl transition-all duration-300 border border-accent/30 group/btn"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Booking / Guidance Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-card dark:bg-[#0f172a] rounded-3xl border border-border/80 shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMentor(null)}
              className="absolute top-5 right-5 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center gap-4 border-b border-border/60 pb-5 mb-5">
                  <img 
                    src={selectedMentor.image} 
                    alt={selectedMentor.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent/40 shadow-sm"
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                      Request Guidance Session
                    </span>
                    <h3 className="text-xl font-bold text-primary dark:text-white mt-1">
                      {selectedMentor.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedMentor.designation} ({selectedMentor.institution})
                    </p>
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Current Course / Class *
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Class 12 / B.Tech 2nd Year"
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Topic for Mentorship *
                    </label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Briefly describe what you'd like to discuss (e.g., career roadmap, exam preparation, college selection...)"
                      value={formData.topic}
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                      className="w-full p-3 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Mentorship Request</span>
                  </Button>
                </form>
              </>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  Request Submitted!
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.studentName}</strong>. Your mentorship request for <strong className="text-accent">{selectedMentor.name}</strong> has been received. Our team will connect with you via email shortly.
                </p>
                <Button 
                  onClick={() => setSelectedMentor(null)}
                  className="mt-6 bg-accent hover:bg-accent/90 text-black font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                >
                  Done
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
