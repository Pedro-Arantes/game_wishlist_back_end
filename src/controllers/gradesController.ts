import { Request,Response } from "express";
import {  upsertGames } from "../repository/gamesRepository.js";
import { selectAvgGrades,postGrade, selectGrade, upsertGrade } from "../repository/gradesRepository.js";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { GradeEntity } from "../protocols/Grade.js";

export async function getAvgGrade(req:Request,res:Response){
    const {gameId} = req.params
    try {
        const result = await selectAvgGrades(Number(gameId))
        res.status(200).send(result._avg)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}
export async function giveGrade(req:AuthenticatedRequest,res:Response){
    const {gameId,grade} = req.body
    const {userId} = req
    const obj = {
        status: true
    }
    try {
        await upsertGames(obj,Number(gameId))
        const grades = await selectGrade(userId,gameId)
        let result : GradeEntity;
        if(!grades){
            result = await upsertGrade(Number(gameId),userId,Number(grade))
        }else{
             result = await upsertGrade(Number(gameId),userId,Number(grade),grades.id)
        }
        res.status(201).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}