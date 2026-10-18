"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { blogPreviews } from "@/constants/home-data";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  return (
    <section className="py-20 md:py-28 relative" id="blog-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Latest Updates"
            title={<>From Our <span className="text-accent">Blog</span></>}
            subtitle="Stay informed with the latest scholarship news, tips, and career guidance."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {blogPreviews.slice(0, 3).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-card rounded-2xl border border-border/50 overflow-hidden transition-all hover:shadow-card-hover hover:border-accent/20 h-full flex flex-col">
                  {/* Cover image with hover zoom effect */}
                  <div className="h-40 relative overflow-hidden bg-navy-dark">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="text-xs bg-black/40 text-white border-0 backdrop-blur-md">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-loose line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group">
              Read All Posts
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
