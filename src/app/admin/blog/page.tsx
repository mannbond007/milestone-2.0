"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Eye, Trash2 } from "lucide-react";
import { blogPreviews } from "@/constants/home-data";
import { formatDate } from "@/lib/utils";

export default function AdminBlogPage() {
  return (
    <div className="max-w-5xl">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Blog Posts</h1>
            <p className="text-muted-foreground text-sm mt-1">Create and manage blog content.</p>
          </div>
          <Button className="gradient-gold text-white font-semibold rounded-xl shadow-gold hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" /> New Post
          </Button>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {blogPreviews.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.05}>
            <div className="bg-card rounded-2xl border border-border/50 p-5 flex items-center justify-between gap-4 transition-all hover:shadow-card-hover">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white">{post.title}</h3>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Published</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{post.category} • {formatDate(post.date)} • {post.readTime}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Eye className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Edit className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-red-500"><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
