import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import './threescene.js'

const container = document.getElementById('root')

// Type assertion to handle potential null value
if (container === null) throw new Error('Root element not found')

const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)