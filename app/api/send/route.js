/* eslint-disable react/react-in-jsx-scope */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_TzuNkFsC_MAFEjUEgwD23G2AXZ3dU7S76");
const fromEmail = "diyavijay2371@gmail.com";

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contancting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: "fail", error });
  }
}
