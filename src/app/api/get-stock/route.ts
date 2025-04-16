// src/app/api/get-stock/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: NextRequest) { // eslint-disable-line @typescript-eslint/no-unused-vars
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
            apiVersion: "2025-03-31.basil",
        });

        const mini = await stripe.paymentLinks.retrieve('plink_1RBp7OLzLlUc2QEsiXuIlGoU');
        const sprint = await stripe.paymentLinks.retrieve('plink_1RBp8KLzLlUc2QEsJRNz2IZh');

        // Check restrictions safely
        const miniSessions = mini.restrictions?.completed_sessions;
        const sprintSessions = sprint.restrictions?.completed_sessions;

        const miniSpots = miniSessions ? miniSessions.limit - miniSessions.count : 0;
        const sprintSpots = sprintSessions ? sprintSessions.limit - sprintSessions.count : 0;

        // Return JSON
        return NextResponse.json({ miniSpots, sprintSpots });
    } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
        return NextResponse.json({ error: "Failed to retrieve stock" }, { status: 500 });
    }
}
