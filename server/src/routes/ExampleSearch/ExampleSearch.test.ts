import app from "../../index";
import request from "supertest";
describe("Example Search", () => {
  let testRequest: request.SuperTest<request.Test>;
  beforeEach(() => {
    testRequest = request(app);
  });
  it("should return a successful response with all searchable items for GET /search", (done) => {
    testRequest.get("/api/search").expect(200, done);
  });
  it("should return a successful response with all items matching the searchTerm for GET /search/:searchTerm", (done) => {
    testRequest.get("/api/search/test").expect(200, done);
  });
});