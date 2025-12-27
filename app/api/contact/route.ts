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
      custom_values: {
        company_website: website,   
        business_stage: stage,      
        comments: pain,             
        budget_range: budget        
      }
    };

    // We use the /subscribe endpoint because it handles "Create OR Update" automatically
    const response = await fetch(`${WP_URL}/wp-json/fluent-crm/v2/subscribers/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(`${WP_USER}:${WP_PASS}`),
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: result.message || "WordPress sync failed." }, { status: 400 });
    }

    // Check if the user was already there or new
    const message = result.message?.includes("updated") 
      ? "Welcome back! Your details have been updated." 
      : "Application Received!";

    return NextResponse.json({ success: true, message });

  } catch (error: any) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}