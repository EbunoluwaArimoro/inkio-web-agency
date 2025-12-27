import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Check if Vercel can see the variables
    const WP_URL = process.env.WP_URL;
    const WP_USER = process.env.WP_USER;
    const WP_PASS = process.env.WP_APP_PASSWORD;

    const varsStatus = {
      has_url: !!WP_URL,
      has_user: !!WP_USER,
      has_pass: !!WP_PASS,
      url_value: WP_URL || "MISSING", // Safe to show URL
    };

    if (!WP_URL || !WP_USER || !WP_PASS) {
      return NextResponse.json({ 
        status: "FAIL", 
        message: "Vercel cannot read the Environment Variables.",
        debug: varsStatus 
      });
    }

    // 2. Clean the password (Remove spaces)
    const cleanPass = WP_PASS.replace(/\s/g, '');
    
    // 3. Test the Connection to WordPress
    // We try to fetch the "Self" user profile to test credentials
    const response = await fetch(`${WP_URL}/wp-json/wp/v2/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(`${WP_USER}:${cleanPass}`).toString('base64'),
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ 
        status: "FAIL", 
        message: "Variables exist, but WordPress rejected the login.", 
        wp_response: data 
      });
    }

    // 4. Success!
    return NextResponse.json({ 
      status: "SUCCESS", 
      message: "API Connection is PERFECT.", 
      connected_as: data.name 
    });

  } catch (error: any) {
    return NextResponse.json({ 
      status: "ERROR", 
      message: "Server crashed during test.", 
      details: error.message 
    });
  }
}