"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attractionsRouter = void 0;
const express_1 = require("express");
const Attractions_logic_1 = require("../Logic/Attractions.logic");
exports.attractionsRouter = (0, express_1.Router)();
exports.attractionsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const latitude = req.query.X;
    const longitude = req.query.Y;
    try {
        const result = yield (0, Attractions_logic_1.nearestAttractionsLogic)({
            latitude: latitude === "null" ? null : latitude,
            longitude: longitude === "null" ? null : longitude,
        });
        console.log({ result });
        res.status(200).json({ nearestAttractions: result });
    }
    catch (err) {
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
}));
