"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { Globe } from "lucide-react"
import { useEffect } from "react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const html = document.documentElement
    html.lang = language
    html.dir = language === "ar" ? "rtl" : "ltr"

    if (language === "ar") {
      html.classList.add("font-arabic")
      html.classList.remove("font-sans")
    } else {
      html.classList.add("font-sans")
      html.classList.remove("font-arabic")
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2 bg-transparent">
      <Globe className="h-4 w-4" />
      {language === "ar" ? "EN" : "عربي"}
    </Button>
  )
}
