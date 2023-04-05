import prisma from "../database/db.js";

export async function selectPictures(): Promise<any>{
    return prisma.profPictures.findMany()
}
