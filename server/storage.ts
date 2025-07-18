import { users, movies, trailers, type User, type InsertUser, type Movie, type InsertMovie, type Trailer, type InsertTrailer } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getMovies(): Promise<Movie[]>;
  getFeaturedMovies(): Promise<Movie[]>;
  getMovie(id: number): Promise<Movie | undefined>;
  createMovie(movie: InsertMovie): Promise<Movie>;
  
  getTrailers(): Promise<Trailer[]>;
  getTrailersByMovieId(movieId: number): Promise<Trailer[]>;
  getTrailer(id: number): Promise<Trailer | undefined>;
  createTrailer(trailer: InsertTrailer): Promise<Trailer>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private movies: Map<number, Movie>;
  private trailers: Map<number, Trailer>;
  private currentUserId: number;
  private currentMovieId: number;
  private currentTrailerId: number;

  constructor() {
    this.users = new Map();
    this.movies = new Map();
    this.trailers = new Map();
    this.currentUserId = 1;
    this.currentMovieId = 1;
    this.currentTrailerId = 1;
    
    // Initialize with some sample movies
    this.initializeSampleData();
  }

  private initializeSampleData() {
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
        year: 2000,
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
        year: 2000,
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        description: "A powerful drama about ambition, love, and the price of success in the big city.",
        genre: "Drama/Romance",
        featured: true
      }
    ];

    sampleMovies.forEach(movie => {
      const id = this.currentMovieId++;
      this.movies.set(id, { ...movie, id });
    });

    // Add sample trailers
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

    sampleTrailers.forEach(trailer => {
      const id = this.currentTrailerId++;
      this.trailers.set(id, { ...trailer, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values());
  }

  async getFeaturedMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(movie => movie.featured);
  }

  async getMovie(id: number): Promise<Movie | undefined> {
    return this.movies.get(id);
  }

  async createMovie(insertMovie: InsertMovie): Promise<Movie> {
    const id = this.currentMovieId++;
    const movie: Movie = { ...insertMovie, id };
    this.movies.set(id, movie);
    return movie;
  }

  async getTrailers(): Promise<Trailer[]> {
    return Array.from(this.trailers.values());
  }

  async getTrailersByMovieId(movieId: number): Promise<Trailer[]> {
    return Array.from(this.trailers.values()).filter(trailer => trailer.movieId === movieId);
  }

  async getTrailer(id: number): Promise<Trailer | undefined> {
    return this.trailers.get(id);
  }

  async createTrailer(insertTrailer: InsertTrailer): Promise<Trailer> {
    const id = this.currentTrailerId++;
    const trailer: Trailer = { ...insertTrailer, id };
    this.trailers.set(id, trailer);
    return trailer;
  }
}

export const storage = new MemStorage();
