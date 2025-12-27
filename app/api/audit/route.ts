import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const WP_URL = process.env.WP_URL;
    const WP_USER = process.env.WP_USER;
    const WP_PASS = process.env.WP_APP_PASSWORD;
    const TAG_ID = process.env.FLUENT_TAG_AUDIT ? Number(process.env.FLUENT_TAG_AUDIT) : null;

    if (!WP_URL || !WP_PASS) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const data = {
      email: email,
      status: "subscribed",
      tags: TAG_ID ? [TAG_ID] : [], 
    };

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
      if (result.details?.email?.unique) {
        return NextResponse.json({ error: "This email is already registered." }, { status: 400 });
      }
      return NextResponse.json({ error: "Failed to subscribe" }, { status: response.status });
    }

    return NextResponse.json({ success: true, result });

  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}