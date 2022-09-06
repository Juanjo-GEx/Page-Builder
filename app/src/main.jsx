import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import './index.css'
import DinamicPage from './pages/DinamicPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path=":url" element={<DinamicPage />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>
)
