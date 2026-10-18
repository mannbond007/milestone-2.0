"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Academic Info" },
  { id: 3, title: "Scholarship" },
  { id: 4, title: "Documents" },
  { id: 5, title: "Review" },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => setCurrentStep((s) => Math.min(s + 1, 5));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <div className="max-w-3xl">
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Apply for Scholarship</h1>
          <p className="text-muted-foreground text-sm mt-1">Complete all steps to submit your application.</p>
        </div>
      </ScrollReveal>

      {/* Progress Bar */}
      <ScrollReveal delay={0.05}>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  currentStep >= step.id
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <span className="hidden sm:block text-xs font-medium text-muted-foreground">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full gradient-gold rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Form Steps */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="space-y-5">
                <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Personal Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="fullName">Full Name *</Label><Input id="fullName" placeholder="Enter full name" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="fatherName">Father&apos;s Name *</Label><Input id="fatherName" placeholder="Father's name" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="motherName">Mother&apos;s Name *</Label><Input id="motherName" placeholder="Mother's name" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="dob">Date of Birth *</Label><Input id="dob" type="date" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="gender">Gender *</Label><Input id="gender" placeholder="Male / Female / Other" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="address">Full Address *</Label><Textarea id="address" placeholder="Enter your complete address" className="rounded-xl" rows={3} /></div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2"><Label htmlFor="city">City *</Label><Input id="city" placeholder="City" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="state">State *</Label><Input id="state" placeholder="State" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="pincode">Pincode *</Label><Input id="pincode" placeholder="Pincode" className="rounded-xl" /></div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5">
                <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Academic Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label htmlFor="tenthMarks">10th Marks (%) *</Label><Input id="tenthMarks" type="number" placeholder="e.g. 85.5" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="twelfthMarks">12th Marks (%)</Label><Input id="twelfthMarks" type="number" placeholder="e.g. 78.0" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="collegeName">College Name</Label><Input id="collegeName" placeholder="College/University" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="courseName">Course Name</Label><Input id="courseName" placeholder="e.g. MBBS, B.Tech CSE" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="yearOfStudy">Year of Study</Label><Input id="yearOfStudy" placeholder="e.g. 1st Year" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label htmlFor="category">Category *</Label><Input id="category" placeholder="General / OBC / SC / ST" className="rounded-xl" /></div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-5">
                <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Select Scholarship</h2>
                <p className="text-sm text-muted-foreground">Choose the scholarship category you want to apply for.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["MBBS", "B.Tech", "BAMS", "BBA", "Law", "Nursing", "Pharmacy", "B.Sc"].map((cat) => (
                    <button
                      key={cat}
                      className="p-4 rounded-xl border border-border/50 text-left hover:border-accent/50 hover:bg-accent/5 transition-all group"
                    >
                      <h4 className="font-extrabold tracking-tight text-primary dark:text-white group-hover:text-accent transition-colors">{cat} Scholarship</h4>
                      <p className="text-xs text-muted-foreground mt-1">Up to ₹5,00,000</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-5">
                <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Upload Documents</h2>
                <p className="text-sm text-muted-foreground">Upload clear, legible copies of the following documents.</p>
                {["Aadhaar Card", "Marksheet", "Passport Photo", "Certificates"].map((doc) => (
                  <div key={doc} className="border border-dashed border-border/50 rounded-xl p-5 text-center hover:border-accent/30 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{doc}</p>
                    <p className="text-xs text-muted-foreground mt-1">Click to upload (PDF, JPG, PNG — max 5MB)</p>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-5">
                <h2 className="font-heading text-lg font-extrabold tracking-tight text-primary dark:text-white">Review & Submit</h2>
                <p className="text-sm text-muted-foreground">Please review your application details before submitting.</p>
                <div className="bg-muted/30 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Full Name</span><span className="font-medium text-foreground">—</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Scholarship</span><span className="font-medium text-foreground">—</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Documents</span><span className="font-medium text-foreground">Pending</span></div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-sm text-amber-600 dark:text-amber-400">
                  ⚠️ Once submitted, your application cannot be edited. Please review all details carefully.
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
          <Button
            variant="outline"
            onClick={prev}
            disabled={currentStep === 1}
            className="rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          {currentStep < 5 ? (
            <Button onClick={next} className="gradient-gold text-white rounded-xl shadow-gold hover:opacity-90">
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button className="gradient-gold text-white rounded-xl shadow-gold hover:opacity-90">
              <Check className="h-4 w-4 mr-2" />
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
