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
      return NextResponse.json({ error: "Server configuration error: Missing WP_URL or Password" }, { status: 500 });
    }

    // Prepare Data
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

    console.log("Sending Data to WP:", JSON.stringify(data)); // Log what we are sending

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
      // DEBUG MODE: Return the ACTUAL WordPress error to the frontend
      console.error("WP Error:", result);
      return NextResponse.json({ 
        error: "WordPress Rejected Request", 
        details: result // <--- This will show us the real error
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server Error", details: error.message }, { status: 500 });
  }
}