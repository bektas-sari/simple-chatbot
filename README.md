# Modern AI Chat Assistant

A modern, interactive chatbot application built with React and Express, designed to provide an intelligent conversational experience. The application features a clean, responsive interface and real-time message updates.

## Features

- 💬 Real-time chat interface
- 🤖 Intelligent bot responses
- 📱 Responsive design
- ⚡ Fast and lightweight
- 🎨 Modern UI with Tailwind CSS

## Technologies Used

- Frontend: React with TypeScript
- Backend: Express.js
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- State Management: TanStack Query
- Routing: Wouter

## Getting Started

### Prerequisites

Make sure you have Node.js (v20 or later) installed on your system.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── lib/          # Utility functions
├── server/                # Backend Express server
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage logic
└── shared/               # Shared types and schemas
```

## Development

The application uses an in-memory storage system for messages. The chat interface supports basic conversation patterns with predefined responses.

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be available in the `dist` directory.

---

This project was built with modern web development practices, focusing on type safety, component reusability, and a clean user interface.

