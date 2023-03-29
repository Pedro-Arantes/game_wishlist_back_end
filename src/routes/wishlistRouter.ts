import { Router } from "express";
import { getWishlist } from "../controllers/wishlistController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const wishlistRouter : Router = Router();


wishlistRouter.get("/wish",hasToken,getWishlist)


export default wishlistRouter;