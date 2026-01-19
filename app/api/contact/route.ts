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
      resubscribe: true, 
      force: true,       
      custom_values: {
        company_website: website,   
        business_stage: stage,      
        comments: pain,             
        budget_range: budget        
      }
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

    // If the request failed...
    if (!response.ok) {
      console.error("FluentCRM Error Response:", result); // Helpful for Vercel logs

      // Convert the entire result object to a string to check for keywords
      const errorString = JSON.stringify(result).toLowerCase();
      
      // Check if it's an "existing user" error
      // 422 is the standard code for "Unprocessable Entity" (duplicate email)
      const isExistingUser = 
        errorString.includes("already") || 
        errorString.includes("exists") || 
        errorString.includes("duplicate") ||
        response.status === 422; 

      if (isExistingUser) {
         return NextResponse.json({ 
          success: true, 
          message: "Welcome back! We've updated your details." 
        });
      }

      // If it's some other real error, show it
      return NextResponse.json({ error: result.message || "WordPress sync failed." }, { status: 400 });
    }

    // Success Case
    const message = result.message?.toLowerCase().includes("updated") 
      ? "Welcome back! Your details have been updated." 
      : "Application Received!";

    return NextResponse.json({ success: true, message });

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}