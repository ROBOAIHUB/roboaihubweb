import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
        const info = await transporter.sendMail({
            from: `"RoboAI Security" <${process.env.GMAIL_USER}>`,
            to,
            subject,
            text,
            html: html || text,
        });
        console.log("Message sent: %s", info.messageId);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: 'Failed to send email' };
    }
}
