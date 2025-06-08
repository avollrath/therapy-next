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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{language === "fi" ? "Varaa aika" : "Book an appointment"}</DialogTitle>
          <DialogDescription>
            {language === "fi"
              ? "Täytä lomake varataksesi ajan terapeutille. Olemme sinuun yhteydessä pian."
              : "Fill out the form to book an appointment with a therapist. We will contact you soon."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {language === "fi" ? "Nimi" : "Name"}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {language === "fi" ? "Sähköposti" : "Email"}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                {language === "fi" ? "Puhelin" : "Phone"}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="therapist" className="text-right">
                {language === "fi" ? "Terapeutti" : "Therapist"}
              </Label>
              <Select value={formData.therapist} onValueChange={handleSelectChange} required>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder={language === "fi" ? "Valitse terapeutti" : "Select a therapist"} />
                </SelectTrigger>
                <SelectContent>
                  {language === "fi" && (
                    <>
                      <SelectItem value="maria">Maria</SelectItem>
                      <SelectItem value="mira">Mira</SelectItem>
                    </>
                  )}
                  <SelectItem value="laura">Laura</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                {language === "fi" ? "Viesti" : "Message"}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="col-span-3"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
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
