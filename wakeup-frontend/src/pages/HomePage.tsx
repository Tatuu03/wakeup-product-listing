// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>Bienvenido a WakeUp</h1>
      <p>Descubre restaurantes y pedí lo que más te guste.</p>
      <button
        style={{
          marginTop: 32,
          fontSize: 20,
          padding: '16px 32px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
        onClick={() => navigate('/restaurantes')}
      >
        Ver restaurantes
      </button>
    </div>
  );
}
