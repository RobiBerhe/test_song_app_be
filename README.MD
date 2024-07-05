# Songs API Documentation

This Node.js application provides an API for managing songs, genres, albums, and artists.

## Features

- **Create Song**: Allows creation of a new song.
- **Update Song**: Updates an existing song by ID.
- **Delete Song**: Deletes a song by ID.
- **List Songs**: Retrieves a list of all songs.
- **Count Operations**:
  - Count total songs.
  - Count total genres.
  - Count total albums.
  - Count total artists.
- **Filter Songs**:
  - List songs by genre.
  - Count songs by genre.
  - List songs by album.
  - Count songs by album.
  - List songs by artist.
  - Count songs by artist.

## API Routes

### Songs
- **POST /songs**: Creates a new song.
- **PUT /songs/:id**: Updates a song by ID.
- **DELETE /songs/:id**: Deletes a song by ID.
- **GET /songs**: Retrieves all songs.

### Count Operations
- **GET /songs/count**: Counts total songs.
- **GET /genre/count**: Counts total genres.
- **GET /album/count**: Counts total albums.
- **GET /artist/count**: Counts total artists.

### Filter Songs by Genre
- **GET /songs/genre/:genre**: Retrieves songs for a specific genre.
- **GET /songs/genre/:genre/count**: Counts songs for a specific genre.

### Filter Songs by Album
- **GET /songs/album/:album**: Retrieves songs for a specific album.
- **GET /songs/album/:album/count**: Counts songs for a specific album.

### Filter Songs by Artist
- **GET /songs/artist/:artist**: Retrieves songs for a specific artist.
- **GET /songs/artist/:artist/count**: Counts songs for a specific artist.

## Usage

To use this API, make HTTP requests to the specified endpoints using tools like Postman, cURL, or integrate it directly into your application.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `node src/server.js`.

## Technologies Used

- Node.js
- Express.js
- MongoDB
