

const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER, // ✅ lowercase "user"
    pass: process.env.SMTP_PASS, // ✅ lowercase "pass"
  },
});

// 📌 POST contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, mobile, message } = req.body;

    const newContact = new Contact({ name, email, subject, mobile, message });
    await newContact.save();
    console.log("✅ Saved in DB:", newContact);

    // 📩 Send email with the contact data
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_PASS, // You’ll receive the message on your Gmail
      subject: `📬 New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

     // 3️⃣ Send THANK YOU email to USER
    const userMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "🙏 Thanks for Connecting With Us",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <title>Thank You Email</title>
      </head>
      <body
        style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f6f9fc;"
      >
        <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#f6f9fc">
          <tr>
            <td align="center">
              <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                style="margin:40px auto;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                <tr>
                  <td align="center" style="padding:20px;background-color:#916dff;">
                    <h1 style="color:white;margin:0">Thank You!</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;color:#333333;font-size:16px">
                    <div style="border-radius:8px;padding:12px;box-shadow:0px 0px 5px 0px rgba(0,0,0,0.5);">
                      <p style="margin:0 0 15px">
                        Dear <strong style="color:#916dff;">${name}</strong>,
                      </p>
                      <p style="margin:0 0 15px">
                        Thank you for connecting with us. We have received your details:
                      </p>
                      
                      <p style="margin:0 0 15px">
                        Our team will review your request and get back to you shortly.
                      </p>
                      <p style="margin:0">Warm regards,<br />The real sip </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#f1f1f1" style="padding:20px;text-align:center;font-size:12px;color:#888;">
                    © 2025 Ankit Patidar. All rights reserved.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `,
    };
    await transporter.sendMail(userMail);

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Contact saved & email sent" });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, message: "Contact not saved or email not sent" });
  }
});

// 📌 GET contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch contacts" });
  }
});

module.exports = router;
