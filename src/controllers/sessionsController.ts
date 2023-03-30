import { Request,Response } from "express";
import { UserLogin } from "../protocols/User.js";
import { Session } from "../protocols/Session.js";
import { deleteSession, insertSession, selectSessions } from "../repository/sessionsRepository.js";
import { selectLoginUser } from "../repository/usersRepository.js";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { v4 as uuid} from 'uuid';

export async function getSessions(req:Request,res:Response){

    try {
        const result = await selectSessions()
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

export async function postSession(req:Request,res:Response){
    const user:UserLogin = req.body
    const token: string = uuid();
    try {
        const userEntity = await selectLoginUser(user)
        if (!userEntity) {
            return res.sendStatus(401)
        }
        const session :Session = {
            user_id: userEntity.id,
            token: token
        }
        const result = await insertSession(session)
        res.status(201).send(result.token)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function logout(req:AuthenticatedRequest,res:Response){
    const {userId} = req
    try {
        const result = await deleteSession(Number(userId))
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}