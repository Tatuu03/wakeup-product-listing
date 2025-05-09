// src/api/index.ts
import axios from "axios";

// Tus modelos
export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Restaurant {
  id: number;
  name: string;
  products: Product[];
}

export interface OrderRequest {
  restaurantId: number;
  productIds: number[];
}

// Interfaz para la respuesta paginada que devuelve tu backend
interface PaginatedResponse<T> {
  currentPage: number;
  data: T[];
  totalPages: number;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

// src/api/index.ts
export async function fetchRestaurants(
  page: number,
  limit = 5
): Promise<PaginatedResponse<Restaurant>> {
  const { data } = await api.get<PaginatedResponse<Restaurant>>(
    `/restaurants?page=${page}&limit=${limit}`
  );
  return data;
}

export async function fetchProducts(
  restaurantId: number,
  page: number,
  limit = 10
): Promise<PaginatedResponse<Product>> {
  const { data } = await api.get<PaginatedResponse<Product>>("/products", {
    params: { restaurantId, page, limit },
  });

  return data;
}

export async function createOrder(body: OrderRequest) {
  const { data } = await api.post("/orders", body);
  return data;
}
