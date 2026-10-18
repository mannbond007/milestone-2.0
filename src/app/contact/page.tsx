"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "Email", value: "milestonescholarship@gmail.com", href: "mailto:milestonescholarship@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 95544 66699", href: "tel:+919554466699" },
  { icon: MapPin, label: "Office Address", value: "Nawal Kishore road, Behind the CBI office, Front of Padmakar Bhawan, Hazratganj Lucknow 226001", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 relative overflow-hidden">
      {/* Background Gradients for Premium Feel */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-accent/10 dark:bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide">24/7 Student Support</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight leading-tight text-slate-900 dark:text-white mb-4">
              Need Help With Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-500 dark:from-gold dark:to-yellow-500">Scholarship Journey?</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Our team is here to guide you through applications, eligibility, scholarships, and career support. We're dedicated to your success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-20 md:pb-32 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            
            {/* LEFT: Premium Contact Card */}
            <ScrollReveal className="h-full">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-blue-500/20 rounded-3xl blur-xl opacity-50 dark:opacity-30 pointer-events-none" />
                <div className="relative bg-white/85 dark:bg-[#12141C]/85 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-full flex flex-col justify-between">
                  
                  <div>
                    <h3 className="text-2xl font-heading font-extrabold tracking-tight mb-8 text-primary dark:text-white">
                      Get in Touch
                    </h3>

                    <div className="space-y-8">
                      {contactInfo.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <a key={i} href={item.href} className="flex items-start gap-5 group">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <div className="pt-1">
                              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                              <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">{item.value}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-12 pt-10 border-t border-slate-200/40 dark:border-white/10 grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <Clock className="h-5 w-5 text-blue-500" />
                        Quick Response
                      </div>
                      <p className="text-sm text-muted-foreground">Typically replies within 2-4 hours</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        Trusted Support
                      </div>
                      <p className="text-sm text-muted-foreground">Dedicated guidance for students</p>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Modern Contact Form */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-gold/30 rounded-3xl blur-xl opacity-50 dark:opacity-30 pointer-events-none" />
                <div className="relative bg-white/85 dark:bg-[#12141C]/85 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-full flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
                  
                  {submitted ? (
                    <div className="text-center py-20 relative z-10 my-auto">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-6">
                        <Send className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white mb-3">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. Our support team will get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      className="space-y-6 relative z-10 h-full flex flex-col justify-between"
                    >
                      <div className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-350">Full Name</Label>
                            <Input id="name" placeholder="John Doe" required className="rounded-xl h-11 bg-slate-50/50 dark:bg-zinc-900/50 border-slate-200/60 dark:border-white/[0.04] focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-350">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl h-11 bg-slate-50/50 dark:bg-zinc-900/50 border-slate-200/60 dark:border-white/[0.04] focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-350">Subject</Label>
                          <Input id="subject" placeholder="How can we help you?" required className="rounded-xl h-11 bg-slate-50/50 dark:bg-zinc-900/50 border-slate-200/60 dark:border-white/[0.04] focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-350">Message</Label>
                          <Textarea id="message" placeholder="Please describe your query in detail..." rows={4} required className="rounded-xl resize-none bg-slate-50/50 dark:bg-zinc-900/50 border-slate-200/60 dark:border-white/[0.04] focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0 pt-3" />
                        </div>
                      </div>

                      {/* Submission Guidelines to naturally fill the gap */}
                      <div className="bg-slate-50/60 dark:bg-white/[0.01] border border-slate-200/40 dark:border-white/[0.03] p-4 rounded-2xl">
                        <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block">Privacy & response policy</span>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                          Your contact data is securely encrypted. We never share student queries with external advertisers. Our admissions & counseling desks review each ticket and typically reply within 12–24 business hours.
                        </p>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full gradient-gold text-white font-semibold rounded-xl h-11 text-sm shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 mt-2 shrink-0"
                        id="contact-submit-btn"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
