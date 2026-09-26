import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { Lead } from "@/lib/types";

// =============================================================================
// FIRST MOTORS — LEAD API ROUTE
// This is a stub. Connect to a real backend/CRM/email service before going live.
//
// To activate email notifications, install resend: npm install resend
// Then add RESEND_API_KEY to your .env.local
// =============================================================================

export async function POST(request: NextRequest) {
  try {
    const body: Lead = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.type) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, phone, type" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      ...body,
      timestamp: new Date().toISOString(),
      source: request.headers.get("referer") || "website",
    };

    // --- LOG TO SERVER CONSOLE (for Hostinger server logs) ---
    console.log("[FIRST MOTORS LEAD]", JSON.stringify(lead, null, 2));

    // --- OPTIONAL: Connect email notifications (requires Resend or SMTP) ---
    // Install resend: npm install resend
    // Add RESEND_API_KEY to environment variables
    //
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'leads@firstmotorsbsr.com',
    //   to: 'info@firstmotorsbsr.com',
    //   subject: `New Lead: ${lead.type} from ${lead.name}`,
    //   text: JSON.stringify(lead, null, 2),
    // });

    // --- OPTIONAL: Save to database (Supabase, Firebase, MongoDB, etc.) ---

    // --- OPTIONAL: Send WhatsApp notification via Meta Business API ---


    return NextResponse.json({
      success: true,
      message: "Lead received successfully",
      leadId: `FM-${Date.now()}`,
    });
  } catch (error) {
    console.error("[LEAD API ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: List leads (admin only - add authentication before exposing)
export async function GET() {
  // TODO: Add authentication before enabling this endpoint
  return NextResponse.json({
    message: "Lead listing endpoint. Add authentication before enabling.",
  });
}
