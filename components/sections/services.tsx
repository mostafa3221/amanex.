"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Camera, Radio, Satellite, Home, Shield, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function Services() {
  const { language } = useLanguage()
  const t = translations[language]
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight

  const services = [
    {
      icon: Phone,
      title: t.pbxTitle,
      description: t.pbxDescription,
      features: ["تسجيل المكالمات", "تقارير استخدام", "ربط الفروع", "رسائل ترحيبية"],
      price: "يُحدد بعد المعاينة",
      image: "/pbx-telephone-system-installation.jpg",
    },
    {
      icon: Camera,
      title: t.cctvTitle,
      description: t.cctvDescription,
      features: ["رؤية ليلية", "تنبيهات حركة", "ربط بالموبايل", "تخزين سحابي"],
      price: "يبدأ من 2500 جنيه",
      image: "/cctv-security-camera-installation.jpg",
    },
    {
      icon: Radio,
      title: t.intercomTitle,
      description: t.intercomDescription,
      features: ["شاشات ملونة", "فتح كهربائي", "ربط مع الجوال", "تسجيل الزوار"],
      price: "يبدأ من 1800 جنيه",
      image: "/video-intercom-door-system.jpg",
    },
    {
      icon: Satellite,
      title: t.sattvTitle,
      description: t.sattvDescription,
      features: ["إشارة مستقرة", "توزيع متعدد", "مقويات عالية الجودة", "صيانة دورية"],
      price: "يبدأ من 1200 جنيه",
      image: "/satellite-dish-smatv-system-installation.jpg",
    },
    {
      icon: Home,
      title: t.smartHomeTitle,
      description: t.smartHomeDescription,
      features: ["تحكم صوتي", "جداول أتمتة", "توفير طاقة", "تحكم عن بُعد"],
      price: "يبدأ من 3000 جنيه",
      image: "/smart-home-automation-control-panel.jpg",
    },
    {
      icon: Shield,
      title: t.accessControlTitle,
      description: t.accessControlDescription,
      features: ["بصمة وكارت", "تقارير دخول", "ربط مع الكاميرات", "تحكم متعدد المستويات"],
      price: "يبدأ من 2200 جنيه",
      image: "/fingerprint-access-control-system.jpg",
    },
  ]

  return (
    <section id="services" className="py-10 bg-muted/30">
      <div className="container max-w-full px-3.5 ">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            خدماتنا
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">حلول متكاملة لاحتياجاتك التقنية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            نقدم مجموعة شاملة من الخدمات التقنية المتخصصة مع ضمان الجودة والأداء المتميز
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transition-transform ">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {service.price}
                  </Badge>
                </div>

                <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>

                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <a
                      href={`https://wa.me/201146403111?text=عايز%20عرض%20سعر%20لخدمة%20${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 me-2" />
                      {t.getQuote}
                    </a>
                  </Button>

                  <Button variant="outline" size="icon">
                    <ArrowIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
