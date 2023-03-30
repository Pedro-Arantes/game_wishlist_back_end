import { Router } from "express";
import { getSessions, logout, postSession } from "../controllers/sessionsController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { sessionSchema } from "../models/insertSessionModel.js";


const sessionsRouter : Router = Router();

sessionsRouter
    .post("/login",validateSchema(sessionSchema),postSession)
    .get("/session",getSessions)
    .delete("/session",hasToken,logout);

export default sessionsRouter;