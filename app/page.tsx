import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import ChatFlow from "@/components/chat-flow";
import PainPoints from "@/components/pain-points";
import Testimonial from "@/components/testimonial";
import AnimatedHero from "@/components/animated-hero";
import ChatPreview from "@/components/chat-preview";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/30 dark:to-transparent -z-10"></div>

      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            VendorBot
          </span>
          <span className="text-2xl animate-bounce">🤖</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <ThemeToggle />
          <Link href="/signup">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4">
          <AnimatedHero />
        </section>

        {/* Chat Preview Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ChatPreview />
          </div>
        </section>

        {/* Chat Flow Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.03),transparent_25%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-4">
              How VendorBot Works
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A simple three-step process that keeps you in control while
              automating customer interactions
            </p>
            <ChatFlow />
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="features" className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Problems VendorBot Solves
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Say goodbye to these common challenges faced by online vendors
          </p>
          <PainPoints />
        </section>

        {/* Testimonial Section */}
        <section
          id="testimonials"
          className="py-16 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.05),transparent_25%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.03),transparent_25%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-4">
              What Our Customers Say
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join hundreds of satisfied vendors who have transformed their
              business
            </p>
            <Testimonial />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/30 dark:to-green-800/10 p-10 rounded-3xl border border-green-100 dark:border-green-900/50 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Sparkles className="h-6 w-6 text-green-500 absolute top-6 right-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Ready to automate your WhatsApp business?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground relative z-10">
              Join hundreds of vendors who are saving time and growing their
              business with VendorBot.
            </p>
            <Link href="/signup" className="inline-block">
              <Button
                size="lg"
                className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 shadow-md hover:shadow-lg transition-all duration-300 relative z-10">
                Get Started Free
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground relative z-10">
              No credit card required • 14-day free trial
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/20 dark:bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                VendorBot
              </span>
              <span>🤖</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VendorBot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
