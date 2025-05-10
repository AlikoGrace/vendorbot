import { MessageCircleIcon, MessageSquareIcon, BellRingIcon } from "lucide-react"

export default function FeatureSteps() {
  const features = [
    {
      icon: <MessageCircleIcon className="h-12 w-12 text-green-600" />,
      title: "Buyers ask questions",
      description: "Buyers ask questions like: 'How much?' or 'Chale, wey tin be the price?' 🤔",
    },
    {
      icon: <MessageSquareIcon className="h-12 w-12 text-green-600" />,
      title: "Assistant replies instantly",
      description: "Your assistant replies instantly — with product info, delivery, and MoMo details. ⚡",
    },
    {
      icon: <BellRingIcon className="h-12 w-12 text-green-600" />,
      title: "You only step in when needed",
      description: "You only step in when it's urgent. Enjoy your free time! 😎",
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How VendorBot Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-sm">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
