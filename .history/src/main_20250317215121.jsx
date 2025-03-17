import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MoviesDataProvider from './data/MoviesData.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MoviesDataProvider>
      <App></App>
    </MoviesDataProvider>
  </BrowserRouter>
)
