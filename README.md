# Betting Dashboard

This project is a full-stack application for an online betting dashboard. It includes a React frontend and a Node.js backend using Typescript with a PostgreSQL database. The frontend allows users to view sports events and place bets, while the backend provides the necessary API endpoints.

## Features
- View a list of sports events with odds.
- Place bets on sports events.
- User authentication with JWT.
- Responsive design.

## Prerequisites
- Node.js (version 18.17.1 or higher)
- Docker
- Docker Compose

## Installation

### Backend Setup
1. Navigate to the server directory:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the server directory and configure the following environment variables:
    ```env
    PORT=5000
    DB_USERNAME=postgres
    DB_PASSWORD=root
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_NAME=bettingdb
    ```
4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup
1. Navigate to the dashboard-ui directory:
    ```bash
    cd dashboard-ui
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the dashboard-ui directory and configure the following environment variable:
    ```env
    REACT_APP_BASE_API_URL=http://localhost:5000/api
    ```
4. Start the frontend development server:
    ```bash
    npm start
    ```

### Docker Setup
To run the entire application using Docker, follow these steps:

1. Ensure you are in the root directory of the project (one level above `dashboard-ui` and `server` directories).
2. Create a `.env` file in the root directory and configure the following environment variables:
    ```env
    DB_USERNAME=postgres
    DB_PASSWORD=root
    DB_HOST=db
    DB_PORT=5432
    DB_NAME=bettingdb
    ```
3. Build and start the Docker containers:
    ```bash
    docker-compose up --build
    ```
    This command will build and start the React frontend, Node backend, and PostgreSQL database in separate containers. The frontend will be accessible at [http://localhost:3000](http://localhost:3000), and the backend API will be accessible at [http://localhost:5000](http://localhost:5000).

## Environment Variables
Here are the environment variables used in this project:

### Backend (`server/.env`)
```env
PORT=5000
DB_USERNAME=postgres
DB_PASSWORD=root
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=bettingdb
```

### Frontend (`dashboard-ui/.env`)
```env
REACT_APP_BASE_API_URL=http://localhost:5000/api
```

### Root (`.env`)
```env
DB_USERNAME=postgres
DB_PASSWORD=root
DB_HOST=db
DB_PORT=5432
DB_NAME=bettingdb
```

## Usage
Once the Docker containers are up and running:

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the frontend.
- The backend API will be available at [http://localhost:5000/api](http://localhost:5000/api).
- You can interact with the application to view sports events, place bets, and manage user authentication.
