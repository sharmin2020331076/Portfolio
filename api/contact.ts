import type { VercelRequest, VercelResponse } from '@vercel/node';

let messages: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    // Simulate saving message
    const msg = { name, email, subject, message, createdAt: new Date().toISOString() };
    messages.push(msg);
    // Simulate sending (no real backend)
    setTimeout(() => {
      res.status(200).json({
        success: true,
        message: "Message sent successfully!"
      });
    }, 1000);
  } else if (req.method === 'GET') {
    res.status(200).json(messages);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
