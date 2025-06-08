"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Brain, MapPin, Calendar, MessageCircle } from "lucide-react"
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

  return (
    <div className="flex flex-col min-h-screen">
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} selectedTherapist={selectedTherapist} />

      {/* Hero Section - Full Screen */}
      <HeroSection />

      {/* About Section */}
      <Section id="about" className="py-16 md:py-24 bg-cream-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about-therapy.jpg" alt="About Toukolan Terapia" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">{t("about.title")}</h2>
              <RichText as="p" className="text-lg leading-relaxed text-gray-700">
                {t("about.intro")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-gray-600">
                {t("about.more")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-gray-800">
              {t("services.title")}
            </h2>
            <RichText as="p" className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("services.intro")}
            </RichText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="service-card bg-sage-100 border-sage-200 hover:bg-sage-200 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-sage-500 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t("therapists.mira.name")}</h3>
                <RichText as="p" className="text-gray-700">
                  {t("services.mira")}
                </RichText>
              </CardContent>
            </Card>

            <Card className="service-card bg-cream-100 border-cream-200 hover:bg-cream-200 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-cream-500 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t("therapists.laura.name")}</h3>
                <RichText as="p" className="text-gray-700">
                  {t("services.laura")}
                </RichText>
              </CardContent>
            </Card>

            <Card className="service-card bg-sky-100 border-sky-200 hover:bg-sky-200 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t("therapists.maria.name")}</h3>
                <RichText as="p" className="text-gray-700">
                  {t("services.maria")}
                </RichText>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Short Therapy Section */}
      <Section className="py-16 md:py-24 bg-cream-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">
                {t("why.title")}
              </RichText>
              <RichText as="p" className="text-lg leading-relaxed text-gray-700">
                {t("why.content")}
              </RichText>
            </div>
            <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/why-therapy.jpg" alt="Why Short Therapy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* What Can Help Section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-gray-800">
              {t("help.title")}
            </RichText>
            <RichText as="p" className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("help.intro")}
            </RichText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.stress") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.crisis") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.sleep") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.anxiety") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.emotions") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.relationships") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.depression") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.parenting") },
              { icon: <MessageCircle className="h-5 w-5" />, text: t("help.self") },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-sage-50 rounded-xl shadow-sm help-item hover:bg-sage-100 transition-all duration-300"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <RichText className="font-medium text-gray-700">{item.text}</RichText>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Safe Space Section */}
      <Section className="py-16 md:py-24 bg-sage-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">
              {t("safe.title")}
            </RichText>
            <RichText as="p" className="text-lg leading-relaxed text-gray-700">
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
              <Image src="/session-therapy.jpg" alt="What Happens in Therapy" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">
                {t("happens.title")}
              </RichText>
              <RichText as="p" className="font-medium text-lg leading-relaxed text-gray-700">
                {t("happens.intro")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-gray-600">
                {t("happens.content1")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-gray-600">
                {t("happens.content2")}
              </RichText>
              <RichText as="p" className="leading-relaxed text-gray-600">
                {t("happens.content3")}
              </RichText>
            </div>
          </div>
        </div>
      </Section>

      {/* Difference Section */}
      <Section className="py-16 md:py-24 bg-cream-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-center text-gray-800">
              {t("difference.title")}
            </RichText>
            <RichText as="p" className="text-lg leading-relaxed text-gray-700">
              {t("difference.intro")}
            </RichText>

            <Tabs defaultValue="cognitive" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white">
                <TabsTrigger value="cognitive" className="data-[state=active]:bg-sage-100">
                  Cognitive
                </TabsTrigger>
                <TabsTrigger value="solution" className="data-[state=active]:bg-sage-100">
                  Solution-focused
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cognitive" className="p-6 bg-white border border-sage-200 rounded-lg mt-4">
                <RichText as="p" className="leading-relaxed text-gray-700">
                  {t("difference.cognitive")}
                </RichText>
              </TabsContent>
              <TabsContent value="solution" className="p-6 bg-white border border-sage-200 rounded-lg mt-4">
                <RichText as="p" className="leading-relaxed text-gray-700">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">{t("faq.title")}</h2>
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
                className="bg-sage-50 p-6 rounded-xl shadow-sm faq-item hover:bg-sage-100 transition-all duration-300"
              >
                <RichText as="h3" className="text-lg font-medium mb-3 text-gray-800">
                  {item.q}
                </RichText>
                <RichText as="p" className="text-gray-600 leading-relaxed">
                  {item.a}
                </RichText>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section id="contact" className="py-16 md:py-24 bg-cream-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">{t("location.title")}</h2>
              <RichText as="p" className="text-lg leading-relaxed text-gray-700">
                {t("location.content")}
              </RichText>
              <div className="flex items-center space-x-2 text-sage-600">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Hämeentie 157, 00560 Helsinki</span>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.0596082929906!2d24.97674027802672!3d60.21284447505418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209a776080de3%3A0x785bd4d1b1bb24a2!2sH%C3%A4meentie%20157%2C%2000560%20Helsinki!5e0!3m2!1sde!2sfi!4v1748701857731!5m2!1sde!2sfi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          </div>
        </div>
      </Section>

      {/* Therapists Section */}
      <Section id="therapists" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">{t("therapists.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Only show Maria and Mira in Finnish */}
            {language === "fi" && (
              <>
                {/* Maria */}
                <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image src="/maria-therapist.jpg" alt="Maria" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-sage-50">
                    <h3 className="text-2xl font-bold text-gray-800">{t("therapists.maria.name")}</h3>
                    <div className="flex-1 space-y-4">
                      <RichText as="p" className="leading-relaxed text-gray-700">
                        {t("therapists.maria.intro")}
                      </RichText>
                      <RichText as="p" className="leading-relaxed text-gray-600">
                        {t("therapists.maria.more")}
                      </RichText>
                      <RichText as="p" className="text-sm leading-relaxed text-gray-600">
                        {t("therapists.maria.contact")}
                      </RichText>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-sage-300 text-sage-700 hover:bg-sage-100"
                      onClick={() => handleBookingClick("maria")}
                    >
                      {t("hero.cta")}
                    </Button>
                  </CardContent>
                </Card>

                {/* Mira */}
                <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image src="/mira-therapist.jpg" alt="Mira" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-cream-50">
                    <h3 className="text-2xl font-bold text-gray-800">{t("therapists.mira.name")}</h3>
                    <div className="flex-1 space-y-4">
                      <RichText as="p" className="leading-relaxed text-gray-700">
                        {t("therapists.mira.intro")}
                      </RichText>
                      <RichText as="p" className="leading-relaxed text-gray-600">
                        {t("therapists.mira.more")}
                      </RichText>
                      <RichText as="p" className="text-sm leading-relaxed text-gray-600">
                        {t("therapists.mira.contact")}
                      </RichText>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-cream-300 text-cream-700 hover:bg-cream-100"
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
              className={`overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ${
                language === "en" ? "md:col-span-3 max-w-2xl mx-auto" : ""
              }`}
            >
              <div className="relative h-64">
                <Image src="/laura-therapist.jpg" alt="Laura" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4 flex-1 flex flex-col bg-sky-50">
                <h3 className="text-2xl font-bold text-gray-800">{t("therapists.laura.name")}</h3>
                <div className="flex-1 space-y-4">
                  <RichText as="p" className="leading-relaxed text-gray-700">
                    {t("therapists.laura.intro")}
                  </RichText>
                  <RichText as="p" className="leading-relaxed text-gray-600">
                    {t("therapists.laura.more")}
                  </RichText>
                  <RichText as="p" className="text-sm leading-relaxed text-gray-600">
                    {t("therapists.laura.contact")}
                  </RichText>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-sky-300 text-sky-700 hover:bg-sky-100"
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
      <Section className="py-16 md:py-24 bg-sage-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <RichText as="h2" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">
              {t("hero.subtitle")}
            </RichText>
            <RichText as="p" className="text-lg text-gray-600">
              {language === "fi"
                ? "Ota yhteyttä ja varaa aika tapaamiselle jo tänään."
                : "Contact us and book an appointment today."}
            </RichText>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-full"
                onClick={() => handleBookingClick()}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t("hero.cta")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 rounded-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {language === "fi" ? "Ota yhteyttä" : "Contact Us"}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
