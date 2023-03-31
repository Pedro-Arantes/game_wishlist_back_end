import prisma from "../database/db.js";

export async function selectWishlist(user_id:number): Promise<any>{
    return prisma.wishlist.findMany({
        where:{
            user_id
        },
        include:{
            game: true
        }
    })
}
export async function selectByGameUserId(game_id:number,user_id:number):Promise<any>{
    return prisma.wishlist.findFirst({
        where:{
            game_id,
            user_id
        }
    })
}

export async function deleteWish(id:number):Promise<any>{
    return prisma.wishlist.delete({
        where:{
            id
        }
    })
}

export async function createWish(user_id:number,game_id:number):Promise<any>{
    return prisma.wishlist.create({
        data:{
            user_id,
            game_id
        }
    })
}