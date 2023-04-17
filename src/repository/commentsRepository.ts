import prisma from "../database/db.js";


export async function selectComments(game_id:number): Promise<any>{
    return prisma.comments.findMany({
        where:{
            game_id
        },
        select:{
            id:true,
            text:true,
            user_id:true,
            user:{
                select:{
                    name:true,
                    profpicture:{
                        select:{
                            picture:true
                        }
                    },
                },
            }
        }
    })
}
export async function createComment(text:string,game_id:number,user_id:number):Promise<any>{
    return prisma.comments.create({
        data:{
            text,
            game_id,
            user_id
        }
    })
}
export async function delComment(id:number){
    return prisma.comments.delete({
        where:{
            id
        }
    })
}