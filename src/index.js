import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Accueil from './pages/Accueil'
import Employees from './pages/Employees'
import Error from './components/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Sass/main.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Employees/*' element={<Employees />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
