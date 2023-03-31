import { Router } from "express";
import { getAvgGrade,giveGrade } from "../controllers/gradesController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const gradesRouter : Router = Router();


gradesRouter
    .get("/grades/:gameId",getAvgGrade)
    .post("/grades",hasToken, giveGrade);


export default gradesRouter;