import { Request,Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { createWish, deleteWish, selectByGameUserId, selectWishlist } from "../repository/wishlistRepository.js";

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

export async function insertWish(req:AuthenticatedRequest,res:Response){
    const {userId} = req
    const {gameId} = req.params
    try {
        const result = createWish(userId,Number(gameId))
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function delWish(req:AuthenticatedRequest,res:Response){
    const {userId} = req
    const {id} = req.params
    try {
        const result = await deleteWish(Number(id))
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export async function getWishByGameId(req:AuthenticatedRequest,res:Response){
    const {userId} = req
    const {gameId} = req.params
    try {
        const result = await selectByGameUserId(Number(gameId),userId)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}