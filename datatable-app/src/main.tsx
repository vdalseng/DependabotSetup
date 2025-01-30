import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@elvia/elvis/elvis.js';
import '@elvia/elvis/checkDeprecations.js';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
