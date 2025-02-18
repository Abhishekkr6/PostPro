import User from "@/models/User";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const baseURL = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000, 
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

   
    const emailHtml = emailType === "VERIFY"
      ? `<div style="font-family: Arial, sans-serif; text-align: center;">
            <h2>Verify Your Email</h2>
            <p>Click the button below to verify your email address.</p>
            <a href="${baseURL}/verifyemail?token=${hashedToken}" 
               style="display:inline-block; padding:10px 20px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
               Verify Email
            </a>
            <p>If you didn't request this, you can ignore this email.</p>
         </div>`
      : `<div style="font-family: Arial, sans-serif; text-align: center;">
            <h2>Reset Your Password</h2>
            <p>Click the button below to reset your password.</p>
            <a href="${baseURL}/resetpassword?token=${hashedToken}" 
               style="display:inline-block; padding:10px 20px; background-color:#28a745; color:white; text-decoration:none; border-radius:5px;">
               Reset Password
            </a>
            <p>If you didn't request a password reset, you can ignore this email.</p>
         </div>`;

    const mailOptions = {
      from: "no-reply@yourapp.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: emailHtml,
    };

    const mailRes = await transport.sendMail(mailOptions);
    return mailRes;
  } catch (error) {
    console.error("❌ Email Sending Error:", error);
    throw new Error(error.message);
  }
};
