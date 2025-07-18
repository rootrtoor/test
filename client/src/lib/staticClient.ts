import { movies, trailers } from "@/data/movies";
import { Movie, Trailer } from "@shared/schema";

export class StaticClient {
  static async getMovies(): Promise<Movie[]> {
    return movies;
  }

  static async getFeaturedMovies(): Promise<Movie[]> {
    return movies.filter(movie => movie.featured);
  }

  static async getMovie(id: number): Promise<Movie | undefined> {
    return movies.find(movie => movie.id === id);
  }

  static async getTrailers(): Promise<Trailer[]> {
    return trailers;
  }

  static async getTrailersByMovieId(movieId: number): Promise<Trailer[]> {
    return trailers.filter(trailer => trailer.movieId === movieId);
  }

  static async getTrailer(id: number): Promise<Trailer | undefined> {
    return trailers.find(trailer => trailer.id === id);
  }
}