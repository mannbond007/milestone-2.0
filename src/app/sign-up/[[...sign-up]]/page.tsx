import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Milestone Scholarship Program account and start your application.",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">Create Your Account</h1>
          <p className="text-sm text-muted-foreground mt-2">Start your scholarship journey today</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-accent hover:bg-accent-dark text-white",
              card: "shadow-none border border-border/50 rounded-2xl",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton: "border-border/50 rounded-xl",
              formFieldInput: "rounded-xl border-border/50",
              footerActionLink: "text-accent hover:text-accent-dark",
            },
          }}
        />
      </div>
    </div>
  );
}
