import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MileStone Scholarship Program | Education & Scholarship Guidance",
    template: "%s | MileStone Scholarship Program",
  },
  description:
    "India's trusted education and scholarship guidance platform. Explore scholarships after Class 12, graduation, medical education (MBBS India & Abroad, BDS, BAMS, BHMS, BUMS), engineering, and management pathways.",
  keywords: [
    "MileStone Scholarship",
    "scholarships after 12th",
    "scholarships after graduation",
    "MBBS in India",
    "MBBS Abroad",
    "BDS scholarship",
    "BAMS",
    "BHMS",
    "BUMS",
    "engineering scholarships",
    "MBA admission guidance",
  ],
  authors: [{ name: "MileStone Scholarship Program" }],
};

import { cookies } from "next/headers";
import type { Locale } from "@/components/providers/locale-provider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let cookieLocale: Locale = "en";
  try {
    const cookieStore = await cookies();
    const stored = cookieStore.get("NEXT_LOCALE")?.value;
    if (stored === "hi" || stored === "en") {
      cookieLocale = stored;
    }
  } catch {
    // Fallback to default locale
  }

  return (
    <html
      lang={cookieLocale}
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <ClerkProvider>
          <ThemeProvider defaultTheme="system" storageKey="milestone-theme">
            <LocaleProvider defaultLocale={cookieLocale}>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </LocaleProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
