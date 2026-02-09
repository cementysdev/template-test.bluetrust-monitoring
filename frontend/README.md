# Frontend

React + TypeScript application with Vite.

## Prerequisites

- Node.js >= 22

## Installation

```bash
npm install
```

## Configuration

Copy the `.env.example` file at the project root and create a `.env`:

```bash
cp ./.env.example ./.env
```

Required variable:

| Variable       | Description  | Example                 |
| -------------- | ------------ | ----------------------- |
| `VITE_API_URL` | API base URL | `http://localhost:3001` |

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build

```bash
npm run build
```

Production files will be generated in the `dist/` folder.

## Preview

To preview the production build:

```bash
npm run preview
```
