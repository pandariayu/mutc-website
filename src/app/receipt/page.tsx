'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ReceiptPage() {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session')

    useEffect(() => {
        if (sessionId) {
            // Redirect to Stripe dashboard or your own receipt handler
            window.location.href = `https://dashboard.stripe.com/receipts/${sessionId}`
        }
    }, [sessionId])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Redirecting to your receipt...</p>
        </div>
    )
}