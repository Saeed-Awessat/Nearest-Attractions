"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const Attractions_controller_1 = require("../controllers/Attractions.controller");
const routes = (app) => {
    app.use("/api/attractions", Attractions_controller_1.attractionsRouter);
};
exports.routes = routes;
