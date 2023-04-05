import { Request,Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { selectPictures } from "../repository/profPictRepository.js";


export async function getPictures(req:Request,res:Response){
    try {
        const result = await selectPictures();
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}
