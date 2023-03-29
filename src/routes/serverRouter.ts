import { Router } from "express";
import gamesRouter from "./gamesRouter.js";
import sessionsRouter from "./sessionsRouter.js";
import usersRouter from "./usersRouter.js";
import gradesRouter from "./gradesRouter.js";
import wishlistRouter from "./wishlistRouter.js";
const serverRouter : Router = Router();

serverRouter.use(gamesRouter);
serverRouter.use(usersRouter);
serverRouter.use(sessionsRouter);
serverRouter.use(gradesRouter);
serverRouter.use(wishlistRouter);

export default serverRouter;