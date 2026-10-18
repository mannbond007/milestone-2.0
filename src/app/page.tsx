import { HeroSection } from "@/components/home/hero-section";
import { LiveActivityFeed } from "@/components/home/live-activity-feed";
import { PartnerMarquee } from "@/components/home/partner-marquee";
import { ScholarshipFinder } from "@/components/home/scholarship-finder";
import { ScholarshipCategories } from "@/components/home/scholarship-categories";
import { StatisticsSection } from "@/components/home/statistics-section";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { BenefitsSection } from "@/components/home/benefits-section";
import { ComparisonSection } from "@/components/home/comparison-section";
import { TestProcess } from "@/components/home/test-process";
import { SuccessStories } from "@/components/home/success-stories";
import { MentorshipSection } from "@/components/home/mentorship-section";
import { FAQPreview } from "@/components/home/faq-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PartnerMarquee />
      <ScholarshipFinder />
      <ScholarshipCategories />
      <StatisticsSection />
      <FeaturedCourses />
      <BenefitsSection />
      <ComparisonSection />
      <TestProcess />
      <SuccessStories />
      <MentorshipSection />
      <FAQPreview />
      <BlogPreview />
      <CTASection />
    </div>
  );
}
