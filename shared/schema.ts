import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  poster: text("poster").notNull(),
  description: text("description").notNull(),
  genre: text("genre").notNull(),
  featured: boolean("featured").default(false),
});

export const trailers = pgTable("trailers", {
  id: serial("id").primaryKey(),
  movieId: integer("movie_id").references(() => movies.id),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  videoUrl: text("video_url"),
  thumbnailUrl: text("thumbnail_url"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMovieSchema = createInsertSchema(movies).pick({
  title: true,
  year: true,
  poster: true,
  description: true,
  genre: true,
  featured: true,
});

export const insertTrailerSchema = createInsertSchema(trailers).pick({
  movieId: true,
  title: true,
  duration: true,
  videoUrl: true,
  thumbnailUrl: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMovie = z.infer<typeof insertMovieSchema>;
export type Movie = typeof movies.$inferSelect;
export type InsertTrailer = z.infer<typeof insertTrailerSchema>;
export type Trailer = typeof trailers.$inferSelect;
