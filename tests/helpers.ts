import prisma from "./database/db";
import { PrismaClient } from "@prisma/client";
import { Express } from "express";
import app from "./server";

export async function cleanDb(){

    await prisma.games.deleteMany({});
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});
}
let prismas: PrismaClient;
function connectDb(): void {
    prismas = new PrismaClient();
}

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}