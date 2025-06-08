"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-therapy.jpg" alt="Toukolan Terapia" fill className="object-cover" priority />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center space-y-8 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-800 drop-shadow-sm">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl text-gray-700 drop-shadow-sm font-medium">
          {t("hero.subtitle").replace(/<\/?strong>/g, "")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button
            size="lg"
            className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {}}
          >
            {t("hero.cta")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white bg-white/90 hover:bg-white text-gray-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t("about")}
          </Button>
        </div>
      </div>
    </section>
  )
}
