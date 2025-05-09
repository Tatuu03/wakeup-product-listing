// data/restaurants.ts

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

function createDummyRestaurants(count: number, productsPer: number): Restaurant[] {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    return {
      id,
      name: `Restaurante ${id}`,
      products: Array.from({ length: productsPer }, (_, j) => ({
        id: id * 1000 + j + 1,
        name: `Producto ${j + 1} de Restaurante ${id}`,
        price: Math.floor(Math.random() * 400 + 100), // precios entre 100 y 499
      })),
    };
  });
}

// Generamos 50 restaurantes, cada uno con 20 productos
export const restaurants = createDummyRestaurants(50, 30);
