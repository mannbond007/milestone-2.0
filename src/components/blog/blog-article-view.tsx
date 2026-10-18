"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Copy, 
  Check, 
  Calculator, 
  HelpCircle, 
  Send, 
  User, 
  Download,
  Flame,
  Award,
  ShieldCheck,
  Building2,
  List
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/constants/blog-data";

interface BlogArticleViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogArticleView({ post, relatedPosts }: BlogArticleViewProps) {
  // Reading progress bar state
  const [scrollProgress, setScrollProgress] = useState(0);

  // User engagement states
  const [likesCount, setLikesCount] = useState(148);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Interactive Calculator State
  const [calcData, setCalcData] = useState({
    course: "MBBS",
    percentage: 85,
    neetScore: 580,
    familyIncome: "3-6",
  });
  const [calcResult, setCalcResult] = useState<string | null>(null);

  // Comment section state
  const [comments, setComments] = useState([
    {
      id: "c1",
      name: "Priya Sharma",
      role: "NEET 2025 Aspirant",
      date: "2 days ago",
      text: "Is NEET scorecard mandatory for first phase Milestone application, or can we submit 12th marksheet first?",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      reply: {
        author: "Dr. Arun Mehta",
        role: "Medical Education Director",
        text: "Hi Priya! You can register with your 12th marksheet in Phase 1. Your NEET scorecard can be uploaded once results are announced.",
      }
    },
    {
      id: "2",
      name: "Rohan Verma",
      role: "B.Tech Aspirant",
      date: "3 days ago",
      text: "Extremely helpful guide! The comparison table between government schemes and private grants made it super clear.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I apply for both Milestone Medical Grant and Government CSCSS?",
      a: "Yes! Students are eligible to receive Milestone tuition fee concessions alongside state/central government stipends, provided institutional policies allow dual aid."
    },
    {
      q: "What is the minimum NEET score required for MBBS scholarship eligibility?",
      a: "While qualifying NEET (approx 135+ marks) is mandatory, candidates scoring 450+ are eligible for up to 80% to 100% tuition coverage depending on merit tier."
    },
    {
      q: "When are scholarship amounts disbursed for 2025 batch?",
      a: "Disbursements begin within 30 days of admission confirmation and document verification at your allotted medical college."
    }
  ];

  // Table of Contents sections
  const tocItems = [
    { id: "overview", label: "Executive Overview" },
    { id: "top-scholarships", label: "Top 10 Medical Scholarships" },
    { id: "calculator", label: "Scholarship Grant Estimator" },
    { id: "application-process", label: "Application Roadmap" },
    { id: "faqs", label: "Frequently Asked Questions" },
    { id: "discussion", label: "Student Q&A Community" },
  ];

  // Track scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const calculateGrant = () => {
    let result = "";
    if (calcData.neetScore >= 550 || calcData.percentage >= 90) {
      result = "Eligible for Milestone Tier-1 Medical Grant (Up to ₹5,00,000 + 100% Tuition Waiver)";
    } else if (calcData.neetScore >= 450 || calcData.percentage >= 80) {
      result = "Eligible for Milestone Tier-2 Medical Grant (Up to ₹3,00,000 + 50% Fee Concession)";
    } else {
      result = "Eligible for Milestone Merit Grant (Up to ₹1,50,000 + Career Mentorship)";
    }
    setCalcResult(result);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now().toString(),
        name: userName,
        role: "Student Community Member",
        date: "Just now",
        text: newComment,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      }
    ]);
    setNewComment("");
  };

  return (
    <div className="pt-20 min-h-screen bg-background relative">
      {/* Top Gold Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Action Bar (Sticky Left Desktop) */}
      <aside className="hidden lg:flex flex-col items-center gap-4 fixed left-8 top-1/3 z-40 bg-card/90 dark:bg-[#0b0f19]/90 backdrop-blur-md p-3 rounded-full border border-border/80 shadow-xl">
        <button 
          onClick={handleLike} 
          className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
            isLiked ? "bg-amber-500/20 text-amber-500 scale-110" : "hover:bg-secondary text-muted-foreground hover:text-foreground"
          }`}
          title="Like Article"
        >
          <ThumbsUp className="w-5 h-5" />
          <span className="text-[10px] font-extrabold block text-center mt-1">{likesCount}</span>
        </button>

        <button 
          onClick={() => setIsBookmarked(!isBookmarked)} 
          className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
            isBookmarked ? "bg-accent text-black scale-110 shadow-md" : "hover:bg-secondary text-muted-foreground hover:text-foreground"
          }`}
          title="Bookmark Article"
        >
          <Bookmark className="w-5 h-5" />
        </button>

        <button 
          onClick={handleCopyLink} 
          className="p-3 rounded-full hover:bg-secondary text-muted-foreground hover:text-accent transition-all cursor-pointer relative"
          title="Copy Link"
        >
          {copiedLink ? <Check className="w-5 h-5 text-emerald-500" /> : <Share2 className="w-5 h-5" />}
        </button>
      </aside>

      {/* Main Article Container */}
      <article className="py-8 md:py-14 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top Navigation & Category */}
          <div className="max-w-4xl mx-auto mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> 
              <span>Back to Articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-accent text-black font-extrabold px-3.5 py-1 text-xs shadow-md">
                {post.category}
              </Badge>

              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>Popular in 2025</span>
              </span>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Article Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.18] mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal mb-8">
              {post.subtitle || post.excerpt}
            </p>

            {/* Author Card & Social Share Row */}
            <div className="flex items-center justify-between py-5 border-y border-border/60 gap-4 flex-wrap bg-secondary/30 dark:bg-card/40 px-6 rounded-2xl">
              <div className="flex items-center gap-4">
                {post.author && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-accent/40 shadow-sm"
                  />
                )}
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-primary dark:text-white">
                      {post.author?.name}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {post.author?.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isLiked ? "bg-amber-500 text-black border-amber-500" : "bg-card hover:bg-secondary text-foreground border-border/80"
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{likesCount} Helpful</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-card hover:bg-secondary text-foreground border border-border/80 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedLink ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="max-w-5xl mx-auto h-72 sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden bg-muted mb-12 relative border border-border/70 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-medium">
                📷 Verified Educational Resource • Milestone Healthcare Division
              </span>
              <span className="hidden sm:inline-block bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-medium">
                Updated July 2025
              </span>
            </div>
          </div>

          {/* Two-Column Grid: Content + Sticky ToC Sidebar */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
            
            {/* Main Article Body (8 Cols) */}
            <div className="lg:col-span-8">
              
              {/* Executive Summary Box ("In a Nutshell") */}
              <div id="overview" className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 mb-10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-amber-500">
                  <Sparkles className="w-5 h-5 fill-amber-500" />
                  <h3 className="font-bold text-lg text-primary dark:text-white uppercase tracking-wider text-xs">Executive Summary</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/90 font-medium leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Total Grants Pool:</strong> Over ₹15 Crores allocated for 2025 MBBS, BAMS, and BDS scholarships.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Max Award:</strong> Up to ₹5,00,000 per student covering tuition fees, hostel, and study material.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Key Target:</strong> Class 12 Science PCB graduates & NEET 2025 qualified candidates.</span>
                  </li>
                </ul>
              </div>

              {/* HTML Article Content */}
              <div id="top-scholarships" className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              </div>

              {/* INTERACTIVE WIDGET: Scholarship Grant Estimator */}
              <div id="calculator" className="my-14 p-6 md:p-8 rounded-3xl bg-card dark:bg-[#0b0f19] border-2 border-accent/40 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 text-accent rounded-2xl border border-accent/20">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent">Interactive Tool</span>
                    <h3 className="text-xl font-bold text-primary dark:text-white">Instant Medical Scholarship Estimator</h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Target Course</label>
                    <select
                      value={calcData.course}
                      onChange={(e) => setCalcData({...calcData, course: e.target.value})}
                      className="w-full p-3 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
                    >
                      <option value="MBBS">MBBS (Bachelor of Medicine)</option>
                      <option value="BAMS">BAMS (Ayurvedic Medicine)</option>
                      <option value="BDS">BDS (Dental Surgery)</option>
                      <option value="Nursing">B.Sc Nursing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Class 12th Marks (%)</label>
                    <input
                      type="number"
                      value={calcData.percentage}
                      onChange={(e) => setCalcData({...calcData, percentage: Number(e.target.value)})}
                      className="w-full p-3 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">NEET Score (Out of 720)</label>
                    <input
                      type="number"
                      placeholder="e.g. 550"
                      value={calcData.neetScore}
                      onChange={(e) => setCalcData({...calcData, neetScore: Number(e.target.value)})}
                      className="w-full p-3 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Annual Family Income (Lakhs)</label>
                    <select
                      value={calcData.familyIncome}
                      onChange={(e) => setCalcData({...calcData, familyIncome: e.target.value})}
                      className="w-full p-3 text-sm bg-secondary/60 dark:bg-slate-900 border border-border/80 rounded-xl font-medium focus:outline-none focus:border-accent"
                    >
                      <option value="0-3">Below ₹3.0 Lakhs</option>
                      <option value="3-6">₹3.0 Lakhs to ₹6.0 Lakhs</option>
                      <option value="6-10">₹6.0 Lakhs to ₹10.0 Lakhs</option>
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={calculateGrant}
                  className="w-full bg-accent hover:bg-accent/90 text-black font-extrabold py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
                >
                  Calculate Scholarship Eligibility
                </Button>

                {calcResult && (
                  <div className="mt-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2 font-bold text-sm mb-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>Estimate Result</span>
                    </div>
                    <p className="text-sm font-semibold leading-relaxed">{calcResult}</p>
                    <Link 
                      href="/how-to-apply"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-extrabold text-accent hover:underline"
                    >
                      <span>Proceed to Online Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* FAQs Accordion */}
              <div id="faqs" className="my-14 pt-8 border-t border-border/60">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  <h3 className="text-2xl font-bold text-primary dark:text-white">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/30 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full p-5 text-left font-bold text-base text-primary dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronRight className={`w-5 h-5 text-accent transition-transform duration-300 ${openFaq === idx ? "rotate-90" : ""}`} />
                      </button>

                      {openFaq === idx && (
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Community Discussion & Q&A */}
              <div id="discussion" className="my-14 pt-8 border-t border-border/60">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-bold text-primary dark:text-white">Student Discussion ({comments.length})</h3>
                  </div>
                </div>

                {/* Comment Input */}
                <form onSubmit={handleAddComment} className="p-6 rounded-3xl bg-secondary/40 dark:bg-[#0b0f19] border border-border/70 mb-8 space-y-4">
                  <h4 className="text-sm font-bold text-foreground">Ask a Question or Share Feedback</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="p-3 text-sm bg-card border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                    />
                  </div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write your query here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-3 text-sm bg-card border border-border/80 rounded-xl focus:outline-none focus:border-accent"
                  />
                  <Button type="submit" size="sm" className="bg-accent hover:bg-accent/90 text-black font-bold cursor-pointer">
                    <Send className="w-3.5 h-3.5 mr-1.5" /> Post Comment
                  </Button>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="p-5 rounded-2xl bg-card border border-border/60 space-y-3">
                      <div className="flex items-center gap-3">
                        <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full object-cover border border-accent/30" />
                        <div>
                          <h4 className="text-sm font-bold text-primary dark:text-white">{comment.name}</h4>
                          <span className="text-[11px] text-muted-foreground">{comment.role} • {comment.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-13">{comment.text}</p>

                      {/* Official Mentor Reply */}
                      {comment.reply && (
                        <div className="ml-8 mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-accent">{comment.reply.author}</span>
                            <Badge className="text-[10px] bg-accent text-black font-bold py-0 px-1.5">Official Response</Badge>
                          </div>
                          <p className="text-xs text-foreground/90 leading-relaxed">{comment.reply.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Application Call to Action Card */}
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-black shadow-2xl my-14 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-black/20 rounded-full text-xs font-extrabold text-black uppercase tracking-wider mb-3">
                    Application Open for 2025 Cycle
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mb-3">
                    Apply for Milestone Medical Scholarship Today
                  </h3>
                  <p className="text-sm text-black/90 font-medium max-w-xl mb-6">
                    Don't let financial constraints pause your dream of wearing the stethoscope. Secure up to ₹5,00,000 in tuition aid and 1-on-1 mentorship.
                  </p>
                  <Link 
                    href="/how-to-apply"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-extrabold text-sm rounded-2xl shadow-xl hover:bg-slate-900 transition-all"
                  >
                    <span>Start Online Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Table of Contents Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                
                {/* ToC Box */}
                <div className="p-6 rounded-3xl bg-card dark:bg-[#0b0f19] border border-border/70 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50 text-accent">
                    <List className="w-4 h-4" />
                    <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Table of Contents</h3>
                  </div>

                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-xs font-semibold text-muted-foreground hover:text-accent transition-colors py-1.5 px-3 rounded-lg hover:bg-secondary/60"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Contact Card */}
                <div className="p-6 rounded-3xl bg-secondary/40 dark:bg-card/40 border border-border/60 text-center">
                  <Building2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-primary dark:text-white">Need Guidance?</h4>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">Connect directly with our scholarship counseling desk.</p>
                  <Link 
                    href="/contact"
                    className="inline-block w-full py-2.5 px-4 bg-accent/10 hover:bg-accent text-accent hover:text-black font-bold text-xs rounded-xl transition-all border border-accent/30"
                  >
                    Speak with Counselor
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Recommended Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border/60">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Recommended Reading</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`} className="group block">
                    <div className="bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-accent/40 transition-all hover:shadow-lg h-full flex flex-col justify-between">
                      <div>
                        <div className="h-44 relative overflow-hidden bg-muted">
                          <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          <Badge className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs">{related.category}</Badge>
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-base text-primary dark:text-white group-hover:text-accent transition-colors line-clamp-2 mb-2">{related.title}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">{related.excerpt}</p>
                        </div>
                      </div>
                      <div className="p-5 pt-0 text-xs text-muted-foreground flex justify-between">
                        <span>{formatDate(related.date)}</span>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </div>
  );
}
