import app from "./index";
import request from "supertest";
describe("app", () => {
  let testRequest: request.SuperTest<request.Test>;
  beforeEach(() => {
    testRequest = request(app);
  });
  it("should return a successful response for GET /", (done) => {
    testRequest.get("/").expect(200, done);
  });
});
