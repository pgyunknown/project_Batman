import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MoviesDataProvider from './data/MoviesContextData.jsx'
import { CharDataContext } from './data/CharContextData.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App></App>
  </BrowserRouter>
)
