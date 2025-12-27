import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Load Environment Variables
    const WP_URL = process.env.WP_URL;
    const WP_USER = process.env.WP_USER;
    const WP_PASS = process.env.WP_APP_PASSWORD;
    const TAG_ID = process.env.FLUENT_TAG_AUDIT ? Number(process.env.FLUENT_TAG_AUDIT) : null;

    if (!WP_URL || !WP_PASS) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // 1. Prepare Data for FluentCRM
    const data = {
      email: email,
      status: "subscribed",
      tags: TAG_ID ? [TAG_ID] : [], // Adds the tag that triggers your automation
    };

    // 2. Send to WordPress API
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
      console.error("FluentCRM Error:", result);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true, result });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}