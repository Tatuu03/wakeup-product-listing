# WakeUp Product Listing – Technical Challenge

This is a full-stack application built as a technical challenge for WakeUp. It allows restaurant waiters to view available products and create an order with multiple items.

## 🌐 Live Demo

- 🖥️ **Frontend:** [https://wakeup-product-listing.vercel.app/](https://wakeup-product-listing.vercel.app/)
- ⚙️ **Backend API:** [https://wakeup-product-listing-1.onrender.com](https://wakeup-product-listing-1.onrender.com)

> Example endpoint: [GET /api/restaurants](https://wakeup-product-listing-1.onrender.com/api/restaurants)

## 🚀 Tech Stack

- **Frontend:** React + TypeScript (Vercel)
- **Backend:** Node.js + Express + TypeScript (Render)

> Note: No database was used. Product and restaurant data is hardcoded for demonstration purposes.

## 📂 Project Structure

```
/wakeup-product-listing
│
├── backend/             # Node.js + Express API with hardcoded data
│   ├── src/             # App source code
│   └── src/tests/       # Jest test files for backend
│
└── wakeup-frontend/     # React frontend (waiter's interface)
```

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tatuu03/wakeup-product-listing.git
cd wakeup-product-listing
```

### 2. Setup Backend Locally

```bash
cd backend
npm install
npm run dev
```

> The backend will start on `http://localhost:PORT`

### 3. Setup Frontend Locally

Open a new terminal tab:

```bash
cd wakeup-frontend
npm install
npm start
```

> The frontend will run on `http://localhost:3000` by default.

## ✅ Features

- Display a list of restaurants and their available products
- Infinite scroll for both restaurants and products
- Waiters can create an order with multiple selected products
- Fully typed using TypeScript
- Clean, responsive, and intuitive interface
- Deployed to cloud (Render + Vercel)

## 🧪 Tests

### Backend

Tests written using **Jest** and **Supertest**:

- `GET /api/restaurants` returns paginated results
- `POST /api/orders` handles valid and invalid submissions

To run backend tests:

```bash
cd backend
npm test
```

### Frontend

A basic test using **React Testing Library** verifies the main interface renders correctly.

To run frontend tests:

```bash
cd wakeup-frontend
npm test
```

## 📝 Assumptions

- All product and restaurant data is mocked directly in the backend.
- This app is a prototype meant to demonstrate core functionality, not a production-ready solution.
- Restaurants and products may appear out of order due to paginated merging during infinite scroll. With more time, I would implement proper sorting post-fetch.

## ✍️ Author

Developed by Tatuu03  
GitHub: [@Tatuu03](https://github.com/Tatuu03)
