export async function verifyTurnstileToken(token: string) {
  const secretKey = process.env.CLOUDFLARE_SECRET_KEY;
  if (!secretKey) {
    console.error("CLOUDFLARE_SECRET_KEY is not set");
    return false;
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    }
  );

  const data = await response.json();
  return data.success;
}