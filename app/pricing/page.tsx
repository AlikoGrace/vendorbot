import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import PricingFAQ from "@/components/pricing-faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/30 dark:to-transparent -z-10"></div>

      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            VendorBot
          </span>
          <span className="text-2xl">🤖</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works best for your business. All plans include
            a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Early Access Plan */}
          <div className="border rounded-xl p-6 bg-card shadow-sm flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">Early Access</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-bold">Free</span>
                <span className="text-muted-foreground mb-1">
                  / limited time
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Get early access to VendorBot while we're in testing phase.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Basic WhatsApp responses</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Up to 50 messages per day</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Product catalog (up to 20 items)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Basic analytics</span>
              </div>
            </div>

            <Link href="/" className="mt-auto">
              <Button className="w-full rounded-full">Join Early Access</Button>
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="border-2 border-green-500 dark:border-green-600 rounded-xl p-6 bg-card shadow-md flex flex-col h-full relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MOST POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">Standard</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-bold">$19</span>
                <span className="text-muted-foreground mb-1">/ month</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Perfect for small to medium-sized businesses.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Advanced WhatsApp responses</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited messages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Product catalog (up to 100 items)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Detailed analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Order tracking</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Custom responses</span>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
              Start 14-Day Free Trial
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-xl p-6 bg-card shadow-sm flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">Premium</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-muted-foreground mb-1">/ month</span>
              </div>
              <p className="text-muted-foreground text-sm">
                For growing businesses with advanced needs.
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Everything in Standard</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited product catalog</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Multiple WhatsApp numbers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Advanced analytics & reporting</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Payment integration</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">Priority support</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm">API access</span>
              </div>
            </div>

            <Button className="w-full rounded-full">
              Start 14-Day Free Trial
            </Button>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <PricingFAQ />
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2>
          <p className="text-muted-foreground mb-6">
            We offer custom solutions for larger businesses with specific
            requirements.
          </p>
          <Button className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8">
            Contact Sales
          </Button>
        </div>
      </main>

      <footer className="border-t py-8 bg-muted/20 dark:bg-muted/5 mt-20">
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
