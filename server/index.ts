import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(express.json());

// In-memory contact messages
let messages: any[] = [];

// Contact API
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  const msg = { name, email, subject, message, createdAt: new Date().toISOString() };
  messages.push(msg);
  setTimeout(() => {
    res.json({ success: true, message: "Message sent successfully!" });
  }, 1000);
});

app.get("/api/contact", (req, res) => {
  res.json(messages);
});

// Proxy everything else to Vite dev server
app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:5173", // Vite default port
    changeOrigin: true,
    ws: true,
  })
);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
