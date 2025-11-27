import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhyUs } from "@/components/sections/why-us"
import { Steps } from "@/components/sections/steps"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl  flex flex-col justify-center px-2.5">
      <Header />
      <Hero />
      <WhyUs />
      <Steps />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
