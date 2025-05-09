// src/components/ProductList.tsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Product, fetchProducts } from '../api';
import { InfiniteScroll } from './InfiniteScroll';

interface Props {
  restaurantId: number;
  selected: number[];
  onToggle: (p: Product) => void;
}

export function ProductList({ restaurantId, selected, onToggle }: Props) {
  const [items, setItems] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalPages = useRef<number>(Infinity);

  const loadMore = useCallback(async (page: number) => {
    const paginated = await fetchProducts(restaurantId, page);
    totalPages.current = paginated.totalPages;

    setItems(prev => {
      const nuevos = paginated.data.filter(
        p => !prev.some(x => x.id === p.id)
      );
      return [...prev, ...nuevos];
    });

    return page < paginated.totalPages;
  }, [restaurantId]);

  // Resetear productos y hacer scroll al tope al cambiar de restaurante
  useEffect(() => {
    setItems([]);
    totalPages.current = Infinity;
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [restaurantId]);

  return (
    <div
      ref={scrollRef}
      style={{
        height: '50vh',
        overflowY: 'auto',
      }}
    >
      <InfiniteScroll
        loadMore={loadMore}
        rootRef={scrollRef}
        resetKey={restaurantId}
      >
        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {items.map(p => (
            <li key={p.id} style={{ marginBottom: 27 }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={selected.includes(p.id)}
                  onChange={() => onToggle(p)}
                />
                <span style={{ marginLeft: 8 }}>
                  {p.name} — ${p.price}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
