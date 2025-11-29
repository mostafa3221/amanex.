"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, DollarSign, Headphones } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function WhyUs() {
  const { language } = useLanguage()
  const t = translations[language]

  // عداد: يبدأ فورًا – كله يخلص في 2 ثانية – الأصغر يخلص الأول
const useCountUpAuto = (value: string | number, maxDuration = 2000) => {
  const [count, setCount] = useState(0)

  const num = typeof value === "number" ? value : parseInt(value)
  const suffix = typeof value === "string" ? value.replace(num.toString(), "") : ""

  useEffect(() => {
    let current = 0

    // عدد الخطوات ثابت = 120 خطوة خلال 2 ثانية
    const steps = 120
    const stepTime = maxDuration / steps
    const increment = num / steps

    const timer = setInterval(() => {
      current += increment

      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [num, maxDuration])

  return count + suffix
}


  const features = [
    {
      icon: Award,
      title: t.certifiedEngineers,
      description: "فريق من المهندسين المعتمدين مع خبرة تزيد عن 10 سنوات في مجال الاتصالات والأمن",
      stats: "10+ سنوات خبرة",
    },
    {
      icon: Clock,
      title: t.timeCommitment,
      description: "نلتزم بالمواعيد المحددة ونضمن تسليم المشاريع في الوقت المناسب مع جودة عالية",
      stats: "98% التزام بالمواعيد",
    },
    {
      icon: DollarSign,
      title: t.transparentPricing,
      description: "أسعار واضحة وشفافة بدون تكاليف خفية مع ضمان شامل على جميع الأعمال والقطع",
      stats: "ضمان 2 سنة",
    },
    {
      icon: Headphones,
      title: t.quickSupport,
      description: "دعم فني متاح على مدار الساعة لحل أي مشاكل أو استفسارات بعد التركيب",
      stats: "دعم 24/7",
    },
  ]

  const achievements = [
    { number: "500+", label: "مشروع مكتمل" },
    { number: "24", label: "ساعة استجابة" },
    { number: "98%", label: "رضا العملاء" },
    { number: "50+", label: "شريك معتمد" },
  ]

  return (
    <section className="py-20">
      <div className="container max-w-full">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary">لماذا نحن</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t.whyUsTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            نتميز بالخبرة والاحترافية في تقديم أفضل الحلول التقنية لعملائنا
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg leading-tight">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.stats}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements (العدادات) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const display = useCountUpAuto(achievement.number, 2000) // ← هنا المدة كلها 2s

            return (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {display}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
