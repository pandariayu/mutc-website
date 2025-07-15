import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

const resend = new Resend(process.env.RESEND_API_KEY!)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Email templates
function getMembershipEmailTemplate(membershipType: string, amount: string, date: string, receiptUrl: string) {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to MUTC!</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #518581; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { background: #416c68; color: white; padding: 15px; text-align: center; font-size: 14px; }
        .button { background: #518581; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
        .highlight { background: #e8f4f3; padding: 15px; border-left: 4px solid #518581; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to MUTC! 🏃‍♂️🚴‍♀️🏊‍♂️</h1>
    </div>
    
    <div class="content">
        <h2>Thank you for joining us!</h2>
        <p>We're excited to welcome you to the Melbourne University Triathlon Club family!</p>
        
        <div class="highlight">
            <h3>Your Membership Details:</h3>
            <p><strong>Membership Type:</strong> ${membershipType}</p>
            <p><strong>Amount Paid:</strong> $${amount}</p>
            <p><strong>Payment Date:</strong> ${date}</p>
            <p><strong>Receipt:</strong> <a href="${receiptUrl}">View Receipt</a></p>
        </div>
        
        <h3>What's Next?</h3>
        <ul>
            <li>✅ Join our training sessions - check our website for schedules</li>
            <li>✅ Connect with our community on social media</li>
            <li>✅ Stay tuned for upcoming events and competitions</li>
        </ul>
        
        <p>If you have any questions, don't hesitate to reach out to us!</p>
        
        <a href="https://melbunitriathlon.club" class="button">Visit Our Website</a>
    </div>
    
    <div class="footer">
        <p>Melbourne University Triathlon Club<br>
        Email: team@melbunitriathlon.club<br>
        Website: melbunitriathlon.club</p>
    </div>
</body>
</html>`
}

function getEventRegistrationEmailTemplate(distanceType: string, amount: string, receiptUrl: string) {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Registration Confirmed!</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #518581; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { background: #416c68; color: white; padding: 15px; text-align: center; font-size: 14px; }
        .event-details { background: #e8f4f3; padding: 15px; border-left: 4px solid #518581; margin: 15px 0; }
        .button { background: #518581; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Registration Confirmed! 🏆</h1>
    </div>
    
    <div class="content">
        <h2>You're all set for the Mini Triathlon!</h2>
        <p>Thank you for registering. We can't wait to see you at the event!</p>
        
        <div class="event-details">
            <h3>Event Details:</h3>
            <p><strong>Event:</strong> MUTC Mini Triathlon 2025 S2</p>
            <p><strong>Distance:</strong> ${distanceType}</p>
            <p><strong>Date:</strong> [Event Date]</p>
            <p><strong>Location:</strong> University of Melbourne</p>
            <p><strong>Amount Paid:</strong> $${amount}</p>
            <p><strong>Receipt:</strong> <a href="${receiptUrl}">View Receipt</a></p>
        </div>
        
        <h3>Pre-Event Checklist:</h3>
        <ul>
            <li>🏊‍♂️ Prepare your swim gear</li>
            <li>🚴‍♀️ Check-in starts 30 minutes before your wave</li>
            <li>🏃‍♂️ Arrive early for briefing and warm-up</li>
        </ul>
        
        <p>We'll send you more detailed information closer to the event date.</p>
        
        <a href="https://melbunitriathlon.club/events/mini-triathlon" class="button">Event Information</a>
    </div>
    
    <div class="footer">
        <p>Melbourne University Triathlon Club<br>
        Email: team@melbunitriathlon.club<br>
        Website: melbunitriathlon.club</p>
    </div>
</body>
</html>`
}

async function sendMembershipConfirmationEmail(
  customerEmail: string,
  customerName: string,
  amount: number,
  membershipType: string,
  receiptUrl: string
) {
  const htmlContent = getMembershipEmailTemplate(
    membershipType,
    (amount / 100).toFixed(2),
    new Date().toLocaleDateString(),
    receiptUrl
  )

  try {
    const data = await resend.emails.send({
      from: 'MUTC Team <team@melbunitriathlon.club>',
      to: [customerEmail],
      subject: '🎉 Welcome to MUTC - Membership Confirmed!',
      html: htmlContent,
    })

    console.log('Membership email sent successfully:', data)
    return data
  } catch (error) {
    console.error('Error sending membership email:', error)
    throw error
  }
}

async function sendEventRegistrationEmail(
  customerEmail: string,
  customerName: string,
  amount: number,
  distanceType: string,
  receiptUrl: string
) {
  const htmlContent = getEventRegistrationEmailTemplate(
    distanceType,
    (amount / 100).toFixed(2),
    receiptUrl
  )

  try {
    const data = await resend.emails.send({
      from: 'MUTC Team <team@melbunitriathlon.club>',
      to: [customerEmail],
      subject: '🏊‍♂️ Event Registration Confirmed - MUTC Mini Triathlon',
      html: htmlContent,
    })

    console.log('Event registration email sent successfully:', data)
    return data
  } catch (error) {
    console.error('Error sending event registration email:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    console.error('Webhook signature verification failed:', errorMessage)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        
        console.log('Checkout session completed:', session.id)
        
        // Get customer details
        const customerEmail = session.customer_details?.email
        const customerName = session.customer_details?.name || 'Member'
        
        if (!customerEmail) {
          console.error('No customer email found in session')
          break
        }

        const amountTotal = session.amount_total || 0
        if (amountTotal === 4000) {
                     await sendMembershipConfirmationEmail(
             customerEmail,
             customerName,
             amountTotal,
             'UniMelb Student Membership',
             `https://dashboard.stripe.com/receipts/${session.id}` || ''
           )
        } else if (amountTotal === 12000) {
                     await sendMembershipConfirmationEmail(
             customerEmail,
             customerName,
             amountTotal,
             'Non-Student Membership',
             `https://dashboard.stripe.com/receipts/${session.id}` || ''
           )
        }
        // Event registrations
        else if (amountTotal === 1000) { // $10 - Mini distance
                     await sendEventRegistrationEmail(
             customerEmail,
             customerName,
             amountTotal,
             'Mini Distance',
             `https://dashboard.stripe.com/receipts/${session.id}` || ''
           )
        } else if (amountTotal === 1200) { // $12 - Sprint distance
                     await sendEventRegistrationEmail(
             customerEmail,
             customerName,
             amountTotal,
             'Sprint Distance',
             `https://dashboard.stripe.com/receipts/${session.id}` || ''
           )
        }
        
        break

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('PaymentIntent succeeded:', paymentIntent.id)
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
