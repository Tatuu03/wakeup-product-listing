import React from 'react';
import { Product, Restaurant, createOrder } from '../api';

interface Props {
  restaurant: Restaurant;
  products: Product[];
  selectedIds: number[];
  onClear: () => void;
}

export function OrderSummary({ restaurant, products, selectedIds, onClear }: Props) {
  if (selectedIds.length === 0) return null;

  const selected = products.filter((p) => selectedIds.includes(p.id));
  const total = selected.reduce((sum, p) => sum + p.price, 0);

  const handleSubmit = async () => {
    await createOrder({
      restaurantId: restaurant.id,
      productIds: selectedIds,
    });
    alert('¡Pedido enviado con éxito!');
    onClear();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginTop: 24 }}>
      <h3>Resumen de {restaurant.name}</h3>
      <ul>
        {selected.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
      <div style={{ marginTop: 12 }}>
        <button onClick={handleSubmit}>Crear Pedido</button>
      </div>
    </div>
  );
}
