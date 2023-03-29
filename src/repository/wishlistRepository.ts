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