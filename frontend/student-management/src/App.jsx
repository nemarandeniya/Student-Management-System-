import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App
