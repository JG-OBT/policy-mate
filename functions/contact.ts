export async function onRequestPost(context: any) {
  const { request, env } = context;

  try {
    const { name, email, company, message } = await request.json();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "PolicyMate <onboarding@resend.dev>",
        to: ["jal.gilbertson@gmail.com"],
        subject: "New PolicyMate Enquiry",
        html: `
          <h2>New Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.text();

    if (!response.ok) {
      return new Response(data, {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Function crashed before reaching Resend" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
