import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authContext';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AddNotePage from './pages/addNotePage';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/add" element={<AddNotePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;