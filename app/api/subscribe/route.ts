import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let email = "";

  try {
    const body = await request.json();
    email = body.email;
    console.log("Incoming email parsed:", email);
  } catch (error) {
    console.error("Failed to parse request body:", error);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!email) {
    console.error("No email provided after parsing.");
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const OMNISEND_API_KEY = process.env.OMNISEND_API_KEY;
    console.log("API Key status:", OMNISEND_API_KEY ? "Exists ✅" : "Missing ❌");

    const OMNISEND_ENDPOINT = "https://api.omnisend.com/v3/contacts";

    const response = await fetch(OMNISEND_ENDPOINT, {
      method: "POST",
      headers: {
        "X-API-KEY": OMNISEND_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifiers: [{ type: "email", id: email }],
        status: "subscribed",
      }),
    });

    console.log("Omnisend Response Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Omnisend API error:", errorData);
      throw new Error("Failed to subscribe user in Omnisend");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Caught server error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
