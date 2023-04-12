import { Router } from "express";
import { deleteComment, getComments, postComment } from "../controllers/commentsController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";

const commentsRouter : Router = Router();


commentsRouter
    .get("/comments/:gameId",getComments)
    .post("/comments",hasToken,postComment)
    .delete("/comments/:id",hasToken,deleteComment);


export default commentsRouter;