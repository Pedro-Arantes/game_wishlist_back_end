import { Router } from "express";
import gamesRouter from "./gamesRouter.js";
import sessionsRouter from "./sessionsRouter.js";
import usersRouter from "./usersRouter.js";
import gradesRouter from "./gradesRouter.js";
import wishlistRouter from "./wishlistRouter.js";
import profPictRouter from "./profPicturesRouter.js";
const serverRouter : Router = Router();

serverRouter
.use(gamesRouter)
.use(usersRouter)
.use(sessionsRouter)
.use(gradesRouter)
.use(wishlistRouter)
.use(profPictRouter);

export default serverRouter;