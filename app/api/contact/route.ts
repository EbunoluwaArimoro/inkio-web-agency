import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, website, stage, pain, budget } = body;

    const WP_URL = process.env.WP_URL;
    const WP_USER = process.env.WP_USER;
    const WP_PASS = process.env.WP_APP_PASSWORD;
    const TAG_ID = process.env.FLUENT_TAG_CONTACT ? Number(process.env.FLUENT_TAG_CONTACT) : null;

    if (!WP_URL || !WP_PASS) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const data = {
      email: email,
      first_name: firstName,
      status: "subscribed",
      tags: TAG_ID ? [TAG_ID] : [], 
      // ADD THESE TWO LINES (Copied from your working Audit route)
      resubscribe: true, 
      force: true,       
      custom_values: {
        company_website: website,   
        business_stage: stage,      
        comments: pain,             
        budget_range: budget        
      }
    };

    // CHANGE THIS URL
    // Old: .../subscribers/subscribe
    // New: .../subscribers (This is the standard endpoint that we know works)
    const response = await fetch(`${WP_URL}/wp-json/fluent-crm/v2/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(`${WP_USER}:${WP_PASS}`),
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        // Handle "Already assigned" explicitly just in case, similar to your audit route
        if (result.message && result.message.includes("already assigned")) {
             return NextResponse.json({ 
              success: true, 
              message: "Welcome back! Your details have been updated." 
            });
        }
      return NextResponse.json({ error: result.message || "WordPress sync failed." }, { status: 400 });
    }

    const message = result.message?.includes("updated") 
      ? "Welcome back! Your details have been updated." 
      : "Application Received!";

    return NextResponse.json({ success: true, message });

  } catch (error: any) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}