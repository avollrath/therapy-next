"use client";

import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-therapy-new.jpg"
          alt="Toukolan Terapia"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-1xl lg:text-2xl max-w-3xl text-white drop-shadow-md font-medium">
          {t("hero.subtitle").replace(/<\/?strong>/g, "")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link href="#therapists">
            <Button
              size="lg"
              className="bg-blue-400 hover:bg-blue-500 text-white px-16 py-10 text-2xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 !h-8 !w-8" />
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
