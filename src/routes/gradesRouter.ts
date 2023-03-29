import { Router } from "express";
import { getAvgGrade } from "../controllers/gradesController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const gradesRouter : Router = Router();


gradesRouter.get("/grades/:gameId",getAvgGrade)


export default gradesRouter;