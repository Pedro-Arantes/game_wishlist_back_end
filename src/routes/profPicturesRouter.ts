import { Router } from "express";
import { getPictures } from "../controllers/profPictController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const profPictRouter : Router = Router();


profPictRouter
    .get("/pictures",getPictures);

export default profPictRouter;