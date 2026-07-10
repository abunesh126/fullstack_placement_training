# Frontend

Frontend application for the placement training project.

## Stack

- React
- Vite
- React Router

## Run Locally

1. Install dependencies

	npm install

2. Start dev server

	npm run dev

3. Open in browser

	http://localhost:5173

## Build and Preview

- npm run build
- npm run preview

## Lint

- npm run lint

## App Routes

- / : login page
- /show-student : student listing page
- /add-student : add student page
- /update-student : update student page
- /delete-student : delete student page

## Current Behavior

- Login currently checks hardcoded credentials.
- Student list is currently rendered from local static data file.
- API integration can be added next for full CRUD flow.

## Recommended Next Step

Connect frontend forms and student pages to backend endpoints and move authentication to backend validation.
