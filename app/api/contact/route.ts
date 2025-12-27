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

    // Prepare Data for FluentCRM
    const data = {
      email: email,
      first_name: firstName,
      status: "subscribed",
      tags: TAG_ID ? [TAG_ID] : [],
      
      // MAPPING: Form Input -> FluentCRM Slug
      custom_values: {
        company_website: website,   // Maps to your existing 'company_website'
        business_stage: stage,      // Maps to the new 'business_stage'
        comments: pain,             // Maps 'Tech Pain' to your existing 'comments' field
        budget_range: budget        // Maps to the new 'budget_range'
      }
    };

    const response = await fetch(`${WP_URL}/wp-json/fluentcrm/v2/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(`${WP_USER}:${WP_PASS}`),
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("FluentCRM Contact Error:", result);
      return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}