import { Express } from "express";
import { attractionsRouter } from "../controllers/Attractions.controller";

export const routes = (app: Express) => {
  app.use("/api/attractions", attractionsRouter);
};
