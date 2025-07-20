"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  Brain,
  MapPin,
  Calendar,
  Zap,
  AlertTriangle,
  Moon,
  Shield,
  Smile,
  UserCheck,
  Cloud,
  Baby,
  Eye,
} from "lucide-react"
import Image from "next/image"
import BookingModal from "@/components/booking-modal"
import Section from "@/components/section"
import RichText from "@/components/rich-text"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const { t, language } = useLanguage()
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [selectedTherapist, setSelectedTherapist] = useState<string>("")

  const handleBookingClick = (therapist?: string) => {
    if (therapist) {
      setSelectedTherapist(therapist)
    } else {
      setSelectedTherapist("")
    }
    setBookingModalOpen(true)
  }

  // Professional icons with calm blue shades
  const helpItems = [
    { icon: <Zap className="h-5 w-5" />, text: t("help.stress"), color: "bg-blue-400" },
    { icon: <AlertTriangle className="h-5 w-5" />, text: t("help.crisis"), color: "bg-blue-400" },
    { icon: <Moon className="h-5 w-5" />, text: t("help.sleep"), color: "bg-blue-400" },
    { icon: <Shield className="h-5 w-5" />, text: t("help.anxiety"), color: "bg-blue-400" },
    { icon: <Smile className="h-5 w-5" />, text: t("help.emotions"), color: "bg-blue-400" },
    { icon: <Users className="h-5 w-5" />, text: t("help.relationships"), color: "bg-blue-400" },
    { icon: <Cloud className="h-5 w-5" />, text: t("help.depression"), color: "bg-blue-400" },
    { icon: <Baby className="h-5 w-5" />, text: t("help.parenting"), color: "bg-blue-400" },
    { icon: <Eye className="h-5 w-5" />, text: t("help.self"), color: "bg-blue-400" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} selectedTherapist={selectedTherapist} />

      {/* Hero Section - Full Screen */}
      <HeroSection />

      {/* About Section */}
      <Section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about-therapy-new.jpg" alt="About Toukolan Terapia" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">{t("about.title")}</h2>
              <RichText as="p" className="text-lg leading-relaxed text-slate-700">
                {t("about.intro")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-slate-600">
                {t("about.more")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-slate-600">
                {t("about.experience")}
              </RichText>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 section-intro">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-slate-900">
              {t("services.title")}
            </h2>
            <RichText as="p" className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("services.intro")}
            </RichText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="service-card bg-slate-50 border-blue-200">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t("therapists.mira.name")}</h3>
                <RichText as="p" className="text-slate-700">
                  {t("services.mira")}
                </RichText>
              </CardContent>
            </Card>

            <Card className="service-card bg-slate-50 border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t("therapists.laura.name")}</h3>
                <RichText as="p" className="text-slate-700">
                  {t("services.laura")}
                </RichText>
              </CardContent>
            </Card>

            <Card className="service-card bg-white border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t("therapists.maria.name")}</h3>
                <RichText as="p" className="text-slate-700">
                  {t("services.maria")}
                </RichText>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Short Therapy Section */}
      <Section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                {t("why.title")}
              </RichText>
              <RichText as="p" className="text-lg leading-relaxed text-slate-700">
                {t("why.content")}
              </RichText>
            </div>
            <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/why-therapy-new.jpg" alt="Why Short Therapy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* What Can Help Section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-slate-900">
              {t("help.title")}
            </RichText>
            <RichText as="p" className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("help.intro")}
            </RichText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-5 bg-white rounded-xl shadow-md help-item border border-slate-200"
              >
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-full ${item.color} flex items-center justify-center text-white shadow-sm`}
                >
                  {item.icon}
                </div>
                <RichText className="font-medium text-slate-800 flex-1">{item.text}</RichText>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Safe Space Section */}
      <Section className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
              {t("safe.title")}
            </RichText>
            <RichText as="p" className="text-lg leading-relaxed text-slate-700">
              {t("safe.content")}
            </RichText>
          </div>
        </div>
      </Section>

      {/* What Happens Section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/session-therapy-new.jpg" alt="What Happens in Therapy" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                {t("happens.title")}
              </RichText>
              <RichText as="p" className="font-medium text-lg leading-relaxed text-slate-700">
                {t("happens.intro")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-slate-600">
                {t("happens.content1")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-slate-600">
                {t("happens.content2")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-slate-600">
                {t("happens.content3")}
              </RichText>
            </div>
          </div>
        </div>
      </Section>

      {/* Difference Section */}
      <Section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-center text-slate-900">
              {t("difference.title")}
            </RichText>
            <RichText as="p" className="text-lg leading-relaxed text-slate-700">
              {t("difference.intro")}
            </RichText>

            <Tabs defaultValue="cognitive" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200 p-1">
                <TabsTrigger
                  value="cognitive"
                  className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 data-[state=active]:font-semibold text-slate-700 font-medium transition-all duration-200"
                >
                  Cognitive
                </TabsTrigger>
                <TabsTrigger
                  value="solution"
                  className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 data-[state=active]:font-semibold text-slate-700 font-medium transition-all duration-200"
                >
                  Solution-focused
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cognitive" className="p-6 bg-white border border-blue-200 rounded-lg mt-4 shadow-sm">
                <RichText as="p" className="leading-relaxed text-slate-700">
                  {t("difference.cognitive")}
                </RichText>
              </TabsContent>
              <TabsContent value="solution" className="p-6 bg-white border border-blue-200 rounded-lg mt-4 shadow-sm">
                <RichText as="p" className="leading-relaxed text-slate-700">
                  {t("difference.solution")}
                </RichText>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">{t("faq.title")}</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: t("faq.q1"), a: t("faq.a1") },
              { q: t("faq.q2"), a: t("faq.a2") },
              { q: t("faq.q3"), a: t("faq.a3") },
              { q: t("faq.q4"), a: t("faq.a4") },
              { q: t("faq.q5"), a: t("faq.a5") },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-sm faq-item border border-blue-100"
              >
                <RichText as="h3" className="text-lg font-medium mb-3 text-slate-900">
                  {item.q}
                </RichText>
                <RichText as="p" className="text-slate-600 leading-relaxed">
                  {item.a}
                </RichText>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">{t("location.title")}</h2>
              <RichText as="p" className="text-lg leading-relaxed text-slate-700">
                {t("location.content")}
              </RichText>
              <div className="flex items-center space-x-2 text-blue-600">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Hämeentie 157, 00560 Helsinki</span>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.0596082929883!2d24.976740277170755!3d60.21284447505422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209a776080de3%3A0x785bd4d1b1bb24a2!2sH%C3%A4meentie%20157%2C%2000560%20Helsinki!5e0!3m2!1sde!2sfi!4v1752971786674!5m2!1sde!2sfi"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toukolan Terapia Location"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Therapists Section */}
      <Section id="therapists" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">{t("therapists.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Only show Maria and Mira in Finnish */}
            {language === "fi" && (
              <>
                {/* Maria - Changed to white background */}
                <Card className="overflow-hidden h-full flex flex-col shadow-lg border-slate-200">
                  <div className="relative h-64">
                    <Image src="/maria-new.jpg" alt="Maria" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-white">
                    <h3 className="text-2xl font-bold text-slate-900">{t("therapists.maria.name")}</h3>
                    <div className="flex-1 space-y-4">
                      <RichText as="p" className="leading-relaxed text-slate-700">
                        {t("therapists.maria.intro")}
                      </RichText>
                      <RichText as="p" className="leading-relaxed text-slate-600">
                        {t("therapists.maria.more")}
                      </RichText>
                      <RichText as="p" className="text-sm leading-relaxed text-slate-600">
                        {t("therapists.maria.contact")}
                      </RichText>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                      onClick={() => handleBookingClick("maria")}
                    >
                      {t("hero.cta")}
                    </Button>
                  </CardContent>
                </Card>

                {/* Mira */}
                <Card className="overflow-hidden h-full flex flex-col shadow-lg border-slate-200">
                  <div className="relative h-64">
                    <Image src="/mira-new.jpg" alt="Mira" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-white">
                    <h3 className="text-2xl font-bold text-slate-900">{t("therapists.mira.name")}</h3>
                    <div className="flex-1 space-y-4">
                      <RichText as="p" className="leading-relaxed text-slate-700">
                        {t("therapists.mira.intro")}
                      </RichText>
                      <RichText as="p" className="leading-relaxed text-slate-600">
                        {t("therapists.mira.more")}
                      </RichText>
                      <RichText as="p" className="text-sm leading-relaxed text-slate-600">
                        {t("therapists.mira.contact")}
                      </RichText>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                      onClick={() => handleBookingClick("mira")}
                    >
                      {t("hero.cta")}
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Laura - always visible in both languages */}
            <Card
              className={`overflow-hidden h-full flex flex-col shadow-lg border-slate-200 ${
                language === "en" ? "md:col-span-3 max-w-2xl mx-auto" : ""
              }`}
            >
              <div className="relative h-64">
                <Image src="/laura-new.jpg" alt="Laura" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-slate-900">{t("therapists.laura.name")}</h3>
                <div className="flex-1 space-y-4">
                  <RichText as="p" className="leading-relaxed text-slate-700">
                    {t("therapists.laura.intro")}
                  </RichText>
                  <RichText as="p" className="leading-relaxed text-slate-600">
                    {t("therapists.laura.more")}
                  </RichText>
                  <RichText as="p" className="text-sm leading-relaxed text-slate-600">
                    {t("therapists.laura.contact")}
                  </RichText>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  onClick={() => handleBookingClick("laura")}
                >
                  {t("hero.cta")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 md:py-24 bg-blue-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
              {t("hero.subtitle")}
            </RichText>
            <RichText as="p" className="text-lg text-slate-600">
              {language === "fi"
                ? "Ota yhteyttä ja varaa aika tapaamiselle jo tänään."
                : "Contact us and book an appointment today."}
            </RichText>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full"
                onClick={() => handleBookingClick()}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t("hero.cta")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full bg-transparent"
              >
                <UserCheck className="mr-2 h-4 w-4" />
                {language === "fi" ? "Ota yhteyttä" : "Contact Us"}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
