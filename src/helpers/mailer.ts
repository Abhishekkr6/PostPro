import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7c2c1c5c2b0f2c",
        pass: "9b4b8b0a0a8e0d",
      },
    });
    const mailOptions = {
      from: 'bar@example.com', 
      to: email, 
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password", 
      html: "<b>Hello world?</b>", 
    };
    const mailRes = await transporter.sendMail(mailOptions);
    return mailRes;
  } catch (error) {
    throw new Error(error.message);
  }
};
