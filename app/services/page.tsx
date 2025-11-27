import { Header } from "@/components/sections/header"
import { Services } from "@/components/sections/services"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function ServicesPage() {
  return (
    <main className="min-h-screen max-w-screen-2xl  flex flex-col justify-center">
      <Header />
      <div className="pt-0">
        <Services />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
