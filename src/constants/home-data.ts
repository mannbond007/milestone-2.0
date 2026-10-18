import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Briefcase,
  BookOpen,
  FileText,
  FlaskConical,
  HeartPulse,
  Pill,
  Leaf,
  Monitor,
  Calculator,
  Palette,
  Scale,
  Mic,
  Atom,
  type LucideIcon,
  Trophy,
  Users,
  Building,
  TrendingUp,
  Banknote,
  UserCheck,
  Target,
  Clock,
  Award,
  Rocket,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";

/* ========================================
   SCHOLARSHIP CATEGORIES
   ======================================== */
export interface ScholarshipCategory {
  id: string;
  title: string;
  description: string;
  amount: string;
  eligibility: string;
  icon: LucideIcon;
  color: string;
}

export const scholarshipCategories: ScholarshipCategory[] = [
  {
    id: "mbbs",
    title: "MBBS",
    description: "Full scholarship support for aspiring medical professionals pursuing MBBS.",
    amount: "Up to ₹5,00,000",
    eligibility: "NEET qualified, 60%+ in 12th",
    icon: Stethoscope,
    color: "#EF4444",
  },
  {
    id: "bams",
    title: "BAMS",
    description: "Ayurvedic medicine scholarship for students passionate about traditional healing.",
    amount: "Up to ₹3,00,000",
    eligibility: "NEET qualified, 55%+ in 12th",
    icon: HeartPulse,
    color: "#10B981",
  },
  {
    id: "btech",
    title: "B.Tech",
    description: "Engineering excellence scholarship for future tech innovators and builders.",
    amount: "Up to ₹4,00,000",
    eligibility: "JEE qualified or 70%+ in 12th PCM",
    icon: Cpu,
    color: "#3B82F6",
  },
  {
    id: "bba",
    title: "BBA",
    description: "Business administration scholarship for budding entrepreneurs and managers.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th",
    icon: Briefcase,
    color: "#8B5CF6",
  },
  {
    id: "ba",
    title: "BA",
    description: "Arts & humanities scholarship for creative minds and critical thinkers.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th",
    icon: BookOpen,
    color: "#F59E0B",
  },
  {
    id: "bsc",
    title: "B.Sc",
    description: "Science scholarship for students exploring the frontiers of scientific knowledge.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th Science",
    icon: FlaskConical,
    color: "#06B6D4",
  },
  {
    id: "neet",
    title: "NEET Coaching",
    description: "Premium coaching scholarship for NEET aspirants from underprivileged backgrounds.",
    amount: "Up to ₹2,50,000",
    eligibility: "Class 11/12 Science student",
    icon: Atom,
    color: "#EC4899",
  },
  {
    id: "iit-jee",
    title: "IIT-JEE Coaching",
    description: "Elite coaching scholarship to help students crack JEE and enter top IITs.",
    amount: "Up to ₹3,00,000",
    eligibility: "Class 11/12 PCM student",
    icon: Rocket,
    color: "#F97316",
  },
  {
    id: "nursing",
    title: "Nursing",
    description: "Healthcare scholarship for students pursuing nursing and patient care careers.",
    amount: "Up to ₹2,00,000",
    eligibility: "55%+ in 12th Science",
    icon: HeartPulse,
    color: "#14B8A6",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "Pharmaceutical sciences scholarship for future pharmacists and researchers.",
    amount: "Up to ₹2,50,000",
    eligibility: "60%+ in 12th PCB",
    icon: Pill,
    color: "#6366F1",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Agricultural sciences scholarship for students committed to food security.",
    amount: "Up to ₹2,00,000",
    eligibility: "55%+ in 12th",
    icon: Leaf,
    color: "#22C55E",
  },
  {
    id: "bca",
    title: "BCA",
    description: "Computer applications scholarship for aspiring software developers.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th with Maths",
    icon: Monitor,
    color: "#0EA5E9",
  },
  {
    id: "bcom",
    title: "B.Com",
    description: "Commerce scholarship for students building careers in finance and accounting.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th Commerce",
    icon: Calculator,
    color: "#A855F7",
  },
  {
    id: "design",
    title: "Design",
    description: "Creative design scholarship for students in UI/UX, fashion, and graphic design.",
    amount: "Up to ₹2,00,000",
    eligibility: "Portfolio + 55%+ in 12th",
    icon: Palette,
    color: "#E11D48",
  },
  {
    id: "law",
    title: "Law",
    description: "Legal studies scholarship for future advocates and justice seekers.",
    amount: "Up to ₹3,00,000",
    eligibility: "CLAT qualified or 60%+ in 12th",
    icon: Scale,
    color: "#D97706",
  },
  {
    id: "journalism",
    title: "Journalism",
    description: "Media & communication scholarship for aspiring journalists and storytellers.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th",
    icon: Mic,
    color: "#7C3AED",
  },
];

/* ========================================
   STATISTICS
   ======================================== */
export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export const statistics: Statistic[] = [
  { label: "Students Supported", value: 15000, suffix: "+", icon: Users },
  { label: "Scholarships Awarded", value: 5200, suffix: "+", icon: Trophy },
  { label: "Partner Institutions", value: 1750, suffix: "+", icon: Building },
  { label: "Success Rate", value: 96, suffix: "%", icon: TrendingUp },
];

/* ========================================
   FEATURED COURSES
   ======================================== */
export interface FeaturedCourse {
  id: string;
  title: string;
  duration: string;
  scholarshipAmount: string;
  description: string;
  icon: LucideIcon;
}

export const featuredCourses: FeaturedCourse[] = [
  {
    id: "mbbs",
    title: "MBBS",
    duration: "5.5 Years",
    scholarshipAmount: "Up to ₹5,00,000",
    description: "Become a certified medical doctor with full financial support throughout your journey.",
    icon: Stethoscope,
  },
  {
    id: "btech",
    title: "B.Tech Engineering",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹4,00,000",
    description: "Master cutting-edge technology and engineering with industry-aligned curriculum.",
    icon: Cpu,
  },
  {
    id: "law",
    title: "BA LLB / LLB",
    duration: "5 / 3 Years",
    scholarshipAmount: "Up to ₹3,00,000",
    description: "Build a career in law with access to top legal institutions and mentorship.",
    icon: Scale,
  },
  {
    id: "nursing",
    title: "B.Sc Nursing",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹2,00,000",
    description: "Join the healthcare frontlines with comprehensive nursing education support.",
    icon: HeartPulse,
  },
  {
    id: "pharmacy",
    title: "B.Pharm",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹2,50,000",
    description: "Explore pharmaceutical sciences with hands-on lab experience and mentorship.",
    icon: Pill,
  },
  {
    id: "bba",
    title: "BBA",
    duration: "3 Years",
    scholarshipAmount: "Up to ₹2,00,000",
    description: "Develop business acumen and leadership skills for the corporate world.",
    icon: Briefcase,
  },
];

/* ========================================
   BENEFITS
   ======================================== */
export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Financial Support",
    description: "Scholarship assistance, tuition fee support, fee waivers, educational rewards, and academic benefit programs for deserving students.",
    icon: Banknote,
  },
  {
    title: "Mentorship & Guidance",
    description: "Personalized mentorship, academic guidance, and career support from experienced educators and professionals.",
    icon: UserCheck,
  },
  {
    title: "Career & Admission Support",
    description: "Career counseling, college selection guidance, admission assistance, resume support, and future career planning.",
    icon: Target,
  },
  {
    title: "Competitive Exam Support",
    description: "Study resources, mock tests, mentorship, preparation guidance, and academic support for NEET, JEE, CUET, CLAT, SSC & other exams.",
    icon: FileText,
  },
  {
    title: "Skill Development Programs",
    description: "Workshops, training sessions, personality development, communication skills, and industry-oriented learning opportunities.",
    icon: Award,
  },
  {
    title: "Internship & Professional Exposure",
    description: "Internship opportunities, training programs, certification support, project guidance, and industry exposure initiatives.",
    icon: Briefcase,
  },
  {
    title: "Placement & Future Opportunities",
    description: "Career opportunity support, professional networking, placement assistance, and higher education guidance.",
    icon: Rocket,
  },
  {
    title: "Student Support Ecosystem",
    description: "A complete support platform focused on education, mentorship, growth, opportunities, and student success.",
    icon: Shield,
  },
];

/* ========================================
   SCHOLARSHIP PROCESS STEPS
   ======================================== */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const scholarshipProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Register Online",
    description: "Create your account, complete the application form, and register for the scholarship program.",
    icon: Users,
  },
  {
    step: 2,
    title: "Take the Scholarship Test",
    description: "Appear for the online/offline scholarship assessment test based on your selected course or category.\nThe selection process may include Phase 1 and Phase 2 evaluations.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Get Your Results",
    description: "Receive your scholarship test score, merit ranking, and eligibility status.",
    icon: Trophy,
  },
  {
    step: 4,
    title: "Choose Your Institution",
    description: "Select from listed partner universities, colleges, coaching institutes, or educational institutions participating in the program.",
    icon: Building,
  },
  {
    step: 5,
    title: "Complete Admission Process",
    description: "Eligible students may receive tuition fee concessions, scholarship-linked admission benefits, cashback support, fee waivers, or educational rewards based on merit rank, institution policy, and scholarship category.\nSome institutions may provide direct fee reductions during admission, while in certain cases scholarship/reward benefits may be processed after admission as per applicable terms and timelines.",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Receive Scholarship Benefits",
    description: "Selected students may receive scholarship support, educational rewards, cashback assistance, fee concessions, mentorship, or institutional benefits and begin their academic journey with continued guidance and support.",
    icon: GraduationCap,
  },
];

/* ========================================
   SUCCESS STORIES
   ======================================== */
export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  scholarship: string;
  quote: string;
  year: string;
  college: string;
  image?: string;
  subtitle?: string;
  fullStory?: string;
  currentEducation?: string;
  careerAspiration?: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Giridev Rabha",
    course: "Class 12",
    scholarship: "₹1,50,000",
    quote: "While the educational expenses of us two siblings was always a concern for my father, it grew even m... Read More",
    year: "2024",
    college: "Kamrup, Assam",
    image: "/scholars/giridev.png",
    subtitle: "Giridev Rabha, Class 12, Kamrup, Assam",
    fullStory: "While the educational expenses of us two siblings was always a concern for my father, it grew even more challenging when I was admitted to Class 11. The cost of books, uniform, and school fees became overwhelming. Getting the Milestone Scholarship was a huge turning point. It covered my educational expenses, allowing me to focus entirely on my studies without constantly worrying about the financial strain on my family. I am determined to complete my Class 12 with flying colors and pursue higher education to support my family. Milestone not only supported me financially but also gave me the mental peace to excel academically. My dream is to become a teacher and pay it forward to my community.",
    currentEducation: "Class 12",
    careerAspiration: "To become a Teacher"
  },
  {
    id: "2",
    name: "Radhe Raman",
    course: "M.A. in History",
    scholarship: "₹2,50,000",
    quote: "I was in need of financial assistance and mentorship to ensure quality education for myself. Through... Read More",
    year: "2024",
    college: "Noida",
    image: "/scholars/radhe.png",
    subtitle: "Radhe Raman, M.A. in History, Noida",
    fullStory: "I was in need of financial assistance and mentorship to ensure quality education for myself. Through the Milestone Scholarship, I was not only able to pay my tuition fees for my Master's degree in History but also found an incredible mentor who guided me through academic challenges and career planning. This support gave me the confidence to aim higher, and I am now preparing for civil services exams to contribute to society. The monthly mentorship calls and peer learning groups provided by Milestone were invaluable in building my critical thinking and public speaking skills.",
    currentEducation: "M.A. in History",
    careerAspiration: "To serve as a Civil Servant"
  },
  {
    id: "3",
    name: "Vishwajeet Ghosh",
    course: "MBA",
    scholarship: "₹4,00,000",
    quote: "Due to COVID-19, my father's business was shut for almost 3 months. This led to financial stress in ... Read More",
    year: "2024",
    college: "Symbiosis Institute of International Business, Pune",
    image: "/scholars/vishwajeet.png",
    subtitle: "Vishwajeet Ghosh, MBA (2nd Year), Symbiosis Institute of International Business, Pune",
    fullStory: "Due to COVID-19, my father's business was shut for almost 3 months. This led to financial stress in our family, and my dream of pursuing an MBA from a premier institute like Symbiosis was about to fall apart. That's when the Milestone Scholarship came as a lifesaver. It supported my second-year tuition fees and allowed me to continue my education. Today, I am placed at a leading financial consultancy, ready to kickstart my professional journey. The career readiness workshops, interview prep sessions, and access to corporate networks through Milestone made all the difference in my placement success.",
    currentEducation: "MBA (2nd Year)",
    careerAspiration: "To become a Financial Consultant"
  },
  {
    id: "4",
    name: "Priya B. K.",
    course: "B.Tech",
    scholarship: "60000/-",
    quote: "I came from a farmer's home, armed only with dreams. U-Go didn't just fund my education—it gave wings to my aspirations.",
    year: "2024",
    college: "MES College",
    image: "/scholars/priya_bk.png",
    subtitle: "Priya B. K., BTech In Civil Engineering",
    fullStory: "Born into a farmer's family, I grew up watching my father work tirelessly to provide for us. Education was my way out, my way forward—but financial struggles clung to me like a shadow. When I secured admission in Civil Engineering, the fees was beyond our reach. Getting the U-Go scholarship changed everything. It covered my course fees and gave wings to my aspirations. I am now working hard to join the Maharashtra Engineering Services (MES) and make my parents proud.",
    currentEducation: "BTech in Civil Engineering",
    careerAspiration: "To join the Maharashtra Engineering Services (MES) after graduation"
  },
  {
    id: "5",
    name: "Gauri P.A.",
    course: "Class 12",
    scholarship: "20000/-",
    quote: "From struggle to strength—Gauri's journey shines with purpose. Thanks to Omron Healthcare, she's coding her way to a brighter tomorrow.",
    year: "2024",
    college: "Noida Public School",
    image: "/scholars/gauri_pa.png",
    subtitle: "Gauri P.A., Class 12",
    fullStory: "Gauri and her brother were raised by their grandparents after losing their father at a young age. While their grandfather's pension provided some support, his passing left the family in a hopeless situation. Omron Healthcare scholarship supported Gauri's education in Class 12, allowing her to stay focused on her goal of becoming a software developer and coder, turning her struggles into strength.",
    currentEducation: "Class 12",
    careerAspiration: "To become an Engineer"
  },
  {
    id: "6",
    name: "Nikitha Babu B. A.",
    course: "Class 11",
    scholarship: "20000/-",
    quote: "When education meets opportunity—Nikitha's story shines brighter with support from Omron Healthcare.",
    year: "2024",
    college: "Pune Academy",
    image: "/scholars/nikitha_babu.png",
    subtitle: "Nikitha Babu B. A., Class 11",
    fullStory: "Nikitha comes from a hardworking family. Her father runs a small shop, and her mother takes care of the home. Despite financial difficulties, her parents have ensured that her education continues without any gaps. The support from Omron Healthcare scholarship relieved the family's burden, allowing Nikitha to pursue her dream of entering engineering.",
    currentEducation: "Class 11",
    careerAspiration: "To become an Engineer"
  },
  {
    id: "7",
    name: "Sushma V.",
    course: "B.Com",
    scholarship: "30000/-",
    quote: "Sushma is paving her way to a bright future in commerce with Milestone guidance and financial backing.",
    year: "2024",
    college: "Bangalore University",
    image: "/scholars/sushma_v.png",
    subtitle: "Sushma V., B.Com",
    fullStory: "Sushma has always excelled in academics, but her family's low income made it hard to dream of university. The Milestone scholarship provided her with financial support for her Bachelor of Commerce degree, setting her up to become an accountant and support her parents.",
    currentEducation: "B.Com (1st Year)",
    careerAspiration: "To become a Chartered Accountant"
  },
  {
    id: "8",
    name: "Trisha P.",
    course: "B.Sc",
    scholarship: "25000/-",
    quote: "Trisha's passion for scientific research is supported by a Milestone Academic Excellence scholarship.",
    year: "2024",
    college: "Kolkata College",
    image: "/scholars/trisha_p.png",
    subtitle: "Trisha P., B.Sc",
    fullStory: "Trisha wants to pursue research in biotechnology. The Milestone Academic Excellence scholarship covers her laboratory and semester fees, allowing her to gain hands-on experience without financial hurdles.",
    currentEducation: "B.Sc in Biotechnology",
    careerAspiration: "To become a Scientific Researcher"
  },
  {
    id: "9",
    name: "Kiran K.",
    course: "BCA",
    scholarship: "35000/-",
    quote: "Kiran is designing software applications and cracking competitive exams with Milestone coaching support.",
    year: "2024",
    college: "Hyderabad Institute",
    image: "/scholars/kiran_k.png",
    subtitle: "Kiran K., BCA",
    fullStory: "Kiran is an aspiring coder and software designer. With the Milestone scholarship, he got admission to a top BCA program and is now building his own projects and preparing for software engineering roles.",
    currentEducation: "BCA (3rd Year)",
    careerAspiration: "To become a Software Architect"
  }
];

/* ========================================
   FAQs
   ======================================== */
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Who is eligible for the Milestone Scholarship?",
    answer: "Students from economically weaker sections who have scored 55% or above in their last qualifying examination are eligible. Specific eligibility varies by scholarship category.",
  },
  {
    question: "How do I apply for the scholarship?",
    answer: "Register on our platform, fill out the application form with your academic details, upload required documents, and take the scholarship test. Our team will review your application within 7-10 working days.",
  },
  {
    question: "What documents are required?",
    answer: "You'll need your Aadhaar card, last exam marksheet, passport-size photograph, and any relevant certificates (caste certificate, income certificate, etc.).",
  },
  {
    question: "Is there a scholarship test?",
    answer: "Yes, all applicants must take an online scholarship assessment test. The test evaluates your aptitude and subject knowledge relevant to your chosen course.",
  },
  {
    question: "When will I receive the scholarship amount?",
    answer: "Approved scholarship amounts are disbursed directly to the institution or to the student's bank account within 30 days of final approval.",
  },
  {
    question: "Can I apply for multiple scholarships?",
    answer: "You can apply for one scholarship at a time. However, if your first application is not approved, you may apply for a different category in the next cycle.",
  },
];

/* ========================================
   BLOG PREVIEWS
   ======================================== */
import { blogPosts } from "@/constants/blog-data";

export interface BlogPreview {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPreviews: BlogPreview[] = blogPosts.map((post) => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  slug: post.slug,
  date: post.date,
  readTime: post.readTime,
  category: post.category,
  image: post.image,
}));

/* ========================================
   MENTORSHIP
   ======================================== */
export interface Mentor {
  id: string;
  name: string;
  designation: string;
  institution: string;
  specialization: string;
  experience: string;
  description: string;
  image: string;
  expertiseTags: string[];
  menteesCount: string;
  rating: number;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Arun Mehta",
    designation: "Former AIIMS Professor",
    institution: "AIIMS New Delhi",
    specialization: "Medical Sciences",
    experience: "20+ years",
    description: "Former AIIMS professor guiding MBBS and NEET-PG aspirants toward successful clinical and research careers.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["MBBS & NEET PG", "Clinical Research", "Career Roadmap"],
    menteesCount: "1,200+",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Prof. Sneha Iyer",
    designation: "Senior Tech Researcher",
    institution: "IIT Bombay Alumna",
    specialization: "Engineering & Tech",
    experience: "15+ years",
    description: "IIT alumna mentoring B.Tech and M.Tech students in cutting-edge software engineering and AI domains.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["B.Tech Mentorship", "System Design", "AI & Robotics"],
    menteesCount: "950+",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Adv. Rajesh Nair",
    designation: "Senior Advocate",
    institution: "Supreme Court of India",
    specialization: "Law & Legal Studies",
    experience: "18+ years",
    description: "Supreme Court advocate providing expert career roadmap, judicial preparation, and courtroom guidance.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["CLAT & Judiciary", "Constitutional Law", "Court Mentorship"],
    menteesCount: "800+",
    rating: 4.8,
  },
  {
    id: "4",
    name: "Dr. Ananya Roy",
    designation: "Executive Business Coach",
    institution: "IIM Ahmedabad Alumna",
    specialization: "Business & Management",
    experience: "16+ years",
    description: "IIM alumna empowering management aspirants with corporate strategy, CAT strategy, and leadership development.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["CAT / MBA Prep", "Corporate Strategy", "Leadership"],
    menteesCount: "1,100+",
    rating: 4.9,
  },
  {
    id: "5",
    name: "Prof. Vikram Sharma",
    designation: "Ex-Google AI Lead",
    institution: "IISc Bangalore Alumnus",
    specialization: "Computer Science & AI",
    experience: "14+ years",
    description: "Tech innovator mentoring students in artificial intelligence, machine learning, and scalable software architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["Full-Stack Dev", "Machine Learning", "Tech Interviews"],
    menteesCount: "1,400+",
    rating: 5.0,
  },
  {
    id: "6",
    name: "CA Meera Deshmukh",
    designation: "Senior Partner & FCA",
    institution: "ICAI Fellow Member",
    specialization: "Commerce & Finance",
    experience: "17+ years",
    description: "Chartered Accountant guiding commerce students toward successful careers in financial auditing and corporate taxation.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    expertiseTags: ["CA / CS Roadmap", "Financial Audit", "Tax Advisory"],
    menteesCount: "890+",
    rating: 4.9,
  },
];

/* ========================================
   IMPORTANT DATES
   ======================================== */
export interface ImportantDate {
  title: string;
  date: string;
  description: string;
  status: "upcoming" | "ongoing" | "completed";
  icon: LucideIcon;
}

export const importantDates: ImportantDate[] = [
  {
    title: "Registration Opens",
    date: "January 15, 2025",
    description: "Online registration portal opens for all scholarship categories.",
    status: "completed",
    icon: Users,
  },
  {
    title: "Application Deadline",
    date: "March 31, 2025",
    description: "Last date to submit completed applications with all documents.",
    status: "completed",
    icon: FileText,
  },
  {
    title: "Scholarship Test",
    date: "April 20, 2025",
    description: "Online scholarship assessment test for all registered candidates.",
    status: "completed",
    icon: BookOpen,
  },
  {
    title: "Results Announcement",
    date: "May 15, 2025",
    description: "Publication of scholarship test results and merit list.",
    status: "ongoing",
    icon: Trophy,
  },
  {
    title: "Counselling Begins",
    date: "June 1, 2025",
    description: "One-on-one counselling sessions for selected candidates.",
    status: "upcoming",
    icon: UserCheck,
  },
  {
    title: "Scholarship Disbursement",
    date: "July 15, 2025",
    description: "Scholarship amounts disbursed to approved candidates.",
    status: "upcoming",
    icon: Shield,
  },
];
