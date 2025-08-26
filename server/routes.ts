// Express backend removed. Use /api/contact.ts for API routes on Vercel.

// The following code has been removed as it is no longer needed.

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "../shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.JUTHI_EMAIL_USER,
    pass: process.env.JUTHI_EMAIL_PASS,
  },
});

// Send notification email
async function sendNotificationEmail(formData: any) {
  if (!process.env.JUTHI_EMAIL_USER || !process.env.JUTHI_EMAIL_PASS) {
    console.log("Email credentials not configured for Juthi");
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.JUTHI_EMAIL_USER,
      to: process.env.JUTHI_NOTIFICATION_EMAIL || process.env.JUTHI_EMAIL_USER,
      subject: `New Contact Message for Juthi: ${formData.subject}`,
      html: `
        <h3>New Contact Form Submission for Juthi's Portfolio</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    console.log("Notification email sent successfully to Juthi");
  } catch (error) {
    console.error("Failed to send notification email:", error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    // Simulate sending and always return success
    setTimeout(() => {
      res.json({
        success: true,
        message: "Message sent successfully!"
      });
    }, 1000); // Simulate network delay
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    // Return empty or in-memory messages
    const messages = await storage.getContactMessages();
    res.json(messages);
  });

  const httpServer = createServer(app);
  return httpServer;
}
