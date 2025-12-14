import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ SMTP Configuration Error:', error);
    } else {
        console.log('✅ SMTP Server is ready to send emails');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Email server is running' });
});

// Send payment receipt email endpoint
app.post('/api/send-payment-receipt', async (req, res) => {
    try {
        const {
            customerName,
            customerEmail,
            customerMobile,
            paymentId,
            amount,
            standard,
            city,
        } = req.body;

        console.log('📧 Sending payment receipt to:', customerEmail);

        // Format the date
        const transactionDate = new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata',
        });

        // Read the HTML template
        const templatePath = path.join(__dirname, 'templates', 'workshop-confirmation.html');
        let htmlContent = fs.readFileSync(templatePath, 'utf8');

        // Replace template variables
        htmlContent = htmlContent
            .replace(/{{Name}}/g, customerName)
            .replace(/{{Email}}/g, customerEmail)
            .replace(/{{Mobile}}/g, customerMobile)
            .replace(/{{TransactionId}}/g, paymentId)
            .replace(/{{Amount}}/g, amount)
            .replace(/{{TransactionDate}}/g, transactionDate)
            .replace(/{{Standard}}/g, standard)
            .replace(/{{City}}/g, city)
            .replace(/{{WhatsAppLink}}/g, process.env.WHATSAPP_LINK || '#')
            .replace(/{{SupportEmail}}/g, process.env.SUPPORT_EMAIL || 'support@memorymasters.com');

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: customerEmail,
            subject: `Payment Confirmation - Memory MASTERS (₹${amount})`,
            html: htmlContent,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email sent successfully:', info.messageId);

        res.json({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId,
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message,
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Email server running on port ${PORT}`);
    console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
    console.log(`📧 SMTP User: ${process.env.SMTP_USER}`);
});
