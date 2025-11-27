"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-screen-2xl flex flex-col justify-center">
      <Header />
      <ContactContent />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

function ContactContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-10 lg:py-10">
      <div className="container max-w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-balance">{t.contactTitle}</h1>

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">{t.contactDescription}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-6 text-primary">{t.contactInfo}</h2>

              <div className="space-y-4">
                <Card className="hover:scale-105 transition-transform shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.phone}</p>
                      <p className="text-sm text-muted-foreground">اتصل بنا مباشرة</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-transform shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.email}</p>
                      <p className="text-sm text-muted-foreground">راسلنا عبر البريد الإلكتروني</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-transform shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.workingHours}</p>
                      <p className="text-sm text-muted-foreground">ساعات العمل</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-transform shadow-sm">
                  <CardContent className="flex items-center gap-4 p-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.addressText}</p>
                      <p className="text-sm text-muted-foreground">{t.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border hover:scale-105 transition-transform shadow-sm">
                <h3 className="text-lg font-semibold mb-4">تواصل سريع</h3>
                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <a
                      href="https://wa.me/201146403111?text=عايز%20معاينة%20فورية"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 me-2" />
                      {t.requestVisit}
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                    <a href="tel:+201146403111">
                      <Phone className="h-5 w-5 me-2" />
                      {t.callNow}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
