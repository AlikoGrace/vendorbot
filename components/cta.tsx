import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-2xl mx-auto bg-green-50 dark:bg-green-950/50 p-10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to automate your WhatsApp business?</h2>
        <p className="text-lg mb-8 text-muted-foreground">Try VendorBot free for 14 days. No credit card required.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 gap-2">
            <WhatsappIcon className="h-5 w-5" />
            Try It Free
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            See Demo
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Join 1,000+ vendors already using VendorBot</p>
      </div>
    </section>
  )
}
