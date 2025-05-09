import { Router, Request, Response } from "express";
import { restaurants } from "../data/restaurants";

const router = Router();

router.get("/", (req, res) => {
  const id = req.query.id ? parseInt(req.query.id as string) : null;

  if (id !== null) {
    const restaurant = restaurants.find((r) => r.id === id);
    if (!restaurant) {
      res.status(404).json({ error: "Restaurant not found" });
    }
    res.json(restaurant); // sin paginar productos aquí
  }

  // paginación de restaurantes
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 2;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = restaurants.slice(start, end);

  res.json({
    data: paginated,
    currentPage: page,
    totalPages: Math.ceil(restaurants.length / limit),
  });
});

export default router;
