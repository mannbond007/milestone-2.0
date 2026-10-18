import {
  GraduationCap,
  BookOpen,
  FileText,
  Calendar,
  HelpCircle,
  Trophy,
  Newspaper,
  Phone,
  Home,
  Info,
  Target,
  Stethoscope,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export interface NavDropdownItem {
  key: string;
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  dropdown?: NavDropdownItem[];
}

export const navigationItems: NavItem[] = [
  {
    key: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    key: "scholarships",
    label: "Scholarships",
    href: "/scholarships",
    icon: GraduationCap,
    dropdown: [
      {
        key: "scholarshipsAfter12th",
        label: "Scholarships after Class 12",
        href: "/scholarships?qualification=after-12th",
        description: "Opportunities for students completing senior secondary education.",
      },
      {
        key: "scholarshipsAfterGraduation",
        label: "Scholarships after Graduation",
        href: "/scholarships?qualification=after-graduation",
        description: "Post-graduate aid and professional degree scholarships.",
      },
      {
        key: "scholarshipTest",
        label: "Scholarship Test",
        href: "/scholarship-test",
        description: "Details on eligibility, syllabus, and upcoming test schedules.",
      },
      {
        key: "allScholarships",
        label: "All Scholarships",
        href: "/scholarships",
        description: "Browse the complete repository of scholarship programs.",
      },
    ],
  },
  {
    key: "courses",
    label: "Courses",
    href: "/courses",
    icon: BookOpen,
    dropdown: [
      {
        key: "mbbsIndia",
        label: "MBBS in India",
        href: "/courses/mbbs-india",
        description: "Government & recognized private medical college guidance.",
        icon: Stethoscope,
      },
      {
        key: "mbbsAbroad",
        label: "MBBS Abroad",
        href: "/courses/mbbs-abroad",
        description: "MCI/NMC recognized international universities.",
        icon: Stethoscope,
      },
      {
        key: "bds",
        label: "BDS (Dental)",
        href: "/courses/bds",
        description: "Dental surgery education pathways and college data.",
      },
      {
        key: "bams",
        label: "BAMS (Ayurveda)",
        href: "/courses/bams",
        description: "Ayurvedic Medicine & Surgery opportunities.",
      },
      {
        key: "bhms",
        label: "BHMS (Homeopathy)",
        href: "/courses/bhms",
        description: "Homeopathic medicine pathways & government seats.",
      },
      {
        key: "bums",
        label: "BUMS (Unani)",
        href: "/courses/bums",
        description: "Unani Medicine & Surgery college programs.",
      },
      {
        key: "engineering",
        label: "Engineering",
        href: "/courses/engineering",
        description: "B.Tech & engineering disciplines across accredited institutes.",
        icon: Briefcase,
      },
      {
        key: "management",
        label: "MBA / PGDM",
        href: "/courses/management",
        description: "Post-graduate management education & counselling.",
        icon: Briefcase,
      },
      {
        key: "allCourses",
        label: "All Courses",
        href: "/courses",
        description: "View all educational pathways covered by MileStone.",
      },
    ],
  },
  {
    key: "howToApply",
    label: "How to Apply",
    href: "/how-to-apply",
    icon: FileText,
  },
  {
    key: "achievers",
    label: "Achievers",
    href: "/achievers",
    icon: Trophy,
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
  {
    key: "aboutUs",
    label: "About Us",
    href: "/about",
    icon: Info,
    dropdown: [
      {
        key: "aboutProgram",
        label: "About MileStone",
        href: "/about",
        description: "Our purpose, organization profile, and mission.",
      },
      {
        key: "visionMission",
        label: "Vision & Mission",
        href: "/vision-mission",
        description: "Guiding principles for equitable education access.",
      },
      {
        key: "importantDates",
        label: "Important Dates",
        href: "/important-dates",
        description: "Verified academic deadlines, test schedules, and events.",
      },
      {
        key: "faqs",
        label: "FAQs",
        href: "/faqs",
        description: "Frequently asked questions regarding scholarships and guidance.",
      },
    ],
  },
];

export const footerLinks = {
  quickLinks: [
    { key: "aboutProgram", label: "About MileStone", href: "/about" },
    { key: "howToApply", label: "How to Apply", href: "/how-to-apply" },
    { key: "importantDates", label: "Important Dates", href: "/important-dates" },
    { key: "faqs", label: "FAQs", href: "/faqs" },
    { key: "contactUs", label: "Contact Us", href: "/contact" },
  ],
  scholarships: [
    { key: "scholarshipsAfter12th", label: "Scholarships after Class 12", href: "/scholarships?qualification=after-12th" },
    { key: "scholarshipsAfterGraduation", label: "Scholarships after Graduation", href: "/scholarships?qualification=after-graduation" },
    { key: "scholarshipTest", label: "Scholarship Test Guidelines", href: "/scholarship-test" },
    { key: "allScholarships", label: "All Scholarships Directory", href: "/scholarships" },
  ],
  courses: [
    { key: "mbbsIndia", label: "MBBS in India", href: "/courses/mbbs-india" },
    { key: "mbbsAbroad", label: "MBBS Abroad", href: "/courses/mbbs-abroad" },
    { key: "bds", label: "BDS / BAMS / BHMS / BUMS", href: "/courses/medical" },
    { key: "engineering", label: "Engineering (B.Tech)", href: "/courses/engineering" },
    { key: "management", label: "Management (MBA/PGDM)", href: "/courses/management" },
    { key: "allCourses", label: "All Courses Overview", href: "/courses" },
  ],
  contact: {
    phone: "+91 95544 66699",
    email: "milestonescholarship@gmail.com",
    address: "Lucknow, Uttar Pradesh, India",
    hours: "Monday - Saturday: 9:30 AM - 6:00 PM IST",
  },
};
