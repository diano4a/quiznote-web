import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

// Placeholder App component - will be replaced by actual implementation
function App() {
  return (
    <div className='app'>
      <h1>QuizNote</h1>
      <p>AI-powered note-taking and quiz platform</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
