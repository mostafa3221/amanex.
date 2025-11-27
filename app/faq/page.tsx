"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="min-h-screen max-w-screen-2xl flex flex-col justify-center">
      <Header />
      <FAQContent />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

function FAQContent() {
  const { language } = useLanguage()
  const t = translations[language]

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ]

  return (
    <section className="py-16 lg:py-10">
      <div className="container max-w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">{t.faqTitle}</h1>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-2">
                <AccordionTrigger className="text-right hover:no-underline">
                  <span className="font-medium">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
