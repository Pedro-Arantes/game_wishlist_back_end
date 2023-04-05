import { Router } from "express";
import { delGame, getGameById, getGames, getPlatformGames, postGames, putGame } from "../controllers/gamesController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { gameSchema } from "../models/insertGameModel.js";

const gamesRouter : Router = Router();

gamesRouter
                            .post("/games",validateSchema(gameSchema),postGames)
                            .get("/games",getGames)
                            .get("/games/:platform",getPlatformGames)
                            .get("/games/unique/:id",getGameById)
                            .put("/games",hasToken,putGame)
                            .delete("/games/:game_id",hasToken,delGame);

export default gamesRouter;