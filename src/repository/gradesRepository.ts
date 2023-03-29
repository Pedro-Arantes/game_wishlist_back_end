import prisma from "../database/db.js";

export async function selectAvgGrades(game_id:number): Promise<any>{
    return prisma.grades.aggregate({
        where:{
            game_id
        },
        _avg:{
            grade:true
        }
    });
}
export async function postGrade(game_id:number,user_id:number,grade:number): Promise<any>{
    return prisma.grades.create({
        data:{
            game_id,
            user_id,
            grade
        }
    })
}