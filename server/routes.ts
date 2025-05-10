import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // For a static website, we don't need any API routes
  const httpServer = createServer(app);
  return httpServer;
}
