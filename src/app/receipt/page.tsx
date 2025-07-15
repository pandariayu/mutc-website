'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

function ReceiptRedirect() {
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
            <div className="text-center">
                <p className="text-lg">Redirecting to your receipt...</p>
                <div className="mt-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#518581] mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

function ReceiptLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <p className="text-lg">Loading receipt...</p>
                <div className="mt-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#518581] mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default function ReceiptPage() {
    return (
        <Suspense fallback={<ReceiptLoading />}>
            <ReceiptRedirect />
        </Suspense>
    )
}