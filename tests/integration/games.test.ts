import supertest from "supertest";
import { cleanDb, init } from "../helpers";
import app from "../server";

beforeAll(async () => {
    await init();
});
  
  beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

describe("GET /games ",()=>{
    it("",()=>{})
})
describe("GET /games/:platform",()=>{
    it("",()=>{})
})
describe("POST /games",()=>{
    it("",()=>{})
})
describe("PUT /games",()=>{
    it("",()=>{})
})
describe("DELETE /games",()=>{
    it("",()=>{})
})