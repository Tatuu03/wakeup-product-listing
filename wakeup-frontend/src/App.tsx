// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurantes" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}
