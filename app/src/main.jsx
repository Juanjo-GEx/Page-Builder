import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>
)
