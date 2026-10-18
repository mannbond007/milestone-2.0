import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  HelpCircle,
  School,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

interface CourseInfo {
  title: string;
  category: string;
  duration: string;
  degree: string;
  summary: string;
  eligibility: string[];
  collegeTypes: {
    type: string;
    details: string;
  }[];
  scholarshipOpportunities: string[];
}

const COURSES_DATA: Record<string, CourseInfo> = {
  "mbbs-india": {
    title: "MBBS in India (Bachelor of Medicine & Bachelor of Surgery)",
    category: "Medical Sciences",
    duration: "5.5 Years (including 1-year compulsory internship)",
    degree: "Undergraduate (UG)",
    summary:
      "A primary medical qualification for aspiring physicians and surgeons in India, governed by the National Medical Commission (NMC).",
    eligibility: [
      "10+2 with Physics, Chemistry, Biology/Biotechnology & English.",
      "Minimum 50% aggregate in PCB (40% for reserved categories).",
      "Qualifying score in the National Eligibility cum Entrance Test (NEET-UG).",
      "Minimum 17 years of age as of December 31 of admission year.",
    ],
    collegeTypes: [
      {
        type: "Government Medical Colleges (AIIMS, State GMCs)",
        details:
          "All-India Quota (15%) and State Quota (85%) seats allocated through centralized counselling based on NEET-UG rank.",
      },
      {
        type: "Recognized Private Medical Colleges & Deemed Universities",
        details:
          "Admission strictly through NEET-UG score with institutional, management, and quota seats under state authority regulations.",
      },
    ],
    scholarshipOpportunities: [
      "MileStone Merit Scholarship for top NEET scorers",
      "Central Sector Scheme of Scholarships for College and University Students",
      "State-specific post-matric medical scholarships",
    ],
  },
  "mbbs-abroad": {
    title: "MBBS Abroad (International Medical Education)",
    category: "Medical Sciences",
    duration: "5 to 6 Years (varies by country, includes clinical rotations)",
    degree: "MD / MBBS equivalent (recognized by WHO / NMC)",
    summary:
      "Medical education opportunities across NMC-compliant universities in countries including Russia, Georgia, Kazakhstan, and Uzbekistan.",
    eligibility: [
      "10+2 with PCB and English, minimum 50% aggregate.",
      "Qualifying NEET-UG scorecard (mandatory for Indian citizens seeking foreign medical degree).",
      "Valid Indian passport.",
      "Fulfillment of FMGE / NExT screening guidelines as issued by NMC.",
    ],
    collegeTypes: [
      {
        type: "National Public Medical Universities",
        details:
          "Government-run medical institutions with bilingual or English-medium instruction and affiliated teaching hospitals.",
      },
      {
        type: "Private International Medical Colleges",
        details:
          "Colleges registered with respective national ministries of education and listed in the World Directory of Medical Schools (WDOMS).",
      },
    ],
    scholarshipOpportunities: [
      "University-specific academic merit tuition waivers",
      "MileStone International Education Guidance Grants",
    ],
  },
  bds: {
    title: "BDS (Bachelor of Dental Surgery)",
    category: "Dental Sciences",
    duration: "5 Years (4 years academics + 1 year rotating internship)",
    degree: "Undergraduate (UG)",
    summary:
      "Professional degree course covering dental and oral healthcare, diagnosis, and surgeries governed by the Dental Council of India (DCI).",
    eligibility: [
      "10+2 with Physics, Chemistry, Biology and English.",
      "Minimum 50% marks in PCB in qualifying board exam.",
      "NEET-UG qualifying merit rank.",
    ],
    collegeTypes: [
      {
        type: "Government Dental Colleges",
        details:
          "State and national government dental colleges with subsidized fee structures and high clinical patient load.",
      },
      {
        type: "Private Dental Institutes",
        details:
          "DCI-recognized private colleges offering general and specialty dental training.",
      },
    ],
    scholarshipOpportunities: [
      "State post-matric healthcare scholarships",
      "MileStone Dental Sciences Aid Program",
    ],
  },
  bams: {
    title: "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
    category: "AYUSH / Traditional Medicine",
    duration: "5.5 Years (4.5 years study + 1 year internship)",
    degree: "Undergraduate (UG)",
    summary:
      "Traditional Indian medicine system integrating classical Ayurvedic knowledge with modern anatomy and pathology principles, regulated by NCISM.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Biology.",
      "NEET-UG qualification (AYUSH counselling quota).",
      "Sanskrit knowledge at secondary level is advantageous but not mandatory.",
    ],
    collegeTypes: [
      {
        type: "Government Ayurvedic Colleges",
        details: "Premier state-run Ayurvedic universities and hospitals with clinical dispensaries.",
      },
      {
        type: "Recognized Private Ayurvedic Colleges",
        details: "Affiliated institutions with accredited hospital facilities under NCISM norms.",
      },
    ],
    scholarshipOpportunities: [
      "Ministry of AYUSH Central Sector schemes",
      "MileStone AYUSH Excellence Award",
    ],
  },
  bhms: {
    title: "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
    category: "AYUSH / Homeopathic Medicine",
    duration: "5.5 Years (includes 1-year clinical internship)",
    degree: "Undergraduate (UG)",
    summary:
      "Holistic medicine degree based on the principles of Homeopathy, clinical medicine, pharmacology, and therapeutics under NCH.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Biology.",
      "NEET-UG qualification.",
      "Minimum 50% aggregate in science subjects.",
    ],
    collegeTypes: [
      {
        type: "Government Homeopathic Medical Colleges",
        details: "State-funded institutions offering clinical exposure and OPD facilities.",
      },
      {
        type: "Private Homeopathic Colleges",
        details: "NCH-approved private institutions conducting degree programs and hospital training.",
      },
    ],
    scholarshipOpportunities: [
      "National AYUSH scholarship programs",
      "MileStone Healthcare Guidance Grants",
    ],
  },
  bums: {
    title: "BUMS (Bachelor of Unani Medicine and Surgery)",
    category: "AYUSH / Unani Medicine",
    duration: "5.5 Years (includes 1-year compulsory internship)",
    degree: "Undergraduate (UG)",
    summary:
      "Ancient Greco-Arabic medical science degree regulated by the National Commission for Indian System of Medicine (NCISM).",
    eligibility: [
      "10+2 with Physics, Chemistry, and Biology.",
      "Urdu or Arabic as a subject in 10th or 12th standard (or passing pre-Tib test).",
      "NEET-UG qualification score.",
    ],
    collegeTypes: [
      {
        type: "Government Unani Colleges",
        details: "Centrally and state-supported institutes offering traditional and clinical training.",
      },
      {
        type: "Private Unani Medical Colleges",
        details: "NCISM recognized private institutions with attached hospital wards.",
      },
    ],
    scholarshipOpportunities: [
      "Minority affairs and AYUSH financial aid schemes",
      "MileStone Academic Support Grants",
    ],
  },
  medical: {
    title: "Medical & Healthcare Pathways Overview",
    category: "Health Sciences",
    duration: "5 to 5.5 Years",
    degree: "Undergraduate Medical Degrees",
    summary:
      "Complete educational and admission advisory across MBBS (India & Abroad), BDS, BAMS, BHMS, and BUMS programs.",
    eligibility: [
      "10+2 with Physics, Chemistry, Biology and English.",
      "NEET-UG qualification mandatory across all streams.",
    ],
    collegeTypes: [
      {
        type: "All India Government Medical Colleges",
        details: "Admission through MCC (Medical Counselling Committee) AIQ and State Counselling Authorities.",
      },
      {
        type: "Private & Deemed Universities",
        details: "Admission purely through centralized NEET counselling as per statutory reservation guidelines.",
      },
    ],
    scholarshipOpportunities: [
      "MileStone Medical Scholarship Test",
      "Government post-matric and merit-cum-means awards",
    ],
  },
  engineering: {
    title: "Engineering (B.Tech / B.E.)",
    category: "Engineering & Technology",
    duration: "4 Years",
    degree: "Undergraduate (UG)",
    summary:
      "Comprehensive technical degree programs in Computer Science, Electronics, Mechanical, Civil, and allied engineering disciplines across AICTE-approved institutions.",
    eligibility: [
      "10+2 with Physics, Mathematics, and Chemistry/Computer Science.",
      "Entrance score in JEE Main, JEE Advanced, or State CETs.",
      "Minimum 50% to 75% marks in qualifying examination.",
    ],
    collegeTypes: [
      {
        type: "Institutes of National Importance (IITs, NITs, IIITs, GFTIs)",
        details: "Centralized admission via JoSAA and CSAB counselling based on JEE ranks.",
      },
      {
        type: "State Government & Private Engineering Colleges",
        details: "Admission via state engineering examinations and institutional merit criteria.",
      },
    ],
    scholarshipOpportunities: [
      "MileStone STEM Scholarship Program",
      "AICTE Pragati and Saksham Scholarships",
    ],
  },
  management: {
    title: "Management (MBA / PGDM)",
    category: "Business Administration",
    duration: "2 Years",
    degree: "Post-Graduate (PG)",
    summary:
      "Advanced professional business programs covering Finance, Marketing, Operations, Human Resources, and Data Analytics.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% marks (45% for reserved categories).",
      "Valid national entrance score: CAT, XAT, MAT, CMAT, or GMAT.",
      "Group discussion and personal interview performance.",
    ],
    collegeTypes: [
      {
        type: "Indian Institutes of Management (IIMs) & Top B-Schools",
        details: "Centralized shortlisting via CAT score followed by WAT-PI evaluations.",
      },
      {
        type: "University Departments & AICTE Approved PGDM Institutes",
        details: "Admission through national and state entrance tests.",
      },
    ],
    scholarshipOpportunities: [
      "MileStone Future Leaders Scholarship",
      "Merit-cum-means scholarships by respective business schools",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA[slug];
  if (!course) {
    return {
      title: "Course Not Found | MileStone Scholarship",
    };
  }
  return {
    title: `${course.title} | MileStone Scholarship`,
    description: course.summary,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES_DATA[slug];

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Breadcrumb / Top Bar */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-muted-foreground">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 hover:text-accent font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Courses</span>
          </Link>
          <span className="font-semibold text-accent">{course.category}</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="border-b border-border bg-card py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EE] dark:bg-[#1E3029] text-[#173B35] dark:text-[#59B892] mb-3 border border-[#3C8D72]/20">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>{course.degree}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              {course.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {course.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border">
                <School className="w-3.5 h-3.5 text-accent" />
                <span>Admission: Centralized Entrance Examination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Details */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Eligibility */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Standard Eligibility Criteria</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {course.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* College Categories */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <School className="w-4 h-4 text-accent" />
                  <span>Institution Types & Seat Allocation</span>
                </h3>
                <div className="space-y-4">
                  {course.collegeTypes.map((ctype, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <h4 className="text-xs font-bold text-foreground mb-1">
                        {ctype.type}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ctype.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship Opportunities */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>Scholarship & Financial Aid Pathways</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {course.scholarshipOpportunities.map((sch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3C8D72] dark:text-[#59B892] mt-0.5 flex-shrink-0" />
                      <span>{sch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Guidance Box */}
              <div className="p-6 rounded-2xl bg-[#E8F2EE] dark:bg-[#17211E] border border-[#3C8D72]/30 text-card-foreground">
                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>MileStone Advisory</span>
                </div>
                <h4 className="text-base font-bold text-[#173B35] dark:text-[#59B892]">
                  Need Personalized Admission Guidance?
                </h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Our counselors assist with eligibility verification, document preparation, and scholarship applications.
                </p>
                <div className="mt-5 space-y-2.5">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center h-10 px-4 text-xs font-bold rounded-xl bg-[#173B35] hover:bg-[#173B35]/90 text-white dark:bg-[#59B892] dark:hover:bg-[#59B892]/90 dark:text-[#0F1715] transition-colors"
                  >
                    Contact Guidance Counselor
                  </Link>
                  <Link
                    href="/scholarships"
                    className="w-full inline-flex items-center justify-center h-10 px-4 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted transition-colors text-foreground"
                  >
                    Explore Matching Scholarships
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl border border-border bg-card text-[11px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p>
                  MileStone provides objective counseling and information. We do not guarantee college admissions or publish unverified seat counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
