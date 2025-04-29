// src/app/api/get-stock/route.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function GET() { // eslint-disable-line @typescript-eslint/no-unused-vars

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
            apiVersion: "2025-03-31.basil",
        });

        const mini   = await stripe.paymentLinks.retrieve("plink_1RBp7OLzLlUc2QEsiXuIlGoU");
        const sprint = await stripe.paymentLinks.retrieve("plink_1RBp8KLzLlUc2QEsJRNz2IZh");

        const miniSessions   = mini.restrictions?.completed_sessions;
        const sprintSessions = sprint.restrictions?.completed_sessions;

        const miniSpots   = miniSessions   ? miniSessions.limit   - miniSessions.count   : 0;
        const sprintSpots = sprintSessions ? sprintSessions.limit - sprintSessions.count : 0;

        return NextResponse.json(
            { miniSpots, sprintSpots },
            { headers: { "Cache-Control": "no-store" } }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500, headers: { "Cache-Control": "no-store" } }
        );
    }
}

