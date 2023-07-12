import { Request, Response, Router } from "express";
import {
  Coordinates,
  nearestAttractionsLogic,
} from "../Logic/Attractions.logic";

export const attractionsRouter = Router();

attractionsRouter.get("/", async (req: Request, res: Response) => {
  const latitude: unknown = req.query.X;
  const longitude: unknown = req.query.Y;
  try {
    const result = await nearestAttractionsLogic({
      latitude: latitude === "null" ? null : latitude,
      longitude: longitude === "null" ? null : longitude,
    } as Coordinates);

    console.log({ result });
    res.status(200).json({ nearestAttractions: result });
  } catch (err) {
    res.status(404).json({});
  }

  // if (result?.err) {
  //     console.log("error");
  //     res.status(404).json(result);
  //   } else {
  //     console.log({ result });
  //     res.status(200).json(result);
  //   }
  // cron.schedule("0 */5 * * *", async () => {
  //   console.log("---------------------");
  //   console.log("running a task every 5 hours");
  //   const result: any = await weatherLogic(cityName as string);
  //   // await makeLogicCall(req, res, cityName as string);
  //   // now broadcast the updated foo..
  //   req.io.sockets.emit("update", result);
  // });
  // await makeLogicCall(req, res, cityName as string);
});
