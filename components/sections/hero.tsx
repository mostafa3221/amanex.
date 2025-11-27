"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Shield, Clock, Award } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-20 lg:py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <div className="container max-w-full relative px-3.5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              <Shield className="h-4 w-4 me-2" />
              {t.serviceBadge}
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-balance">{t.heroTitle}</h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.heroDescription}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <a
                  href="https://wa.me/201146403111?text=عايز%20معاينة%20فورية"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 me-2" />
                  {t.requestVisit}
                </a>
              </Button>

              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="tel:+201146403111">
                  <Phone className="h-5 w-5 me-2" />
                  {t.callNow}
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                <span>استجابة سريعة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                <span>مهندسون معتمدون</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span>ضمان شامل</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <img
                src="/telecommunications-engineer-installing-pbx-system-.jpg"
                alt="Amanex telecommunications installation"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <Phone className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
