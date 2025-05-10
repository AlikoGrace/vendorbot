"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "You can sign up for any paid plan and try all features for 14 days without being charged. If you decide not to continue, you can cancel anytime before the trial ends and you won't be billed.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, the new rate will apply at the start of your next billing cycle.",
    },
    {
      question: "Do I need a WhatsApp Business account?",
      answer:
        "Yes, VendorBot works with WhatsApp Business accounts. If you don't have one yet, we can help you set it up during the onboarding process.",
    },
    {
      question: "How does VendorBot handle my product information?",
      answer:
        "You can upload your product catalog through our dashboard or API. VendorBot will use this information to answer customer questions about your products, prices, and availability.",
    },
    {
      question: "Is there a limit to how many customers VendorBot can handle?",
      answer:
        "The Early Access plan has a limit of 50 messages per day. The Standard and Premium plans offer unlimited messages, so VendorBot can handle as many customer inquiries as you receive.",
    },
    {
      question: "What happens after the Early Access period ends?",
      answer:
        "Once the Early Access period ends, you'll be notified and given the option to upgrade to one of our paid plans. We'll provide ample notice before any changes to your account.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
