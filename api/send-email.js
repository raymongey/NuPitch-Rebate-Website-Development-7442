import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, body } = req.body;
    
    // Validate required fields
    if (!to || !subject || !body) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: '"NuPitch Website" <no-reply@usenupitch.com>',
      to: to, // This should be set to info@usenupitch.com in the request
      subject: subject,
      text: body,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success
    return res.status(200).json({ message: 'Email sent successfully' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}