import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNotePage from './pages/addNotePage';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNotePage />} />
      </Routes>
    </Router>
  );
};

export default App;
