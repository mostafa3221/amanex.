"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Search, Settings, CheckCircle, ArrowDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function Steps() {
  const { language } = useLanguage()
  const t = translations[language]

  const steps = [
    {
      icon: MessageCircle,
      title: t.step1,
      description: "تواصل معنا عبر الواتساب أو الهاتف وأخبرنا عن احتياجاتك التقنية",
      details: ["تحديد نوع الخدمة", "معلومات الموقع", "الميزانية المتاحة"],
    },
    {
      icon: Search,
      title: t.step2,
      description: "نرسل فريق متخصص لمعاينة الموقع وتقييم المتطلبات وتصميم الحل الأمثل",
      details: ["معاينة شاملة", "تصميم مخصص", "عرض سعر مفصل"],
    },
    {
      icon: Settings,
      title: t.step3,
      description: "تنفيذ المشروع بأعلى معايير الجودة مع التركيب والبرمجة والاختبار",
      details: ["تركيب احترافي", "برمجة متقدمة", "اختبار شامل"],
    },
    {
      icon: CheckCircle,
      title: t.step4,
      description: "تسليم المشروع مع تدريب مبسط للمستخدمين وضمان الدعم الفني",
      details: ["تدريب المستخدمين", "دليل التشغيل", "دعم مستمر"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-full">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary">خطوات العمل</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t.stepsTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            عملية واضحة ومنظمة لضمان تنفيذ مشروعك بأفضل شكل ممكن
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="mb-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-accent text-accent-foreground">
                          <step.icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold leading-tight">{step.title}</h3>

                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                      <ul className="grid md:grid-cols-3 gap-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="p-2 rounded-full bg-accent/20">
                    <ArrowDown className="h-5 w-5 text-accent" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
