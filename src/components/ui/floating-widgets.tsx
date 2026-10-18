"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { 
  MessageSquare, 
  Calendar, 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  BookOpen,
  CheckCheck,
  Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingWidgets() {
  // WhatsApp Chat Popup State
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [showPromptBubble, setShowPromptBubble] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [chatMessage, setChatMessage] = useState("");

  // Consultation Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isConsultationSubmitted, setIsConsultationSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "MBBS / Medical",
    topic: "Scholarship Eligibility & Financial Support",
    preferredDate: "Tomorrow",
    preferredSlot: "11:00 AM - 12:00 PM",
  });

  const whatsappNumber = "919876543210";

  // Show prompt bubble after 3 seconds for realism
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromptBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsAppWidget = () => {
    setIsWhatsAppOpen(!isWhatsAppOpen);
    setUnreadCount(0);
    setShowPromptBubble(false);
  };

  const handleSendWhatsAppMessage = (textToSend?: string) => {
    const message = textToSend || chatMessage || "Hi Milestone Team, I would like to inquire about scholarship opportunities.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setChatMessage("");
    setIsWhatsAppOpen(false);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultationSubmitted(true);
  };

  const handleConsultationWhatsAppConfirm = () => {
    const msg = encodeURIComponent(
      `Hi Milestone Team, I have booked a Consultation session.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nSlot: ${formData.preferredDate} (${formData.preferredSlot})`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setIsConsultationOpen(false);
    setIsConsultationSubmitted(false);
  };

  return (
    <>
      {/* Floating Action Buttons Stack (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 pointer-events-auto">
        
        {/* Automatic Speech Bubble Notification Prompt */}
        {showPromptBubble && !isWhatsAppOpen && (
          <div className="relative animate-in slide-in-from-bottom-3 duration-300 max-w-[280px]">
            <div className="bg-card dark:bg-[#111b21] p-3.5 rounded-2xl border border-emerald-500/40 shadow-2xl flex items-start gap-3 relative">
              <button 
                onClick={() => setShowPromptBubble(false)}
                className="absolute -top-2 -right-2 bg-muted text-muted-foreground hover:text-foreground rounded-full p-1 shadow-sm border border-border"
              >
                <X className="w-3 h-3" />
              </button>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Counselor Avatar"
                  className="w-9 h-9 rounded-full object-cover border border-emerald-500"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-card" />
              </div>

              <div className="flex-1 cursor-pointer" onClick={handleOpenWhatsAppWidget}>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-bold text-emerald-500">Milestone Helpdesk</span>
                  <span className="text-[10px] text-muted-foreground">• Online</span>
                </div>
                <p className="text-xs text-foreground font-medium mt-0.5 leading-snug">
                  👋 Hi! Need help with Scholarship Eligibility or Admissions?
                </p>
              </div>
            </div>

            {/* Bubble Tail Arrow */}
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-card dark:border-t-[#111b21] absolute -bottom-2 right-6" />
          </div>
        )}

        {/* Book Consultation Floating Button */}
        <Tooltip content="Book Free 1-on-1 Counseling Session" position="left">
          <button
            onClick={() => {
              setIsConsultationOpen(true);
              setIsConsultationSubmitted(false);
            }}
            className="group flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-xs md:text-sm px-4 py-3 rounded-full shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:shadow-[0_12px_35px_rgba(217,119,6,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-amber-300/40"
          >
            <div className="p-1 bg-black/15 rounded-full">
              <Calendar className="w-4 h-4 text-slate-950" />
            </div>
            <span className="hidden sm:inline font-heading font-extrabold tracking-wide uppercase text-[11px]">
              Book Consultation
            </span>
          </button>
        </Tooltip>

        {/* Realistic WhatsApp Floating Button */}
        <Tooltip content="Chat with Support on WhatsApp" position="left">
          <button
            onClick={handleOpenWhatsAppWidget}
            className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            {/* Animated Pulse Ring */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-35" />

            {/* Unread Badge Counter */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md z-20">
                {unreadCount}
              </span>
            )}

            {/* WhatsApp Logo SVG */}
            <svg 
              className="w-7 h-7 fill-current relative z-10" 
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.2 4.293-1.126z"/>
            </svg>
          </button>
        </Tooltip>

      </div>

      {/* REALISTIC WHATSAPP BUSINESS CHAT POPUP WIDGET */}
      {isWhatsAppOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] rounded-3xl bg-[#efeae2] dark:bg-[#0b141a] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-700/30 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header (WhatsApp Official Brand Green) */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Milestone Counselor"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075e54]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm leading-tight text-white">Milestone Support</h3>
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-400 text-[#075e54]" />
                </div>
                <p className="text-[11px] text-white/80 font-medium">Replies instantly • WhatsApp Official</p>
              </div>
            </div>

            <button 
              onClick={() => setIsWhatsAppOpen(false)}
              className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body (WhatsApp Background Pattern) */}
          <div className="p-4 space-y-3.5 max-h-[340px] overflow-y-auto bg-repeat bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]">
            
            {/* Timestamp Badge */}
            <div className="text-center my-2">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-black/10 dark:bg-white/10 text-muted-foreground px-2.5 py-0.5 rounded-full">
                Today
              </span>
            </div>

            {/* Incoming Support Message Bubble */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="bg-white dark:bg-[#202c33] text-foreground p-3.5 rounded-2xl rounded-tl-none shadow-md border border-slate-200/50 dark:border-slate-800">
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                  Prof. Sneha (Milestone Senior Counselor)
                </p>
                <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-100">
                  Hello! 👋 Welcome to Milestone Scholarship Program.
                </p>
                <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-100 mt-2">
                  How can we help you today with your higher education journey?
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-muted-foreground mt-1">
                  <span>12:24 PM</span>
                  <CheckCheck className="w-3 h-3 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-1">Quick Select Options:</p>
              
              <button
                onClick={() => handleSendWhatsAppMessage("Hi, I want to check my eligibility for MBBS / B.Tech scholarships.")}
                className="w-full text-left text-xs bg-white/90 dark:bg-[#202c33] hover:bg-emerald-50 dark:hover:bg-[#2a3942] text-slate-900 dark:text-white p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 transition-all font-semibold flex items-center justify-between group"
              >
                <span>🎓 Check Scholarship Eligibility</span>
                <Send className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => handleSendWhatsAppMessage("Hi, please guide me on how to apply for the 2025 Milestone exam.")}
                className="w-full text-left text-xs bg-white/90 dark:bg-[#202c33] hover:bg-emerald-50 dark:hover:bg-[#2a3942] text-slate-900 dark:text-white p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 transition-all font-semibold flex items-center justify-between group"
              >
                <span>📝 Scholarship Test Guidelines</span>
                <Send className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => handleSendWhatsAppMessage("Hi, I need 1-on-1 career guidance with a professor.")}
                className="w-full text-left text-xs bg-white/90 dark:bg-[#202c33] hover:bg-emerald-50 dark:hover:bg-[#2a3942] text-slate-900 dark:text-white p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 transition-all font-semibold flex items-center justify-between group"
              >
                <span>👨‍🏫 Talk to a Senior Counselor</span>
                <Send className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-white dark:bg-[#202c33] border-t border-slate-200 dark:border-slate-700/60 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendWhatsAppMessage();
              }}
              className="flex-1 px-3.5 py-2 text-xs bg-slate-100 dark:bg-[#111b21] border border-slate-200 dark:border-slate-700/60 rounded-full focus:outline-none focus:border-emerald-500"
            />

            <button
              onClick={() => handleSendWhatsAppMessage()}
              className="w-9 h-9 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>

        </div>
      )}

      {/* Book Consultation Modal Dialog */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-card dark:bg-[#0f172a] rounded-3xl border border-border/80 shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsConsultationOpen(false)}
              className="absolute top-5 right-5 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isConsultationSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center gap-3.5 border-b border-border/60 pb-5 mb-5">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl border border-amber-500/20">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent">
                      Free 1-on-1 Counseling
                    </span>
                    <h3 className="text-xl font-bold text-primary dark:text-white">
                      Book Career & Scholarship Consultation
                    </h3>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Shashwat Soni"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input 
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Target Course *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        className="w-full p-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      >
                        <option value="MBBS / Medical">MBBS / Medical</option>
                        <option value="B.Tech / Engineering">B.Tech / Engineering</option>
                        <option value="Law / Legal Studies">Law / Legal Studies</option>
                        <option value="BAMS / Healthcare">BAMS / Healthcare</option>
                        <option value="BBA / Management">BBA / Management</option>
                        <option value="NEET / JEE Coaching">NEET / JEE Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Consultation Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                      className="w-full p-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                    >
                      <option value="Scholarship Eligibility & Financial Support">Scholarship Eligibility & Financial Support</option>
                      <option value="College Selection & Admission Roadmap">College Selection & Admission Roadmap</option>
                      <option value="1-on-1 Academic Mentorship">1-on-1 Academic Mentorship</option>
                      <option value="Document & Test Preparation">Document & Test Preparation</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Preferred Day
                      </label>
                      <select
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                        className="w-full p-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      >
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This Weekend">This Weekend</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({...formData, preferredSlot: e.target.value})}
                        className="w-full p-2.5 text-sm bg-secondary/50 dark:bg-slate-900 border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                      >
                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                        <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-black font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-3 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Consultation Booking</span>
                  </Button>
                </form>
              </>
            ) : (
              /* Success Screen */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary dark:text-white">
                  Booking Confirmed!
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. Your consultation for <strong className="text-accent">{formData.course}</strong> is scheduled for <strong className="text-foreground">{formData.preferredDate} ({formData.preferredSlot})</strong>.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 text-left space-y-1">
                  <p className="font-bold">📱 Instant WhatsApp Confirmation Available</p>
                  <p className="text-muted-foreground">Click below to send booking details directly to our academic counselor on WhatsApp.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    onClick={handleConsultationWhatsAppConfirm}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Connect on WhatsApp</span>
                  </Button>
                  <Button
                    onClick={() => setIsConsultationOpen(false)}
                    variant="outline"
                    className="w-full font-semibold py-3 rounded-xl cursor-pointer"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
