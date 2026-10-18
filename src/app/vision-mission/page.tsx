import { Metadata } from "next";
import { VisionMissionContent } from "@/components/vision-mission/vision-mission-content";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Discover the core vision and objectives of the Milestone Scholarship Program.",
};

export default function VisionMissionPage() {
  return <VisionMissionContent />;
}
