# Cinefinder

Cinefinder is a web application that allows users to discover and search for movies. It provides a user-friendly interface to browse through a vast collection of movies and find detailed information about each movie.

## Features

- Search for movies by title, genre, or actor.
- View movie details including synopsis, release date, and ratings.
- Create a watchlist to keep track of movies you want to watch.
- Rate and review movies to share your thoughts with other users.

## Technologies Used

- Frontend: React with TypeScript and Tailwind CSS
- Backend: Django
- Database: PostgreSQL

## Prerequisites

- Install node and nvm
- Hook nvm in your bash or zsh terminal

- Install python with poetry

## Getting Started

To get started with Cinefinder, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/cinefinder.git`
2. Install the required dependencies for the frontend:
    ```bash
    make install-frontend
    ```
3. Install the required dependencies for the backend:
    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```
4. Set up the PostgreSQL database and configure the database settings in the backend.
5. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```
6. Start the backend server:
    ```bash
    cd ../backend
    python manage.py runserver
    ```
7. Open your browser and navigate to `http://localhost:3000` to access Cinefinder.

## Contributing

Contributions are welcome! If you'd like to contribute to Cinefinder, please follow the guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Cinefinder is licensed under the [MIT License](./LICENSE).
