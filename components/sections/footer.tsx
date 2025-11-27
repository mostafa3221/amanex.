"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  const quickLinks = [
    { name: t.home, href: "/" },
    { name: t.services, href: "#services" },
    { name: t.pricing, href: "#pricing" },
    { name: t.portfolio, href: "#portfolio" },
    { name: t.about, href: "#about" },
    { name: t.faq, href: "#faq" },
  ]

  const services = [
    "تركيب السنترالات",
    "كاميرات المراقبة",
    "أجهزة الإنتركوم",
    "الدش المركزي",
    "البيوت الذكية",
    "أنظمة التحكم",
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-full py-16 px-3.5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Phone className="h-6 w-6" />
              <span className="text-xl font-bold">
                <span className="font-black">A</span>mane<span className="font-black">x</span>
              </span>
            </div>

            <p className="text-primary-foreground/80 leading-relaxed">
              نوفّر لك حلول اتصالات وأمن متكاملة بأعلى معايير الجودة والاحترافية
            </p>

            <div className="flex gap-3">
              <Button variant="secondary" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">تواصل معنا</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+201146403111" className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:sales@amanex.eg" className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">القاهرة، الجيزة، الإسكندرية</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">{t.workingHours}</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full" asChild>
              <a
                href="https://wa.me/201146403111?text=مرحبا%20أريد%20الاستفسار%20عن%20خدماتكم"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 me-2" />
                تواصل واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">© 2024 Amanex. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
