import React, { useState } from 'react';
import { Restaurant, Product } from '../api';
import { RestaurantList } from '../components/RestaurantList';
import { ProductList } from '../components/ProductList';
import { OrderSummary } from '../components/OrderSummary';

export function RestaurantPage() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const handleToggle = (p: Product) => {
    setAllProducts((prev) => {
      if (!prev.find((x) => x.id === p.id)) return [...prev, p];
      return prev;
    });
    setSelectedIds((prev) =>
      prev.includes(p.id) ? prev.filter((id) => id !== p.id) : [...prev, p.id]
    );
  };

  const clear = () => {
    setSelectedIds([]);
    setAllProducts([]);
  };

  return (
    <div style={{ display: 'flex', gap: 32, padding: 24 }}>
      <section style={{ width: 500, flex: 1 }}>
        <h2>Restaurantes</h2>
        <RestaurantList onSelect={setRestaurant} />
      </section>
      <section style={{ flex: 1}}>
        {restaurant ? (
          <>
            <h2>Productos de {restaurant.name}</h2>
            <ProductList
              restaurantId={restaurant.id}
              selected={selectedIds}
              onToggle={handleToggle}
            />
            <OrderSummary
              restaurant={restaurant}
              products={allProducts}
              selectedIds={selectedIds}
              onClear={clear}
            />
          </>
        ) : (
          <p>Selecciona un restaurante para comenzar.</p>
        )}
      </section>
    </div>
  );
}
