const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendInquiryNotification = async (inquiry) => {
  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: inquiry.email,
    subject: `New Portfolio Inquiry - ${inquiry.purpose}`,
    text: `
You have received a new inquiry from your portfolio!

Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone || "Not provided"}

Purpose: ${inquiry.purpose}
Budget: ${inquiry.budget || "Not specified"}
Timeline: ${inquiry.timeline || "Not specified"}

Message:
${inquiry.message}

--------------------------------
Portfolio Contact System
    `,
  });
};

module.exports = sendInquiryNotification;