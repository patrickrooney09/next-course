import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resent = new Resend(process.env.RESENT_API_KEY);

export async function POST() {
  resent.emails.send({
    from: "...",
    to: "programmingwithmosh@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Patrick" />,
  });

  return NextResponse.json({});
}
