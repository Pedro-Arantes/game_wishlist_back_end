import { Router } from "express";
import { getUsers, getUsersId, postUser } from "../controllers/usersController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../models/insertUserModel.js";


const usersRouter : Router = Router();

usersRouter.post("/registration",validateSchema(userSchema),postUser);
usersRouter.get("/user",getUsers);
usersRouter.get("/userId", hasToken,getUsersId);

export default usersRouter;