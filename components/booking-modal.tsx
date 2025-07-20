"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedTherapist?: string
}

export default function BookingModal({ open, onOpenChange, selectedTherapist }: BookingModalProps) {
  const { t, language } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    therapist: selectedTherapist || "",
    message: "",
  })

  // Update therapist when selectedTherapist prop changes
  useEffect(() => {
    if (selectedTherapist) {
      setFormData((prev) => ({ ...prev, therapist: selectedTherapist }))
    }
  }, [selectedTherapist])

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        therapist: selectedTherapist || prev.therapist,
      }))
    }
  }, [open, selectedTherapist])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, therapist: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          subject: `New booking request from ${formData.name}`,
          from_name: "Toukolan Terapia Website",
          therapist: formData.therapist,
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: language === "fi" ? "Kiitos yhteydenotostasi!" : "Thank you for your message!",
          description:
            language === "fi" ? "Olemme sinuun yhteydessä pian." : "We will get back to you as soon as possible.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          therapist: "",
          message: "",
        })
        onOpenChange(false)
      } else {
        toast({
          variant: "destructive",
          title: language === "fi" ? "Virhe lomakkeen lähetyksessä" : "Error submitting form",
          description: data.message || (language === "fi" ? "Yritä uudelleen myöhemmin." : "Please try again later."),
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: language === "fi" ? "Virhe lomakkeen lähetyksessä" : "Error submitting form",
        description: language === "fi" ? "Yritä uudelleen myöhemmin." : "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white p-4 sm:p-6 border-slate-200 shadow-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left border-b border-slate-100 pb-4">
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {language === "fi" ? "Varaa aika" : "Book an appointment"}
          </DialogTitle>
          <DialogDescription className="text-slate-600 mt-2">
            {language === "fi"
              ? "Täytä lomake varataksesi ajan terapeutille. Olemme sinuun yhteydessä pian."
              : "Fill out the form to book an appointment with a therapist. We will contact you soon."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-slate-900">
                {language === "fi" ? "Nimi" : "Name"} *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                {language === "fi" ? "Sähköposti" : "Email"} *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-slate-900">
                {language === "fi" ? "Puhelin" : "Phone"}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="therapist" className="text-sm font-medium text-slate-900">
                {language === "fi" ? "Terapeutti" : "Therapist"} *
              </Label>
              <Select value={formData.therapist} onValueChange={handleSelectChange} required>
                <SelectTrigger className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white">
                  <SelectValue placeholder={language === "fi" ? "Valitse terapeutti" : "Select a therapist"} />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 shadow-lg">
                  {language === "fi" && (
                    <>
                      <SelectItem value="maria" className="hover:bg-blue-50 focus:bg-blue-50">
                        Maria
                      </SelectItem>
                      <SelectItem value="mira" className="hover:bg-blue-50 focus:bg-blue-50">
                        Mira
                      </SelectItem>
                    </>
                  )}
                  <SelectItem value="laura" className="hover:bg-blue-50 focus:bg-blue-50">
                    Laura
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-slate-900">
                {language === "fi" ? "Viesti" : "Message"}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px] bg-white"
                rows={4}
                placeholder={
                  language === "fi" ? "Kerro lyhyesti tilanteestasi..." : "Tell us briefly about your situation..."
                }
              />
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            >
              {language === "fi" ? "Peruuta" : "Cancel"}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? language === "fi"
                  ? "Lähetetään..."
                  : "Submitting..."
                : language === "fi"
                  ? "Lähetä"
                  : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
