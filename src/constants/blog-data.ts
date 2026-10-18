export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: BlogAuthor;
  tags: string[];
  contentHtml: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Scholarships for Medical Students in 2025",
    subtitle: "A comprehensive guide to financial aid, eligibility, maximum grant amounts, and application steps for MBBS and medical aspirants across India.",
    excerpt: "Discover the most valuable scholarship opportunities available for aspiring medical professionals across India.",
    slug: "top-scholarships-medical-students-2025",
    date: "2025-04-15",
    readTime: "8 min read",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Arun Mehta",
      role: "Medical Education Director & Former AIIMS Professor",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["MBBS Scholarships", "NEET Medical Aid", "Financial Support", "Medical Colleges"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Pursuing a career in medical sciences is one of the most noble yet financially demanding academic journeys in India. With private college fees reaching upwards of ₹50 Lakhs to ₹1 Crore and even government college expenses adding up through hostel and laboratory fees, securing financial aid is critical for deserving aspirants.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200">
        <h4 class="font-bold text-base flex items-center gap-2 mb-2">
          <span>💡</span> Key Takeaway for 2025 Candidates
        </h4>
        <p class="text-sm leading-relaxed">
          Over 65% of medical scholarships in India require candidate registration prior to NEET counselling completion. Early preparation of income certificates, marksheets, and NEET admit cards is essential for seamless grant approval.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        1. Milestone Medical Excellence Scholarship
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Offered directly under the Milestone Scholarship Ecosystem, this scheme provides full or partial tuition coverage, hostel fee waivers, and book stipends for NEET-qualified students. Selection is based on merit rank and family income status.
      </p>
      <ul class="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
        <li><strong>Grant Amount:</strong> Up to ₹5,00,000 over the course of MBBS/BAMS duration</li>
        <li><strong>Eligibility:</strong> Minimum 60% in 12th PCB & qualified NEET score</li>
        <li><strong>Application Window:</strong> Open Year-Round (Phase 1 & Phase 2)</li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        2. Central Sector Scheme of Scholarships (CSCSS)
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Managed by the Ministry of Education, Government of India, CSCSS supports top percentile students pursuing professional medical courses at recognized institutions across the country.
      </p>
      <ul class="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
        <li><strong>Grant Amount:</strong> ₹20,000 per annum for professional degree courses</li>
        <li><strong>Eligibility:</strong> Above 80th percentile in Class 12 board exam with annual family income below ₹4.5 Lakhs</li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        3. All India Pre-Medical Scholarship Test (AIPMST Qualified)
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        AIPMST provides financial grant assistance to meritorious candidates taking admission into MBBS, BDS, BAMS, BHMS, and B.Sc Nursing programs nationwide.
      </p>
      <ul class="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
        <li><strong>Grant Amount:</strong> Full tuition fee waiver for top 1,000 rankers</li>
        <li><strong>Eligibility:</strong> Passed 10+2 with Physics, Chemistry, Biology & English with 60% marks</li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        4. Bharti Healthcare & Medical Scholarship
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        A philanthropy-backed initiative aimed at supporting female and rural medical students aspiring for clinical degrees in state government colleges.
      </p>
      <ul class="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
        <li><strong>Grant Amount:</strong> Up to ₹3,50,000 per academic year</li>
        <li><strong>Eligibility:</strong> Enrolled in recognized Govt. Medical College (GMC)</li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        5. FAEA Medical & Life Sciences Grant
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        The Foundation for Academic Excellence and Access (FAEA) sponsors economically underprivileged candidates belonging to SC/ST/BPL categories entering undergraduate medical education.
      </p>

      <div class="my-10 overflow-x-auto">
        <table class="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-border">
          <thead>
            <tr class="bg-secondary/80 text-foreground font-bold border-b border-border">
              <th class="p-3.5">Scholarship Name</th>
              <th class="p-3.5">Max Amount</th>
              <th class="p-3.5">Target Course</th>
              <th class="p-3.5">Key Requirement</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-muted-foreground">
            <tr class="hover:bg-secondary/40">
              <td class="p-3.5 font-semibold text-foreground">Milestone Medical Grant</td>
              <td class="p-3.5 text-accent font-bold">₹5,00,000</td>
              <td class="p-3.5">MBBS / BAMS</td>
              <td class="p-3.5">NEET Qualified + 60% in 12th</td>
            </tr>
            <tr class="hover:bg-secondary/40">
              <td class="p-3.5 font-semibold text-foreground">CSCSS Govt. Scheme</td>
              <td class="p-3.5 text-accent font-bold">₹20,000/yr</td>
              <td class="p-3.5">MBBS / BDS</td>
              <td class="p-3.5">Top 20% in Board Exam</td>
            </tr>
            <tr class="hover:bg-secondary/40">
              <td class="p-3.5 font-semibold text-foreground">AIPMST National Test</td>
              <td class="p-3.5 text-accent font-bold">100% Tuition</td>
              <td class="p-3.5">All Medical Degrees</td>
              <td class="p-3.5">AIPMST Merit Rank</td>
            </tr>
            <tr class="hover:bg-secondary/40">
              <td class="p-3.5 font-semibold text-foreground">Tata Trust Medical Grant</td>
              <td class="p-3.5 text-accent font-bold">₹2,50,000</td>
              <td class="p-3.5">MBBS / Post-Grad</td>
              <td class="p-3.5">Family Income &lt; ₹4 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        Step-by-Step Application Roadmap
      </h2>
      <ol class="list-decimal pl-6 text-muted-foreground space-y-3 mb-8">
        <li><strong>Verify Eligibility:</strong> Check domicile certificate, board percentage, and NEET rank criteria.</li>
        <li><strong>Assemble Documentation:</strong> Prepare scanned copies of Class 10 & 12 marksheets, NEET scorecard, Aadhaar Card, Income Certificate, and bank passbook.</li>
        <li><strong>Submit Application Online:</strong> Register on official portals before deadlines. For Milestone scholarships, fill out the online form on our platform.</li>
        <li><strong>Verification & Interview:</strong> Complete telephonic or face-to-face document verification upon shortlisting.</li>
      </ol>

      <blockquote class="my-8 p-6 italic border-l-4 border-accent bg-secondary/50 rounded-r-2xl text-foreground font-medium">
        "Financial constraints should never stand between a passionate student and their stethoscope. By leveraging government schemes and private grants, medical aspirants can focus 100% on saving lives."
        <span class="block text-xs not-italic font-bold text-accent mt-2">— Dr. Arun Mehta, Medical Education Director</span>
      </blockquote>
    `,
  },
  {
    id: "2",
    title: "How to Crack Scholarship Tests: Expert Tips & Strategies",
    subtitle: "Proven revision strategies, exam-day time management, and subject-wise preparation blueprints from scholarship test toppers.",
    excerpt: "Learn proven strategies and preparation techniques from scholarship test toppers and education experts.",
    slug: "crack-scholarship-tests-expert-tips",
    date: "2025-04-10",
    readTime: "7 min read",
    category: "Preparation",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prof. Sneha Iyer",
      role: "Head of Academic Research & IIT Alumna",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Test Preparation", "Study Tips", "Competitive Exams", "Merit Rank"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Appearing for competitive scholarship assessment tests requires a strategic blend of accurate conceptual clarity, speed management, and smart question selection. Whether you are attempting tests for engineering, medical coaching, or general higher education scholarships, systematic preparation will significantly boost your percentile score.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200">
        <h4 class="font-bold text-base flex items-center gap-2 mb-2">
          <span>🎯</span> Pro Tip from Test Designers
        </h4>
        <p class="text-sm leading-relaxed">
          Most scholarship tests place 40% weightage on core fundamentals, 40% on application problems, and 20% on logical reasoning. Mastering core NCERT concepts alone guarantees a qualifying score.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        1. Master the Exam Pattern & Syllabus
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Before diving into study sessions, download the official syllabus for your target scholarship test. Breakdown topics into three categories: Strong, Moderate, and Weak. Prioritize weak high-weightage topics during early preparation cycles.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        2. Execute the 3-Pass Exam Technique
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        During the exam, divide your test time into three distinct passes:
      </p>
      <ul class="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
        <li><strong>Pass 1 (0 to 40 mins):</strong> Solve all immediate 100% confidence questions across sections. Skip long calculations.</li>
        <li><strong>Pass 2 (40 to 90 mins):</strong> Tackle moderate difficulty questions requiring step-by-step computation.</li>
        <li><strong>Pass 3 (Final 30 mins):</strong> Attempt tricky analytical problems while double-checking for bubbling/clicking errors.</li>
      </ul>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        3. Subject-Specific Revision Plan
      </h2>
      <div class="grid sm:grid-cols-2 gap-4 my-6">
        <div class="p-5 rounded-xl bg-secondary/60 border border-border/60">
          <h4 class="font-bold text-foreground mb-2">Mathematics & Physics</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Maintain a formula handbook. Practice at least 30 numerical problems daily to hone speed and precision.</p>
        </div>
        <div class="p-5 rounded-xl bg-secondary/60 border border-border/60">
          <h4 class="font-bold text-foreground mb-2">Chemistry & Biology</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Focus on NCERT line-by-line reading, named reactions, biological diagrams, and periodic table trends.</p>
        </div>
      </div>

      <blockquote class="my-8 p-6 italic border-l-4 border-accent bg-secondary/50 rounded-r-2xl text-foreground font-medium">
        "Speed without accuracy leads to negative marks. Focus on building consistency through timed mock tests twice a week."
        <span class="block text-xs not-italic font-bold text-accent mt-2">— Prof. Sneha Iyer, IIT Bombay Alumna</span>
      </blockquote>
    `,
  },
  {
    id: "3",
    title: "Career Guidance: Choosing the Right Course After 12th",
    subtitle: "Navigate academic choices across Science, Commerce, and Arts with expert stream analysis and future job demand insights.",
    excerpt: "A comprehensive guide to help students make informed decisions about their higher education path.",
    slug: "career-guidance-choosing-course-after-12th",
    date: "2025-04-05",
    readTime: "6 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Ananya Roy",
      role: "Career Counselor & IIM Alumna",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Career Counseling", "After 12th Courses", "Higher Education", "Skill Development"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Completing Class 12 is a pivotal milestone that sets the trajectory for your professional career. With hundreds of degree programs, vocational certifications, and specialized streams available today, making an informed choice aligned with your aptitude and financial backing is vital.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        1. Science Stream Pathways (PCM & PCB)
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Beyond conventional MBBS and B.Tech options, modern science graduates have access to high-growth fields including Artificial Intelligence, Biotechnology, Data Science, Cyber Security, Agricultural Sciences, and Pharmacy.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        2. Commerce & Financial Services
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        For students interested in economics, trade, and business administration, options like B.Com (Hons), BBA, CA (Chartered Accountancy), CS (Company Secretary), and Financial Risk Management (FRM) offer robust long-term career prospects.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        3. Humanities, Arts & Creative Design
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Liberal arts, BA in International Relations, Journalism & Mass Communication, Digital Marketing, UI/UX Design, and Integrated Law (BA LLB) have emerged as highly dynamic, well-paying career options.
      </p>

      <blockquote class="my-8 p-6 italic border-l-4 border-accent bg-secondary/50 rounded-r-2xl text-foreground font-medium">
        "Choose a field where your genuine interest intersects with high market demand. Never select a degree purely due to peer pressure."
        <span class="block text-xs not-italic font-bold text-accent mt-2">— Dr. Ananya Roy, Executive Business Coach</span>
      </blockquote>
    `,
  },
  {
    id: "4",
    title: "Ultimate IIT-JEE 2025 Preparation Strategy",
    subtitle: "A step-by-step 12-month blueprint for cracking JEE Main and JEE Advanced with top AIR percentile scores.",
    excerpt: "Master the roadmap to cracking IIT-JEE with structured time tables, book lists, and revision strategies.",
    slug: "iit-jee-preparation-strategy-2025",
    date: "2025-04-01",
    readTime: "9 min read",
    category: "JEE Prep",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prof. Vikram Sharma",
      role: "Tech Innovator & IISc Alumnus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["IIT-JEE", "Engineering Aspirants", "Exam Blueprints", "Mathematics"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Cracking the Joint Entrance Examination (JEE) to secure a seat in India's premier Indian Institutes of Technology (IITs) demands relentless discipline, smart study strategies, and continuous self-evaluation.
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        Phase 1: Conceptual Foundation (Months 1–6)
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Complete your NCERT textbooks for Physics, Chemistry, and Mathematics thoroughly. Solve standard reference books like H.C. Verma (Concepts of Physics), Irodov select problems, and M.S. Chouhan (Organic Chemistry).
      </p>

      <h2 class="text-2xl font-bold text-primary dark:text-white mt-10 mb-4">
        Phase 2: Rigorous Mock Testing (Months 7–10)
      </h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Attempt full-length 3-hour computer-based mock tests twice every week. Analyze your mistake notebook meticulously to eliminate calculation slip-ups and conceptual misunderstandings.
      </p>
    `,
  },
  {
    id: "5",
    title: "Top Women in STEM Scholarships in India 2025",
    subtitle: "Empowering female engineers, scientists, and healthcare pioneers with dedicated national financial grants.",
    excerpt: "Discover dedicated scholarship programs designed to support female students pursuing Science, Tech, Engineering, and Math.",
    slug: "women-in-stem-scholarships-india",
    date: "2025-03-25",
    readTime: "6 min read",
    category: "Diversity & STEM",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prof. Sneha Iyer",
      role: "Head of Academic Research & IIT Alumna",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Women in STEM", "Girls Scholarships", "Engineering Aid", "Female Empowerment"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Female representation in Science, Technology, Engineering, and Mathematics (STEM) is rapidly transforming India's innovation ecosystem. Multiple corporate foundations and government departments offer exclusive grants to support women in technical degrees.
      </p>
    `,
  },
  {
    id: "6",
    title: "Complete Document Checklist for Financial Aid",
    subtitle: "Avoid common application rejection reasons by organizing income certificates, marksheets, and bank verifications in advance.",
    excerpt: "A step-by-step checklist of essential documents needed to successfully apply for government and private scholarships.",
    slug: "financial-aid-documents-checklist",
    date: "2025-03-18",
    readTime: "5 min read",
    category: "Application Guide",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Adv. Rajesh Nair",
      role: "Senior Legal Advisor",
      avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Documentation", "Application Guide", "Income Proof", "Verification"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Over 30% of scholarship applications are rejected simply due to missing, unclear, or improperly formatted documentation. Ensuring that all legal certificates are updated before applying guarantees hassle-free grant approval.
      </p>
    `,
  },
  {
    id: "7",
    title: "How to Write a Winning Scholarship Essay & SOP",
    subtitle: "Stand out in Phase 2 evaluations with an authentic, compelling Statement of Purpose detailing your academic goals.",
    excerpt: "Learn how to write a compelling Statement of Purpose and essay that guarantees selection in top scholarship interviews.",
    slug: "how-to-write-winning-scholarship-essay",
    date: "2025-03-12",
    readTime: "6 min read",
    category: "Essay & SOP",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Ananya Roy",
      role: "Career Counselor & IIM Alumna",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Scholarship SOP", "Essay Writing", "Interview Tips", "Application Strategy"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Your Statement of Purpose (SOP) is your voice in the selection committee room. While marksheets demonstrate past academic merit, your essay conveys your drive, resilience, and vision for the future.
      </p>
    `,
  },
  {
    id: "8",
    title: "B.Tech vs B.Sc Computer Science: Which Is Right?",
    subtitle: "A detailed comparison of curriculum depth, engineering skills, fee structures, and placement salaries.",
    excerpt: "Compare curriculum differences, career scope, and fee structures between B.Tech CSE and B.Sc Computer Science degrees.",
    slug: "btech-vs-bsc-computer-science-comparison",
    date: "2025-03-05",
    readTime: "7 min read",
    category: "Course Guide",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prof. Vikram Sharma",
      role: "Ex-Google AI Lead & IISc Alumnus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Computer Science", "B.Tech", "Degree Comparison", "Software Engineering"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Choosing between a 4-year B.Tech in Computer Science and a 3-year B.Sc in Computer Science is a decision many tech aspirants face. Understanding course focus and career outcomes is essential before applying for fee grants.
      </p>
    `,
  },
  {
    id: "9",
    title: "Chartered Accountancy (CA) Scholarship Guide 2025",
    subtitle: "Financial aid for ICAI Foundation, Intermediate, and Final aspirants alongside mentorship from senior FCAs.",
    excerpt: "Explore financial aid schemes and mentorship programs designed for aspiring Chartered Accountants across India.",
    slug: "ca-chartered-accountancy-scholarship-guide-2025",
    date: "2025-02-28",
    readTime: "5 min read",
    category: "Commerce & CA",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "CA Meera Deshmukh",
      role: "Senior Partner & FCA",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["CA Exam", "Commerce Aid", "ICAI Scholarships", "Finance Careers"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Pursuing Chartered Accountancy requires commitment and rigorous preparation. Milestone offers dedicated fee reimbursements and articleship mentorship for meritorious commerce students.
      </p>
    `,
  },
  {
    id: "10",
    title: "Scholarship Test Syllabus & Exam Blueprint 2025",
    subtitle: "Subject-wise marking schemes, chapter weightages, and previous year cutoff trends for all Milestone categories.",
    excerpt: "Complete syllabus breakdown, chapter weightage, and marking scheme for the Milestone Scholarship Assessment Test.",
    slug: "scholarship-test-syllabus-exam-blueprint-2025",
    date: "2025-02-20",
    readTime: "6 min read",
    category: "Test Blueprint",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prof. Sneha Iyer",
      role: "Head of Academic Research & IIT Alumna",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Test Syllabus", "Exam Blueprint", "Marks Distribution", "Preparation"],
    contentHtml: `
      <p class="lead text-lg text-foreground/90 font-medium leading-relaxed mb-6">
        Understanding the exact marking scheme and topic distribution is the most effective way to maximize your score in the Milestone Scholarship Test.
      </p>
    `,
  },
];
