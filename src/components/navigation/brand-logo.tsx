import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "mobile";
  className?: string;
  linkToHome?: boolean;
}

export function BrandLogo({
  variant = "navbar",
  className,
  linkToHome = true,
}: BrandLogoProps) {
  // Dimensions tailored to 3756 x 1014 aspect ratio (~3.704 : 1)
  // Desktop target: 190-240px; Mobile target: 150-190px
  const isFooter = variant === "footer";
  const isMobile = variant === "mobile";

  const imageElement = (
    <div
      className={cn(
        "inline-flex items-center transition-all duration-150",
        // In light theme: display naturally on light surface without card look
        // In dark theme: place inside subtle white container with small border radius and intentional padding
        isFooter
          ? "bg-white p-2 rounded-md shadow-xs border border-black/5"
          : "dark:bg-white dark:px-2 dark:py-1 dark:rounded-md dark:shadow-xs dark:border dark:border-black/10",
        className
      )}
    >
      <Image
        src="/images/milestone-scholarship-logo-cropped-hq.png"
        alt="MileStone Scholarship Program"
        width={3756}
        height={1014}
        priority={variant !== "footer"}
        className={cn(
          "object-contain w-auto transition-transform duration-150",
          isFooter && "h-11 sm:h-12 max-w-[230px]",
          variant === "navbar" && "h-8 sm:h-9 md:h-10 max-w-[190px] md:max-w-[225px]",
          isMobile && "h-7 sm:h-8 max-w-[165px]"
        )}
      />
    </div>
  );

  if (!linkToHome) {
    return imageElement;
  }

  return (
    <Link
      href="/"
      id="brand-logo-link"
      className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-md"
      aria-label="MileStone Scholarship Program Homepage"
    >
      {imageElement}
    </Link>
  );
}
