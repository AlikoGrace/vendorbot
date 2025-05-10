"use client"

import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
    >
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="pt-10 pb-8 px-8">
          <QuoteIcon className="h-10 w-10 text-green-600 mb-4" />
          <p className="text-xl mb-6 italic">
            "VendorBot has completely transformed how I run my online shop. I used to wake up to 50+ messages every
            morning, but now my assistant handles all the basic questions. My customers are happy because they get
            instant responses, and I'm happy because I can focus on creating new products!"
          </p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
              <span className="text-lg">👩🏾</span>
            </div>
            <div>
              <p className="font-semibold">Ama Owusu</p>
              <p className="text-sm text-muted-foreground">Fashion Boutique Owner, Accra</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
