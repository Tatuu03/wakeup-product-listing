// src/components/RestaurantList.tsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Restaurant, fetchRestaurants } from '../api';
import { InfiniteScroll } from './InfiniteScroll';

export function RestaurantList({ onSelect }: { onSelect: (r: Restaurant) => void }) {
  const [items, setItems] = useState<Restaurant[]>([]);
  const [resetKey] = useState(() => Date.now()); // genera uno al montar
  const scrollRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async (page: number) => {
    const pag = await fetchRestaurants(page);

    setItems(prev => {
      const nuevos = pag.data.filter(r => !prev.some(x => x.id === r.id));
      return [...prev, ...nuevos];
    });
    console.log('Fetching restaurant page', page);
    console.log(`📦 Page ${page} fetched — current items:`, items.map(r => r.id));
    return page < pag.totalPages;
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{ height: '70vh', overflowY: 'auto' }}
    >
      <InfiniteScroll
        loadMore={loadMore}
        rootRef={scrollRef}
         resetKey="restaurant-scroll"
      >
        <ul style={{ padding: 11, margin: 5, listStyle: 'none' }}>
          {items.map(r => (
            <li key={r.id} style={{ margin: 20 }}>
              <button onClick={() => onSelect(r)} style={{ width: '100%' }}>
                {r.name}
              </button>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
