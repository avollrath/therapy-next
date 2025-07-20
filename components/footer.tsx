"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-slate-200 bg-white py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-slate-600">{t("footer.rights")}</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
          <Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
            {t("footer.privacy")}
          </Link>
          <Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
            {t("footer.terms")}
          </Link>
          <Link href="#contact" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
            {t("footer.contact")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
