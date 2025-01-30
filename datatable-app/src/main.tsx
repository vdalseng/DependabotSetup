import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@elvia/elvis/elvis.js';
import '@elvia/elvis/checkDeprecations.js';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
