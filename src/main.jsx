import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Entry point for the React application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The main App component containing all routes and global layout */}
    <App />
  </StrictMode>,
)
