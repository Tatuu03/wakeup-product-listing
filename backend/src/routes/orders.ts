import { Router } from 'express';
import { restaurants } from '../data/restaurants';

const router = Router();

router.post('/', (req, res) => {
  const { restaurantId, productIds } = req.body;

  if (!restaurantId || !Array.isArray(productIds)) {
    res.status(400).json({ error: 'Invalid payload' });
  }

  // Verificar si el restaurante existe
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (!restaurant) {
    res.status(404).json({ error: 'Restaurant not found' });
  }

  // Verificar si los productos existen
  const invalidProductIds = productIds.filter((id: number) => !restaurant?.products.some(p => p.id === id));
  if (invalidProductIds.length > 0) {
    res.status(400).json({ error: `Invalid product IDs: ${invalidProductIds.join(', ')}` });
  }

  
  // En un caso real, guardaríamos esto en una base de datos
  console.log(`Pedido recibido para restaurant ${restaurantId} con productos: ${productIds.join(', ')}`);

  res.status(201).json({ message: 'Order created successfully' });
});

export default router;
