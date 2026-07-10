# Fullstack Placement Training

This repository contains a MERN practice project split into two apps:

- frontend: React + Vite UI
- backend: Express + MongoDB API

## Project Structure

fullstack/
- frontend/
- backend/

## Tech Stack

- MongoDB + Mongoose
- Express
- React
- Node.js

## Quick Start

1. Install backend dependencies

	cd backend
	npm install

2. Install frontend dependencies

	cd ../frontend
	npm install

3. Configure backend environment

	Create backend/.env with:

	PORT=5000
	MONGO_URL=your_mongodb_connection_string

4. Start backend

	cd backend
	npm run dev

5. Start frontend

	cd frontend
	npm run dev

Frontend default URL: http://localhost:5173

Backend default URL: http://localhost:5000

## Current Status

- Frontend routing and student pages exist.
- Login screen is currently using local hardcoded credentials.
- Backend has a running server and MongoDB connection logic.
- Student route/controller files exist, but route mounting in server.js is not currently wired.

## Notes

- The backend expects MONGO_URL in .env.
- If you plan to use process.env.MONGO_URI instead, update server and DB files to be consistent.
- On case-sensitive environments, keep folder names/import paths consistent (for example controller vs Controller).

## Scripts

### Frontend

- npm run dev: start Vite dev server
- npm run build: create production build
- npm run preview: preview production build
- npm run lint: run ESLint

### Backend

- npm run dev: start backend with nodemon
- npm run main: start backend with node

## Learning Goal

This project is intended for hands-on fullstack practice: routing, forms, API integration, and CRUD with MongoDB.