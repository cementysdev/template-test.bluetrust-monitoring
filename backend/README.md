# Backend

Express + TypeScript API with PostgreSQL.

## Prerequisites

- Node.js >= 22
- PostgreSQL

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file at the project root with the following variables:

| Variable       | Description                      | Example                                       |
| -------------- | -------------------------------- | --------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection URL        | `postgresql://user:password@localhost:5432/db` |
| `PORT`         | Server port (default: 3001)      | `3001`                                        |

## Development

```bash
npm run dev
```

The server starts with hot-reload via `tsx watch`.

## Build

```bash
npm run build
```

Compiles TypeScript into the `dist/` folder.

## Production

```bash
npm run build
npm start
```

## Endpoints

| Method | Route     | Description              |
| ------ | --------- | ------------------------ |
| GET    | `/health` | Checks database connection |
