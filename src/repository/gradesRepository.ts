import prisma from "../database/db.js";
import { GameEntity } from "../protocols/Game.js";
import { GradeAvg, GradeEntity } from "../protocols/Grade.js";

export async function selectAvgGrades(game_id:number): Promise<GradeAvg>{
    return prisma.grades.aggregate({
        where:{
            game_id
        },
        _avg:{
            grade:true
        }
    });
}
export async function postGrade(game_id:number,user_id:number,grade:number): Promise<GradeEntity>{
    return prisma.grades.create({
        data:{
            game_id,
            user_id,
            grade
        }
    })
}
export async function upsertGrade(game_id:number,user_id:number,grade:number,id?:number,):Promise<GradeEntity>{
    return prisma.grades.upsert({
        where:{
            id: !id ? 0 : id 
        },
        create:{
            game_id,
            user_id,
            grade
        },
        update:{
            grade
        }
    })
}

export async function selectGrade(user_id:number,game_id:number):Promise<GradeEntity>{
    return prisma.grades.findFirst({
        where:{
            user_id,
            game_id
        }
    })
}