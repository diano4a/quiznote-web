const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(helmet())
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://frontend:3000'],
    credentials: true,
  })
)
app.use(morgan('combined'))
app.use(express.json())

// Mock data
const mockUsers = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

const mockNotes = [
  {
    id: '1',
    title: 'Sample Note',
    content: 'This is a sample note for testing purposes.',
    userId: '1',
    tags: ['sample', 'test'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

const mockQuizzes = [
  {
    id: '1',
    title: 'Sample Quiz',
    description: 'A sample quiz based on the sample note',
    noteId: '1',
    questions: [
      {
        id: '1',
        question: 'What is this note about?',
        options: ['Testing', 'Production', 'Documentation', 'Other'],
        correctAnswer: 0,
        explanation: 'This note is for testing purposes.',
      },
    ],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mock backend is running' })
})

app.get('/api/users', (req, res) => {
  res.json({
    data: mockUsers,
    success: true,
    message: 'Users retrieved successfully',
  })
})

app.get('/api/notes', (req, res) => {
  res.json({
    data: mockNotes,
    success: true,
    message: 'Notes retrieved successfully',
  })
})

app.get('/api/quizzes', (req, res) => {
  res.json({
    data: mockQuizzes,
    success: true,
    message: 'Quizzes retrieved successfully',
  })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mock backend server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})
