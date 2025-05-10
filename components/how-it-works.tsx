import { ArrowRightIcon } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted/50 rounded-3xl p-8 my-16">
      <h2 className="text-3xl font-bold text-center mb-12">The VendorBot Flow</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 max-w-3xl mx-auto">
        <div className="bg-background p-6 rounded-xl shadow-sm border text-center w-full md:w-64">
          <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👤</span>
          </div>
          <h3 className="font-semibold text-lg">Customer</h3>
          <p className="text-sm text-muted-foreground mt-2">Asks questions on WhatsApp</p>
        </div>

        <ArrowRightIcon className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />

        <div className="bg-background p-6 rounded-xl shadow-sm border text-center w-full md:w-64">
          <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="font-semibold text-lg">Assistant</h3>
          <p className="text-sm text-muted-foreground mt-2">Replies with accurate info</p>
        </div>

        <ArrowRightIcon className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />

        <div className="bg-background p-6 rounded-xl shadow-sm border text-center w-full md:w-64">
          <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👩‍💼</span>
          </div>
          <h3 className="font-semibold text-lg">You (Optional)</h3>
          <p className="text-sm text-muted-foreground mt-2">Only step in when needed</p>
        </div>
      </div>
    </section>
  )
}
