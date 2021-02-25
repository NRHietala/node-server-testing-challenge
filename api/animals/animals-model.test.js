const request = require("supertest");
const server = require("../server");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("animals").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("Animal Model Tests", () => {
  it("shows empty array if no animals", async () => {
    const res = await request(server).get("/api/animals");
    expect(res.body).toHaveLength(0);
  });
  it("correctly gets animals", async () => {
    await db.seed.run("01-animals");
    const res = await request(server).get("/api/animals");
    expect(res.body).toHaveLength(3);
  });
});
