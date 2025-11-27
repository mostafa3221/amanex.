"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-screen-2xl    flex flex-col justify-center">
      <Header />
      <AboutContent />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

function AboutContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-10 lg:py-10">
      <div className="container max-w-full">
        <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-balance">{t.aboutTitle}</h1>

          <div className="prose prose-lg max-w-[80%] text-center mb-12 ">
            <p className="text-lg text-muted-foreground leading-relaxed ">{t.aboutDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border hover:scale-105 transition-transform shadow-xl">
              <h2 className="text-xl font-semibold mb-4 text-primary">{t.ourMission}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:scale-105 transition-transform shadow-xl ">
              <h2 className="text-xl font-semibold mb-4 text-primary">{t.ourVision}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.visionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
