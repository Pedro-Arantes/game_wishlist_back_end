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

describe("POST /login ",()=>{
    it("",()=>{})
})
describe("GET /session ",()=>{
    it("",()=>{})
})