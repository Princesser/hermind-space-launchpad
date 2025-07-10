import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "herMind Space <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to herMind Space Waitlist! 💜",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #9f7aea, #ec4899); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to herMind Space! 🌟</h1>
          </div>
          
          <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; margin-bottom: 20px;">
            <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
              Thank you for joining our waitlist! You're now part of a growing community dedicated to improving mental health for African teen girls.
            </p>
            
            <h3 style="color: #9f7aea; margin-bottom: 15px;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>📚 You'll be the first to know when we launch our mental health education platform</li>
              <li>🤝 Get early access to our peer support groups and community features</li>
              <li>🧘‍♀️ Receive exclusive wellness resources and guided meditation sessions</li>
              <li>💬 Join our safe space for open conversations about mental health</li>
            </ul>
          </div>
          
          <div style="background: linear-gradient(135deg, #ddd6fe, #fce7f3); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Our Mission</h3>
            <p style="color: #555; line-height: 1.6; font-style: italic;">
              "I'm using this platform to step up from a stumbling block to a stepping stone to change the story of unseen and unheard girls in Africa."
            </p>
            <p style="color: #333; font-weight: bold; margin: 10px 0 0 0;">- Princess Mbamalu, Founder</p>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Stay connected with us:</p>
            <a href="https://www.linkedin.com/in/princess-mbamalu%E2%9A%A1%EF%B8%8F-29134821a/" 
               style="display: inline-block; background: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
              Connect on LinkedIn
            </a>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 2px solid #eee; margin-top: 30px;">
            <p style="color: #888; font-size: 14px;">
              You're receiving this email because you joined the herMind Space waitlist.<br>
              We're excited to have you as part of our community! 💜
            </p>
          </div>
        </div>
      `,
    });

    console.log("Waitlist confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);