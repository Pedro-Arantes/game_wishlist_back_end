import { Request,Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { createComment, delComment, selectComments } from "../repository/commentsRepository.js";

export async function getComments(req:Request,res:Response){
    const {gameId} = req.params
    try {
        const result = await selectComments(Number(gameId))
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}
export async function postComment(req:AuthenticatedRequest,res:Response){

    const {userId} = req
    const {text,gameId} = req.body

    try {
        const result = await createComment(text,Number(gameId),userId)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export async function deleteComment(req:AuthenticatedRequest,res:Response){
    const {id} = req.params
    try {
        const result = await delComment(Number(id))
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}