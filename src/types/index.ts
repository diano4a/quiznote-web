// Common types that will be used throughout the application

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface Note {
  id: string
  title: string
  content: string
  userId: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  noteId: string
  questions: Question[]
  createdAt: string
  updatedAt: string
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface ApiError {
  message: string
  status: number
  details?: Record<string, unknown>
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
