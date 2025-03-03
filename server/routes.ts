import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

function generateBotResponse(message: string): string {
  const greetings = /^(hi|hello|hey)/i;
  const howAreYou = /how are you/i;
  const whatIsYourName = /what('s| is) your name/i;
  const thanks = /thank(s| you)/i;

  if (greetings.test(message)) {
    return "Hello! How can I help you today?";
  } else if (howAreYou.test(message)) {
    return "I'm doing great, thanks for asking! How about you?";
  } else if (whatIsYourName.test(message)) {
    return "I'm ChatBot, nice to meet you!";
  } else if (thanks.test(message)) {
    return "You're welcome!";
  }
  return "I'm not sure how to respond to that. Could you rephrase?";
}

export async function registerRoutes(app: Express) {
  app.get("/api/messages", async (_req, res) => {
    const messages = await storage.getMessages();
    res.json(messages);
  });

  app.post("/api/messages", async (req, res) => {
    const body = insertMessageSchema.parse(req.body);
    const userMessage = await storage.createMessage(body);
    
    // Generate bot response
    if (!body.isBot) {
      const botResponse = generateBotResponse(body.content);
      await storage.createMessage({
        content: botResponse,
        isBot: true,
      });
    }

    res.json(userMessage);
  });

  return createServer(app);
}
