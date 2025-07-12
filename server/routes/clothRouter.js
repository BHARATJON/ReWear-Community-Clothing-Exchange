import express from 'express';
import {
    uploadCloth,
    getMarketplace,
    buyCloth,
    getMyOrders
} from "../controllers/clothController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const clothRouter = express.Router();

clothRouter.post("/upload", authMiddleware, uploadCloth);
clothRouter.get("/marketplace", authMiddleware, getMarketplace);
clothRouter.post("/buy", authMiddleware, buyCloth);
clothRouter.get("/my-orders", authMiddleware, getMyOrders);

export default clothRouter;
