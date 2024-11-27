import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    console.log(data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL!,
        pass: process.env.PASSWORD!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Thank you for reaching out!",
      html: `<p>Dear ${name},<br/>
        Thank you for contacting me via email. <br/>
        I appreciate your time and will review your message carefully. You can expect a response shortly. <br/>
        Should you need any further assistance, please don’t hesitate to let me know.<br/>
        Best regards,<br/>
        Seema Wazarkar<br/>
        </p>`, // Using the provided message for the email body
      replyTo: process.env.EMAIL,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: ` New Contact Email from ${name}`,
      html: `<p> Dear Seema Wazarkar, <br/>
        You have received a new email from ${name}. Below is the message they sent:<br/>
        
        Message : <br/>
            ${message}<br/>

        </p>`, // Using the provided message for the email body
      replyTo: email,
    });

    return new NextResponse("Mail Sent", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
