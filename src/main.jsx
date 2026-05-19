import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'


// Entry point for the React application
console.log("%c🚛 SCA Sweepyy Replica Loaded Successfully!", "color: #f47920; font-weight: bold; font-size: 13px; font-family: sans-serif;");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The main App component containing all routes and global layout */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
