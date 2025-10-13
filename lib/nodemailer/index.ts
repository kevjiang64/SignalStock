import nodemailer from "nodemailer";
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    }
})

export const sendWelcomeEmail = async({ email, name, intro}: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"SignalStock <signalstock@gmail.com>"`,
        to: email,
        subject: `Welcome to SignalStock - your stock market toolkit is ready!`,
        text: "Thank for joining SignalStock",
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}