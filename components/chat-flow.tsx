"use client"

import { ArrowRightIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ChatFlow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
      className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-4xl mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className="bg-card p-6 rounded-xl shadow-sm border text-center w-full md:w-1/3 hover:shadow-md transition-shadow duration-300"
      >
        <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">👤</span>
        </div>
        <h3 className="font-semibold text-lg">Customer</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Asks questions about products, prices, and availability on WhatsApp
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center">
        <ArrowRightIcon className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-card p-6 rounded-xl shadow-sm border text-center w-full md:w-1/3 hover:shadow-md transition-shadow duration-300"
      >
        <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🤖</span>
        </div>
        <h3 className="font-semibold text-lg">Assistant</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Automatically responds with accurate information about your business
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center">
        <ArrowRightIcon className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-card p-6 rounded-xl shadow-sm border text-center w-full md:w-1/3 hover:shadow-md transition-shadow duration-300"
      >
        <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">👩‍💼</span>
        </div>
        <h3 className="font-semibold text-lg">You (only if needed)</h3>
        <p className="text-sm text-muted-foreground mt-2">Step in only for complex questions or to finalize orders</p>
      </motion.div>
    </motion.div>
  )
}
