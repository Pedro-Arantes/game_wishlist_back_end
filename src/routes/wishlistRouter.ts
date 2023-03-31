import { Router } from "express";
import { delWish, getWishByGameId, getWishlist, insertWish } from "../controllers/wishlistController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const wishlistRouter : Router = Router();


wishlistRouter
    .get("/wish",hasToken,getWishlist)
    .get("/wish/:gameId",hasToken,getWishByGameId)
    .delete("/wish/:id",hasToken,delWish)
    .post("/wish/:gameId",hasToken,insertWish)


export default wishlistRouter;