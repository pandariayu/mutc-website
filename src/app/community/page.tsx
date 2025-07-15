'use client'
import { useEffect } from 'react'

export default function CommunityPage() {
    useEffect(() => {
        // Redirect to WhatsApp group
        window.location.href = 'https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01'
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1>Join Our Community!</h1>
                <p>Redirecting to WhatsApp group...</p>
                <a href="https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01" className="button">
                    Click here if not redirected automatically
                </a>
            </div>
        </div>
    )
}