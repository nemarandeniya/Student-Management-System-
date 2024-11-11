import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home';
import Add from './Add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<Add />} /> */}
      </Routes>
    </Router>
  )
}

export default App
