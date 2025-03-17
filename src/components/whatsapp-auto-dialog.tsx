"use client"

import { useEffect, useState } from "react"
import WhatsAppDialog from "./whatsapp-dialog"

export default function WhatsAppAutoDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('hasSeenWhatsAppDialog')

    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setIsDialogOpen(true)
        localStorage.setItem('hasSeenWhatsAppDialog', 'true')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
      <WhatsAppDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          groupDescription="Stay connected with fellow MUTC members. Get real-time updates about training sessions, last-minute changes, and connect with other members."
          inviteLink="https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01"
      />
  )
}
