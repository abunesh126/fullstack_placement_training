 # Backend

Express + MongoDB backend for the placement training project.

## Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Setup

1. Install dependencies

	npm install

2. Create .env file

	PORT=5000
	MONGO_URL=your_mongodb_connection_string

3. Start server (development)

	npm run dev

4. Start server (production style)

	npm run main

## Available Scripts

- npm run dev: run with nodemon
- npm run main: run with node

## Current Endpoints

- GET / : health check response

## Student Module

Student schema, controller, and route files exist:

- schema/addstudent.js
- controller/studentcontroller.js
- routes/StudentRoutes.js

Expected student payload fields:

- name (string)
- rollno (string, unique)
- email_id (string, unique)
- student_number (number, unique)
- DOB (date)

## Important Notes

- server.js currently uses process.env.MONGO_URL.
- db/db.js currently uses process.env.MONGO_URI.
  Keep one variable name consistent across files to avoid connection issues.
- Ensure route import paths use the correct folder case on case-sensitive systems.

## Suggested Improvements

- Mount student routes in server.js.
- Add request validation and centralized error handling.
- Add CRUD endpoints for list, update, and delete.
