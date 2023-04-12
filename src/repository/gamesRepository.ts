import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { GameEntity, GamePut,Game, GamePartial } from "../protocols/Game.js";


export async function selectGames(): Promise<GameEntity[]>{
    return prisma.games.findMany();
}
export async function selectFilterGames(platform: string,genre:string): Promise<GameEntity[]> {
    return prisma.games.findMany({
        where: {
            platform:{
                startsWith: platform,
                mode: 'insensitive',
            },
            genre:{
                startsWith:genre,
                mode:'insensitive'
            }
        },
    })
}

export async function upsertGames(game:GamePartial, id?: number,user_id?:number): Promise<GameEntity>{
    const { name,image, platform, genre,status } = game
    //prisma.games.upsert()
    return prisma.games.upsert({
        where: {
            id: !id ? 0 : id 
        },
        create: game as Game,
        update: {
            status:game.status,
        },
    })
}
export async function updateGame(game: GamePut, id: number): Promise<void> {
    const { status } = game
    //connection.query('UPDATE games SET  status=$1,grade=$2  WHERE id=$3', [status, grade, id]);
}
export async function deleteGame(id: number):Promise<GameEntity>{
   return prisma.games.delete({
    where:{
        id: id
    }
   })
   // connection.query('DELETE FROM games  WHERE id=$1', [id]);
}
export async function selectVeryGames(name: string) : Promise<GameEntity[]> {
    return prisma.games.findMany({
        where:{
            name:{
                startsWith: name,
                mode:'insensitive'
            }
        }
    })
    //connection.query('SELECT * FROM games WHERE name=$1 ', [name]);
}

export async function selectGameById(id:number): Promise<GameEntity>{
    return prisma.games.findUnique({
        where:{
            id
        }
    })
}