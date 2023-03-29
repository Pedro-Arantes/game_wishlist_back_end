import { Request,Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { selectWishlist } from "../repository/wishlistRepository.js";

export async function getWishlist(req:AuthenticatedRequest,res:Response){
    const {userId} = req
    try {
        const result = await selectWishlist(Number(userId))
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}