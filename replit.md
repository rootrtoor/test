# RetroFlix Cinema - A Retro-Themed Movie Application

## Overview

RetroFlix Cinema is a full-stack web application that provides a retro-themed movie browsing experience. Built with React, Express.js, and PostgreSQL, the application allows users to browse movies, watch trailers, and explore a nostalgic 1990s-style cinema interface.

## User Preferences

Preferred communication style: Simple, everyday language.
Deployment target: AWS Amplify (configured for static site deployment)

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom retro-themed components
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Database Schema
The application uses three main tables:
- **users**: User authentication and management
- **movies**: Movie information including title, year, poster, description, genre, and featured status
- **trailers**: Trailer information linked to movies with video URLs and thumbnails

## Key Components

### Client-Side Components
- **RetroLayout**: Main layout component providing the retro aesthetic with starfield background
- **MovieCard**: Displays movie information in a retro-styled card format
- **TrailerCard**: Shows trailer information with play functionality
- **Starfield**: Animated background component for the retro space theme
- **Marquee**: Scrolling text component for announcements

### Server-Side Components
- **Storage Layer**: Abstract storage interface with in-memory implementation for development
- **Routes**: RESTful API endpoints for movies, trailers, and user management
- **Middleware**: Request logging, error handling, and JSON parsing

### Pages
- **Home**: Featured movies and welcome section
- **Movies**: Complete movie catalog
- **Trailers**: Trailer browsing interface
- **About**: Information about the cinema
- **Contact**: Contact information and VIP membership details

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data from API endpoints
2. **API Layer**: Express.js routes handle HTTP requests and validate input using Zod schemas
3. **Storage Layer**: Storage interface abstracts database operations using Drizzle ORM
4. **Database**: PostgreSQL stores persistent data with proper relationships
5. **Response**: JSON responses sent back to client with appropriate error handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns
- **Icons**: Lucide React

### Backend Dependencies
- **Express.js**: Web framework with middleware
- **Database**: Drizzle ORM, Neon Database driver
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Replit-specific plugins and error handling

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR support
- **Database**: In-memory storage with sample data seeding
- **Error Handling**: Runtime error overlay for debugging
- **Logging**: Comprehensive request logging with response tracking

### AWS Amplify Production Deployment
- **Frontend**: Static site deployment with Vite build to `dist/public`
- **Configuration**: `amplify.yml` for build settings and `_redirects` for SPA routing
- **Data**: Embedded static data (no backend required)
- **Hosting**: AWS Amplify hosting with CDN and SSL
- **Performance**: Optimized static assets with responsive design

### Static Site Architecture
- **Data Storage**: Local JSON data files instead of database
- **API Layer**: StaticClient class for data access
- **Routing**: Client-side routing with fallback to index.html
- **Build Process**: Single-page application with code splitting

### Key Design Decisions

1. **Retro Theme**: Chosen to create a unique, nostalgic user experience reminiscent of 1990s computing and cinema
2. **Modular Architecture**: Separation of concerns with clear boundaries between client, server, and database layers
3. **Type Safety**: Full TypeScript implementation with shared schemas between client and server
4. **Responsive Design**: Tailwind CSS ensures mobile-friendly responsive layouts
5. **Developer Experience**: Comprehensive tooling with hot reload, error handling, and debugging support