"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageSquare, BatteryCharging } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const painPoints = [
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: "No More Late-Night Messages",
      description:
        "Tired of answering the same questions at midnight? VendorBot handles inquiries 24/7 so you can rest.",
      solution: "VendorBot responds instantly at any time of day or night.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-green-600" />,
      title: "Repetitive Questions",
      description: "Answering the same questions about prices, sizes, and delivery over and over again?",
      solution: "VendorBot automatically answers common questions based on your product information.",
    },
    {
      icon: <BatteryCharging className="h-10 w-10 text-green-600" />,
      title: "Business Owner Burnout",
      description: "Feeling overwhelmed by constant WhatsApp messages while trying to run your business?",
      solution: "Let VendorBot handle the routine inquiries while you focus on growing your business.",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-3 gap-6"
    >
      {painPoints.map((point, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="border-t-4 border-t-green-500 hover:shadow-md transition-shadow duration-300 h-full">
            <CardHeader>
              <div className="mb-4">{point.icon}</div>
              <CardTitle>{point.title}</CardTitle>
              <CardDescription>{point.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  <span className="font-bold">Solution:</span> {point.solution}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
