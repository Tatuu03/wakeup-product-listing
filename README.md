# WakeUp Product Listing – Technical Challenge

This is a full-stack application built as a technical challenge for WakeUp. It allows restaurant waiters to view available products and create an order with multiple items.

## 🚀 Tech Stack

- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express + TypeScript

> Note: No database was used. Product and restaurant data is hardcoded for demonstration purposes.

## 📂 Project Structure

```
/wakeup-product-listing
│
├── backend/           # Node.js + Express API with hardcoded data
└── wakeup-frontend/   # React frontend (waiter's interface)
```

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tatuu03/wakeup-product-listing.git
cd wakeup-product-listing
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

> The backend should start on `http://localhost:PORT`

### 3. Setup Frontend

Open a new terminal:

```bash
cd wakeup-frontend
npm install
npm start
```

> The frontend will run on `http://localhost:3000` by default.

## ✅ Features

- Display a list of restaurants and their available products
- Infinite scroll implementation for product listing
- Allow waiters to create an order with multiple products
- Fully typed using TypeScript
- Clean and intuitive interface

## 📝 Assumptions

- All product and restaurant data is mocked directly in the backend.
- This app is a prototype meant to demonstrate core functionality, not a production-ready solution.

## ✍️ Author

Developed by Tatuu03  
GitHub: [@Tatuu03](https://github.com/Tatuu03)
