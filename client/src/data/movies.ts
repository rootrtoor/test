import { Movie, Trailer } from "@shared/schema";

export const movies: Movie[] = [
  {
    id: 1,
    title: "CYBER STORM 2000",
    year: 1999,
    poster: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "In the year 2000, cyber-enhanced warriors battle for control of the digital realm in this action-packed thriller.",
    genre: "Action/Sci-Fi",
    featured: true
  },
  {
    id: 2,
    title: "GALAXY WARRIORS",
    year: 2000,
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "Epic space battles and alien encounters await in this stunning sci-fi adventure.",
    genre: "Sci-Fi/Adventure",
    featured: true
  },
  {
    id: 3,
    title: "MIDNIGHT TERROR",
    year: 1998,
    poster: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "A haunting tale of supernatural terror that will keep you on the edge of your seat.",
    genre: "Horror/Thriller",
    featured: true
  },
  {
    id: 4,
    title: "LOVE CONNECTION",
    year: 2001,
    poster: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "A romantic comedy about finding love in the digital age of the new millennium.",
    genre: "Romance/Comedy",
    featured: true
  },
  {
    id: 5,
    title: "JUNGLE QUEST",
    year: 1999,
    poster: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "An adventurous expedition into the heart of the Amazon jungle reveals ancient secrets.",
    genre: "Adventure/Action",
    featured: true
  },
  {
    id: 6,
    title: "CITY DREAMS",
    year: 2000,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
    description: "A powerful drama about ambition, love, and the price of success in the big city.",
    genre: "Drama/Romance",
    featured: true
  }
];

export const trailers: Trailer[] = [
  {
    id: 1,
    movieId: 1,
    title: "CYBER STORM 2000 - TRAILER",
    duration: "2:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: null
  },
  {
    id: 2,
    movieId: 2,
    title: "GALAXY WARRIORS - TEASER",
    duration: "1:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: null
  },
  {
    id: 3,
    movieId: 3,
    title: "MIDNIGHT TERROR - PREVIEW",
    duration: "3:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: null
  },
  {
    id: 4,
    movieId: 4,
    title: "LOVE CONNECTION - SNEAK PEEK",
    duration: "2:00",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: null
  }
];