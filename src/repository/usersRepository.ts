import prisma from "../database/db.js";
import { User, UserEntity, UserLogin, UserPicture } from "../protocols/User.js";

export async function selectUsers(): Promise<UserEntity[]>{
    return prisma.users.findMany();
}
export async function selectUsersById(id:number): Promise<UserPicture>{
    return prisma.users.findFirst({
        where:{
            id
        },
        include:{
            profpicture:true
        }
    });
}

export async function selectLoginUser(user:UserLogin): Promise<UserEntity>{
    return prisma.users.findFirst({
        where:{
            email: user.email,
            password: user.password
        }
    })
}

export async function insertUser(user:User):Promise<UserEntity>{
    return prisma.users.create({
        data:user
    })
}
export async function selectEmailUser(email: string) : Promise<UserEntity[]> {
    return prisma.users.findMany({
        where:{
            email:{
                startsWith: email,
            }
        }
    })
}
export async function updatePicture(prof_picture:number,id:number):Promise<UserEntity>{
    return prisma.users.update({
        where:{
            id
        },
        data:{
            prof_picture
        }
    })
}