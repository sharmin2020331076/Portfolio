// Express backend removed. Use /api/contact.ts for API routes on Vercel.

// The following code has been removed as it is no longer needed.


// In-memory storage for contact messages
let messages: any[] = [];

export const storage = {
  async createContactMessage(data: any) {
    const message = { ...data, createdAt: new Date().toISOString() };
    messages.push(message);
    return message;
  },

  async getContactMessages() {
    // Return messages sorted by createdAt
    return messages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  },
};
