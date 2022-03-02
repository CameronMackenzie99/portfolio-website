import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/main'

import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
import { TakeHomePayCalculator } from './pages/projects/take-home-pay-calculator'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route
              path="take-home-pay-calculator"
              element={<TakeHomePayCalculator />}
            />
          </Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
