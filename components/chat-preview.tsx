"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ChatPreview() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  const messages = [
    {
      sender: "customer",
      content: "Chale, wey tin be the price for the blue dress?",
      time: "8:42 PM",
    },
    {
      sender: "bot",
      content:
        "The blue dress costs GH₵ 250. We have sizes S, M, and L available. Would you like to see some pictures?",
      time: "8:42 PM",
    },
    {
      sender: "customer",
      content: "How much be the delivery to Tema?",
      time: "8:43 PM",
    },
    {
      sender: "bot",
      content: "Delivery to Tema is GH₵ 30 and takes 1-2 days. We deliver Monday-Saturday.",
      time: "8:43 PM",
    },
    {
      sender: "customer",
      content: "You take MoMo?",
      time: "8:44 PM",
    },
    {
      sender: "bot",
      content:
        "Yes, we accept Mobile Money payments. Once you confirm your order, I'll send you our MoMo number for payment.",
      time: "8:44 PM",
    },
  ]

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex >= messages.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <h2 className="text-3xl font-bold mb-4">See VendorBot in Action</h2>
        <p className="text-muted-foreground mb-6">
          Watch how VendorBot handles common customer inquiries automatically, providing instant responses that keep
          your customers happy and informed.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Instant responses to common questions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Accurate product information and pricing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Handles payment and delivery inquiries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Supports multiple languages including Twi and Pidgin</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="md:w-1/2 max-w-md"
      >
        <div className="bg-green-600 text-white p-3 rounded-t-xl flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-lg">🛍️</span>
          </div>
          <div>
            <p className="font-medium">Fashion Boutique</p>
            <p className="text-xs opacity-80">Online • Powered by VendorBot</p>
          </div>
        </div>

        <Card className="rounded-t-none shadow-lg border-t-0">
          <CardContent className="p-4">
            <div className="bg-muted/30 rounded-xl p-3 mb-3 text-center text-xs text-muted-foreground">Today</div>

            <div className="space-y-3 min-h-[300px]">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === "customer"
                        ? "bg-green-100 dark:bg-green-900 rounded-tr-none"
                        : "bg-muted rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground text-right mt-1">{message.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex gap-2 border-t pt-3">
              <div className="flex-1 bg-muted h-10 rounded-full"></div>
              <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                <span>📤</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
