"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TherapistCardProps {
  name: string
  intro: string
  imageSrc: string
  ctaText: string
  onBooking: () => void
}

export default function TherapistCard({ name, intro, imageSrc, ctaText, onBooking }: TherapistCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="flex-1">{intro}</p>
        <Button variant="outline" className="w-full mt-auto" onClick={onBooking}>
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  )
}
