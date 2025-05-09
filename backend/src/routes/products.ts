// src/routes/products.ts
import { Router, Request, Response } from "express";
import { restaurants } from "../data/restaurants";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const restaurantId = parseInt(req.query.restaurantId as string);
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 5;

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  if (!restaurant) {
    res.status(404).json({ error: "Restaurant not found" });
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  const products = restaurant?.products || [];
  const paginated = products.slice(start, end);

  res.json({
    data: paginated,
    currentPage: page,
    totalPages: Math.ceil(products.length / limit),
  });
});

export default router;
