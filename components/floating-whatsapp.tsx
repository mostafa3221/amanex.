"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function FloatingWhatsApp() {
  const { language } = useLanguage()

  return (
    <div className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-50">
      <Button
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        asChild
      >
        <a
          href="https://wa.me/201146403111?text=مرحبا%20أريد%20الاستفسار%20عن%20خدماتكم"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">{language === "ar" ? "واتساب" : "WhatsApp"}</span>
        </a>
      </Button>
    </div>
  )
}
