# Technical Test BTM

Full-stack application consisting of a backend API (Express.js + TypeScript) and a frontend (React + Vite + TypeScript), connected to a PostgreSQL database.

## Tech Stack

### Backend

- Node.js (>= 22)
- Express.js 5
- TypeScript
- PostgreSQL (via `pg`)

### Frontend

- React 19
- Vite 7
- TypeScript
- Axios
- React Hook Form

## Prerequisites

- **Node.js** >= 22 (see `.nvmrc`)
- **PostgreSQL** installed and accessible locally

## Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd technical-test-btm
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
```

Configure the `.env` file with your PostgreSQL connection details:

```env
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

The `.env` file contains the API URL:

```env
VITE_API_URL=http://localhost:3001/api
```

## Running the Project

### Backend

```bash
cd backend

# Development mode (hot reload)
npm run dev

# Or build + start in production
npm run build
npm start
```

The server starts at `http://localhost:3001`.

### Frontend

```bash
cd frontend

# Development mode
npm run dev

# Or build + preview in production
npm run build
npm run preview
```

The application is available at `http://localhost:5173`.

## Project Structure

```
technical-test-btm/
├── backend/
│   ├── src/
│   │   ├── index.ts          # Express server entry point
│   │   └── config/
│   │       └── db.ts         # PostgreSQL connection pool setup
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx          # React entry point
│   │   ├── App.tsx           # Root component
│   │   └── api/
│   │       ├── axios.ts      # HTTP client configuration
│   │       └── user.service.ts  # User CRUD service
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
│
├── .editorconfig
└── README.md
```

## API

### Available Endpoints

| Method | Route     | Description                        |
| ------ | --------- | ---------------------------------- |
| GET    | `/health` | Checks the database connection     |

### User Model (example)

```typescript
interface User {
  id: string;
  email: string;
  name: string;
}
```

The frontend service (`user.service.ts`) provides the following CRUD operations on `/api/users`:

- `GET /api/users` — List all users
- `GET /api/users/:id` — Get a user by ID
- `POST /api/users` — Create a user
- `PUT /api/users/:id` — Update a user
- `DELETE /api/users/:id` — Delete a user
