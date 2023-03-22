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

describe("POST /registration ",()=>{
    it("",()=>{})
})
describe("GET /user ",()=>{
    it("",()=>{})
})
