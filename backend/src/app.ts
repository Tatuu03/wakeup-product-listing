import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/restaurants";
import orderRoutes from "./routes/orders";
import productRoutes from "./routes/products";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

export default app;
