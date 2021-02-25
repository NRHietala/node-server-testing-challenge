const request = require("supertest");
const server = require("./server");

describe("Server Tests", () => {
  it("check for correct environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  it("Server responds 200 status code", async () => {
    const statusCode = 200;
    const res = await request(server).get("/");
    expect(res.status).toBe(statusCode);
  });
});
