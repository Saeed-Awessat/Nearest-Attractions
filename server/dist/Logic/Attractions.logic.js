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
exports.nearestAttractionsLogic = void 0;
const calcDistance = (Point1, Point2) => {
    let { latitude: lat1, longitude: lon1 } = Point1;
    let { latitude: lat2, longitude: lon2 } = Point2;
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;
    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;
    // calculate the result
    return c * r;
};
const nearestAttractionsLogic = (userCoord) => __awaiter(void 0, void 0, void 0, function* () {
    const { latitude, longitude } = userCoord;
    if (latitude === null || longitude === null) {
        throw "userCoord not found";
    }
    else {
        const data = yield require("../api/data/index").default;
        return data === null || data === void 0 ? void 0 : data.sort((a, b) => {
            const point1 = { latitude: a.X, longitude: a.Y };
            const point2 = { latitude: b.X, longitude: b.Y };
            const root = userCoord;
            return calcDistance(point1, root) - calcDistance(point2, root);
        });
    }
});
exports.nearestAttractionsLogic = nearestAttractionsLogic;
