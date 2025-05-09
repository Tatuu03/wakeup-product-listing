import request from "supertest";
import app from "../app";

describe("POST /api/orders", () => {
  it("should create an order with valid restaurant and product IDs", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        restaurantId: 1,
        productIds: [1001, 1002],
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Order created successfully");
  });

  it("should return 404 if restaurant does not exist", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        restaurantId: 9999,
        productIds: [1001, 1002],
      });

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Restaurant not found");
  });

  it("should return 400 if productIds are missing or not an array", async () => {
    const res = await request(app).post("/api/orders").send({
      restaurantId: 1,
      productIds: null,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Invalid payload");
  });

  it("should return 400 if one or more product IDs are invalid", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        restaurantId: 1,
        productIds: [1001, 9999],
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toMatch(/Invalid product IDs/);
  });
});
