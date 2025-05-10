"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your WhatsApp shop assistant.
          <span className="block text-green-600 dark:text-green-500">Always online. Never rude.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let VendorBot handle customer inquiries, product details, and basic orders while you focus on growing your
          business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            See Demo
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your WhatsApp shop assistant.
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="block text-green-600 dark:text-green-500"
          >
            Always online. Never rude.
          </motion.span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        Let VendorBot handle customer inquiries, product details, and basic orders while you focus on growing your
        business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link href="/signup">
          <Button
            size="lg"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Button>
        </Link>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
        >
          See Demo
        </Button>
      </motion.div>
    </div>
  )
}
