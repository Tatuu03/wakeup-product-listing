import request from "supertest";
import app from "../app";

describe("GET /api/restaurants", () => {
  it("should return a paginated list of restaurants with products", async () => {
    const res = await request(app).get("/api/restaurants");

    expect(res.statusCode).toBe(200);

    // Check that top-level structure exists
    expect(res.body).toHaveProperty("data");
    expect(res.body).toHaveProperty("currentPage");
    expect(res.body).toHaveProperty("totalPages");

    // Check that data is an array
    expect(Array.isArray(res.body.data)).toBe(true);

    // Check that the first restaurant has expected fields
    const firstRestaurant = res.body.data[0];
    expect(firstRestaurant).toHaveProperty("id");
    expect(firstRestaurant).toHaveProperty("name");
    expect(Array.isArray(firstRestaurant.products)).toBe(true);

    // Check that first product has expected fields
    const firstProduct = firstRestaurant.products[0];
    expect(firstProduct).toHaveProperty("id");
    expect(firstProduct).toHaveProperty("name");
    expect(firstProduct).toHaveProperty("price");
  });
});
