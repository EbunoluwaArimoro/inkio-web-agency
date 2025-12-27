import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const WP_URL = process.env.WP_URL;
    const WP_USER = process.env.WP_USER;
    const WP_PASS = process.env.WP_APP_PASSWORD;
    const TAG_ID = process.env.FLUENT_TAG_AUDIT ? Number(process.env.FLUENT_TAG_AUDIT) : null;

    if (!WP_URL || !WP_PASS) return NextResponse.json({ error: "Config error" }, { status: 500 });

    const data = { 
      email: email, 
      status: "subscribed", 
      tags: TAG_ID ? [TAG_ID] : [],
      // These two lines allow re-subscribing without the "No Route" or "Duplicate" error
      resubscribe: true,
      force: true 
    };

    // We go back to the base /subscribers endpoint because it's the most compatible
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
      // If it's a duplicate, WordPress might still return a 400 but with a success message inside
      if (result.message && result.message.includes("already assigned")) {
         return NextResponse.json({ 
          success: true, 
          message: "Welcome back! We've updated your request." 
        });
      }
      return NextResponse.json({ error: result.message || "Failed to subscribe" }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Success! Check your email for the blueprint." 
    });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}