// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  movies;
  trailers;
  currentUserId;
  currentMovieId;
  currentTrailerId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.movies = /* @__PURE__ */ new Map();
    this.trailers = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentMovieId = 1;
    this.currentTrailerId = 1;
    this.initializeSampleData();
  }
  initializeSampleData() {
    const sampleMovies = [
      {
        title: "CYBER STORM 2000",
        year: 1999,
        poster: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "In the year 2000, cyber-enhanced warriors battle for control of the digital realm in this action-packed thriller.",
        genre: "Action/Sci-Fi",
        featured: true
      },
      {
        title: "GALAXY WARRIORS",
        year: 2e3,
        poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "Epic space battles and alien encounters await in this stunning sci-fi adventure.",
        genre: "Sci-Fi/Adventure",
        featured: true
      },
      {
        title: "MIDNIGHT TERROR",
        year: 1998,
        poster: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "A haunting tale of supernatural terror that will keep you on the edge of your seat.",
        genre: "Horror/Thriller",
        featured: true
      },
      {
        title: "LOVE CONNECTION",
        year: 2001,
        poster: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "A romantic comedy about finding love in the digital age of the new millennium.",
        genre: "Romance/Comedy",
        featured: true
      },
      {
        title: "JUNGLE QUEST",
        year: 1999,
        poster: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "An adventurous expedition into the heart of the Amazon jungle reveals ancient secrets.",
        genre: "Adventure/Action",
        featured: true
      },
      {
        title: "CITY DREAMS",
        year: 2e3,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "A powerful drama about ambition, love, and the price of success in the big city.",
        genre: "Drama/Romance",
        featured: true
      }
    ];
    sampleMovies.forEach((movie) => {
      const id = this.currentMovieId++;
      this.movies.set(id, { ...movie, id });
    });
    const sampleTrailers = [
      {
        movieId: 1,
        title: "CYBER STORM 2000 - TRAILER",
        duration: "2:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: null
      },
      {
        movieId: 2,
        title: "GALAXY WARRIORS - TEASER",
        duration: "1:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: null
      },
      {
        movieId: 3,
        title: "MIDNIGHT TERROR - PREVIEW",
        duration: "3:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: null
      },
      {
        movieId: 4,
        title: "LOVE CONNECTION - SNEAK PEEK",
        duration: "2:00",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailUrl: null
      }
    ];
    sampleTrailers.forEach((trailer) => {
      const id = this.currentTrailerId++;
      this.trailers.set(id, { ...trailer, id });
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getMovies() {
    return Array.from(this.movies.values());
  }
  async getFeaturedMovies() {
    return Array.from(this.movies.values()).filter((movie) => movie.featured);
  }
  async getMovie(id) {
    return this.movies.get(id);
  }
  async createMovie(insertMovie) {
    const id = this.currentMovieId++;
    const movie = { ...insertMovie, id };
    this.movies.set(id, movie);
    return movie;
  }
  async getTrailers() {
    return Array.from(this.trailers.values());
  }
  async getTrailersByMovieId(movieId) {
    return Array.from(this.trailers.values()).filter((trailer) => trailer.movieId === movieId);
  }
  async getTrailer(id) {
    return this.trailers.get(id);
  }
  async createTrailer(insertTrailer) {
    const id = this.currentTrailerId++;
    const trailer = { ...insertTrailer, id };
    this.trailers.set(id, trailer);
    return trailer;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  poster: text("poster").notNull(),
  description: text("description").notNull(),
  genre: text("genre").notNull(),
  featured: boolean("featured").default(false)
});
var trailers = pgTable("trailers", {
  id: serial("id").primaryKey(),
  movieId: integer("movie_id").references(() => movies.id),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  videoUrl: text("video_url"),
  thumbnailUrl: text("thumbnail_url")
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertMovieSchema = createInsertSchema(movies).pick({
  title: true,
  year: true,
  poster: true,
  description: true,
  genre: true,
  featured: true
});
var insertTrailerSchema = createInsertSchema(trailers).pick({
  movieId: true,
  title: true,
  duration: true,
  videoUrl: true,
  thumbnailUrl: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/movies", async (req, res) => {
    try {
      const movies2 = await storage.getMovies();
      res.json(movies2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movies" });
    }
  });
  app2.get("/api/movies/featured", async (req, res) => {
    try {
      const movies2 = await storage.getFeaturedMovies();
      res.json(movies2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured movies" });
    }
  });
  app2.get("/api/movies/:id", async (req, res) => {
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
  app2.post("/api/movies", async (req, res) => {
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
  app2.get("/api/trailers", async (req, res) => {
    try {
      const trailers2 = await storage.getTrailers();
      res.json(trailers2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trailers" });
    }
  });
  app2.get("/api/trailers/movie/:movieId", async (req, res) => {
    try {
      const movieId = parseInt(req.params.movieId);
      const trailers2 = await storage.getTrailersByMovieId(movieId);
      res.json(trailers2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trailers" });
    }
  });
  app2.get("/api/trailers/:id", async (req, res) => {
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
  app2.post("/api/trailers", async (req, res) => {
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
