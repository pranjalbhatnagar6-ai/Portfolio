const Inquiry = require("../models/Inquiry");
const sendInquiryNotification = require("../services/emailService");

const createInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      purpose,
      budget,
      timeline,
      message,
    } = req.body;

    if (!name || !email || !purpose || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // First save inquiry in MongoDB
    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      purpose,
      budget,
      timeline,
      message,
    });

    // Then send email notification
    try {
      await sendInquiryNotification(inquiry);
      console.log("Inquiry notification email sent!");
    } catch (emailError) {
      console.error("Email Notification Failed:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      inquiryId: inquiry._id,
    });

  } catch (error) {
    console.error("Inquiry Submission Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = { createInquiry };