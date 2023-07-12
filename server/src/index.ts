import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { routes as setApplicationRoutes } from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//CRUD routes
setApplicationRoutes(app);

//error handling
app.use((error: any, req: Request, res: Response) => {
  console.log("saeed");
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
