'use client'
import { useEffect, useState } from 'react'

export default function CommunityPage() {
    const [isRedirecting] = useState(true)
    
    useEffect(() => {
        // Small delay to show the page content briefly before redirect
        const timer = setTimeout(() => {
            window.location.href = 'https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01'
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const handleManualRedirect = () => {
        window.location.href = 'https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01'
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md mx-auto text-center p-8 bg-white shadow-lg">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Join Our Community!</h1>
                    <p className="text-gray-600">Connecting you to our WhatsApp group...</p>
                </div>

                {isRedirecting && (
                    <div className="mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#518581] mx-auto"></div>
                    </div>
                )}

                <div className="space-y-4">
                    <button
                        onClick={handleManualRedirect}
                        className="w-full bg-[#518581] text-white py-3 px-6 hover:bg-[#416c68] transition-colors font-medium"
                    >
                        Click here if not redirected automatically
                    </button>
                    
                    <a 
                        href="/" 
                        className="block text-[#518581] hover:text-[#416c68] transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p>You are being redirected to our WhatsApp group where you can:</p>
                    <ul className="mt-2 space-y-1 text-left">
                        <li>• Connect with fellow members</li>
                        <li>• Get training updates</li>
                        <li>• Ask questions and share experiences</li>
                        <li>• Stay updated on club events</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}