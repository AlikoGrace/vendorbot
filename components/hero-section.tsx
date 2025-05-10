import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
          Your own WhatsApp shop assistant
        </h1>
        <p className="text-xl md:text-2xl mb-8">Always online, always polite. 🤝</p>
        <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8">
          Get Started Free
        </Button>
      </div>
    </section>
  )
}
