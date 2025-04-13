"use client"

import { useEffect, useState } from "react"
import PopupDialog from "./popup-dialog"

export default function AutoPopupDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const hasSeenWhatsAppDialog = localStorage.getItem('hasSeenWhatsAppDialog')
    // const hasSeenEventDialog = localStorage.getItem('hasSeenEventDialog')

    if (!hasSeenWhatsAppDialog) {
      const timer = setTimeout(() => {
        setIsDialogOpen(true)
        localStorage.setItem('hasSeenWhatsAppDialog', 'true')
      }, 1000)

      return () => clearTimeout(timer)
    }

  }, [])


  return (
      <PopupDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          groupDescription="Stay connected with fellow MUTC members. Get real-time updates about training sessions, last-minute changes, and connect with other members."
          link="https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01"
          confirmText="Join Now"
      />

  )
}
