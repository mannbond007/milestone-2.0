"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { blogPosts, BlogPost } from "@/constants/blog-data";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Search, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Scholarships",
    "Preparation",
    "Career",
    "JEE Prep",
    "Diversity & STEM",
    "Application Guide",
  ];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost.id || searchQuery || selectedCategory !== "All");

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <ScrollReveal>
            <SectionHeader
              badge="Milestone Blog"
              title={<>Insights & Guides for <span className="text-accent">Student Success</span></>}
              subtitle="Expert scholarship breakdowns, preparation blueprints, career roadmaps, and document checklists."
            />
          </ScrollReveal>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by topic, course, or scholarship..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-card/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/80 rounded-2xl shadow-sm text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-accent text-black shadow-md shadow-accent/20 scale-105"
                    : "bg-secondary/70 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Body Container */}
      <section className="py-8 md:py-16 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Featured Post Card (Only shown when not filtering) */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <ScrollReveal>
              <div className="mb-14">
                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative bg-card dark:bg-[#0b0f19] rounded-3xl border border-border/70 hover:border-accent/40 overflow-hidden shadow-lg hover:shadow-[0_12px_40px_rgba(217,119,6,0.12)] transition-all duration-300 grid lg:grid-cols-12 gap-0">
                    
                    <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto relative overflow-hidden bg-muted">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-black font-bold text-xs shadow-md">
                          Featured Article
                        </Badge>
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20 text-xs">
                            {featuredPost.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{formatDate(featuredPost.date)}</span>
                        </div>

                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary dark:text-white group-hover:text-accent transition-colors leading-tight mb-4">
                          {featuredPost.title}
                        </h2>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          {featuredPost.author && (
                            <img
                              src={featuredPost.author.avatar}
                              alt={featuredPost.author.name}
                              className="w-8 h-8 rounded-full object-cover border border-accent/30"
                            />
                          )}
                          <span className="text-xs font-semibold text-foreground">
                            {featuredPost.author?.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-bold text-accent group-hover:translate-x-1 transition-transform">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          )}

          {/* Grid of Articles */}
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {(selectedCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-card dark:bg-[#0b0f19] rounded-2xl border border-border/60 hover:border-accent/40 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(217,119,6,0.1)] h-full flex flex-col justify-between">
                      <div>
                        {/* Article Thumbnail */}
                        <div className="h-48 relative overflow-hidden bg-muted">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" className="text-xs bg-black/60 backdrop-blur-md text-white border-0">
                              {post.category}
                            </Badge>
                          </div>
                        </div>

                        {/* Article Text */}
                        <div className="p-5">
                          <h3 className="font-heading font-extrabold text-lg text-primary dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="px-5 pb-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-accent" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* No Results Fallback */
            <div className="text-center py-16 bg-card/50 rounded-3xl border border-border/60 p-8">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-xl font-bold text-primary dark:text-white">No Articles Found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search query or category filter.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 bg-accent text-black font-semibold text-xs rounded-xl cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
