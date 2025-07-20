"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "fi" ? "en" : "fi")
  }

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#therapists", label: t("therapists") },
    { href: "#faq", label: t("faq") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center space-x-2">
          <div className="relative h-8 w-auto">
            <Image
              src="/logo.svg"
              alt="Toukolan Terapia"
              width={300}
              height={48}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-600 text-slate-700"
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
          >
            {language === "fi" ? "EN" : "FI"}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-white border-t border-slate-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-blue-600 text-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-sm font-medium self-start text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {language === "fi" ? "Switch to English" : "Vaihda suomeksi"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
