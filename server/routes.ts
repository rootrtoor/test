import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMovieSchema, insertTrailerSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Movies routes
  app.get("/api/movies", async (req, res) => {
    try {
      const movies = await storage.getMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movies" });
    }
  });

  app.get("/api/movies/featured", async (req, res) => {
    try {
      const movies = await storage.getFeaturedMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured movies" });
    }
  });

  app.get("/api/movies/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const movie = await storage.getMovie(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movie" });
    }
  });

  app.post("/api/movies", async (req, res) => {
    try {
      const movieData = insertMovieSchema.parse(req.body);
      const movie = await storage.createMovie(movieData);
      res.status(201).json(movie);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid movie data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create movie" });
    }
  });

  // Trailers routes
  app.get("/api/trailers", async (req, res) => {
    try {
      const trailers = await storage.getTrailers();
      res.json(trailers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trailers" });
    }
  });

  app.get("/api/trailers/movie/:movieId", async (req, res) => {
    try {
      const movieId = parseInt(req.params.movieId);
      const trailers = await storage.getTrailersByMovieId(movieId);
      res.json(trailers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trailers" });
    }
  });

  app.get("/api/trailers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const trailer = await storage.getTrailer(id);
      if (!trailer) {
        return res.status(404).json({ message: "Trailer not found" });
      }
      res.json(trailer);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trailer" });
    }
  });

  app.post("/api/trailers", async (req, res) => {
    try {
      const trailerData = insertTrailerSchema.parse(req.body);
      const trailer = await storage.createTrailer(trailerData);
      res.status(201).json(trailer);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid trailer data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create trailer" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
