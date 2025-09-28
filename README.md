# QuizNote Frontend

QuizNote - AI-powered note-taking and quiz platform

## Development Infrastructure

This project is set up with a comprehensive development environment including:

### 🛠️ Tech Stack
- **React 19** with TypeScript
- **Vite** for fast development and building
- **ESLint & Prettier** for code quality
- **Jest & React Testing Library** for testing
- **Husky** for git hooks
- **Docker** for containerization

### 📁 Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── services/      # API services
├── assets/        # Static assets (images, icons)
├── styles/        # CSS/styling files
└── tests/         # Test utilities and mocks
```

### 🚀 Getting Started

#### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional)

#### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

#### Docker Development
```bash
# Start with Docker Compose
docker-compose up

# This will start:
# - Frontend on http://localhost:3000
# - Mock backend on http://localhost:8000
# - Redis cache on http://localhost:6379
```

### 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### 🔧 Environment Variables

Copy `.env.example` to `.env.development` and configure:

```bash
VITE_API_BASE_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_API=true
VITE_ENABLE_DEBUG_MODE=true
```

### 🧪 Testing

The project uses Jest and React Testing Library with:
- Automatic mocking for common browser APIs
- Path aliasing support
- Coverage reporting
- Component testing utilities

### 🔄 CI/CD

GitHub Actions workflows are configured for:
- **CI**: Linting, testing, and building on every PR
- **CD**: Automated deployment to staging/production
- **Dependency Updates**: Weekly dependency updates

### 🐳 Docker

- **Development**: Hot reloading with volume mounts
- **Production**: Multi-stage build with nginx
- **Mock Backend**: Express.js server for API mocking

### 📋 Code Quality

- **ESLint**: Configured for React + TypeScript
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality checks
- **TypeScript**: Strict type checking enabled

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
