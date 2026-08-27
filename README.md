# Travel Trip Planner

Your starter project for **KMS Frontend Training — Phase 2: React Fundamentals**.

You will build this app incrementally over 4 weeks, adding one feature per session.

---

## Prerequisites

- Node.js **>=18** — check with `node -v`
- Completed Phase 1 of KMS Frontend Training

---

## Getting started

```bash
cp .env.example .env
# Open .env and set VITE_API_BASE_URL to the backend server address
npm install
npm run dev
```

Open **http://localhost:5173**

---

## What you should see

A page with a navigation bar and three routes:
- `/` — Discover page
- `/trips` — My Trips page
- `/auth` — Login page

No console errors. That's your starting point.

---

## Project structure

```
src/
├── components/
│   └── Header.tsx          Navigation bar (you'll improve this in Session 2.2)
├── pages/
│   ├── Discover.tsx        Destination search page stub
│   ├── TripPlanner.tsx     Trip planning page stub
│   └── Auth.tsx            Login / register page stub
├── services/
│   └── api.ts              Pre-configured Axios instance + all API methods + types
├── App.tsx                 Route definitions
├── App.css                 App-level styles (empty — add yours here)
├── main.tsx                Entry point
└── index.css               Global reset
```

---

## Using `services/api.ts`

All API calls go through the pre-built functions in `src/services/api.ts`. The file also exports TypeScript interfaces for all domain types (`Attraction`, `Trip`, `Day`, `ItineraryItem`, `User`).

```ts
import { getDestinations, login, createTrip } from './services/api'
import type { Attraction, Trip } from './services/api'

// Fetch attractions for a city
const result = await getDestinations({ city: 'Tokyo' })
// result: { attractions: Attraction[], total: number, page: number }

// Log in a user
const { token, user } = await login({ email, password })
localStorage.setItem('token', token)

// Create a trip
const trip: Trip = await createTrip({ name: 'Japan 2026', startDate: '2026-04-01', endDate: '2026-04-10' })
```

The Axios instance automatically attaches the `Authorization: Bearer <token>` header on every request if a token is present in `localStorage`.

---

## Troubleshooting

**`node: command not found` or wrong version**
Install Node.js >=18 from https://nodejs.org/

**App won't connect to the backend**
Check that `.env` exists and `VITE_API_BASE_URL` points to the running backend server. Restart `npm run dev` after editing `.env`.

**Port 5173 already in use**
Either stop the other process, or run `npm run dev -- --port 5174` to use a different port.

**TypeScript errors in `api.ts`**
Run `npm run build` to see all type errors. Fix them before Session 4.4 when you'll add types to your own components.
