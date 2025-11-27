"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/i18n"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navigation = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/services" },
    { name: t.about, href: "/about" },
    { name: t.faq, href: "/faq" },
    { name: t.contact, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-around">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">
              <span className="font-black">A</span>mane<span className="font-black">x</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary px-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageToggle />
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+201146403111">
              <Phone className="h-4 w-4 me-2" />
              {t.callNow}
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://wa.me/201146403111?text=عايز%20معاينة%20فورية" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 me-2" />
              {t.requestVisit}
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={language === "ar" ? "left" : "right"}>
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <LanguageToggle />
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+201146403111">
                  <Phone className="h-4 w-4 me-2" />
                  {t.callNow}
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://wa.me/201146403111?text=عايز%20معاينة%20فورية"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 me-2" />
                  {t.requestVisit}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
