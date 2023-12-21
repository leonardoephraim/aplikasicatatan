import React from 'react';

const AuthButton = ({ isAuthenticated, onLogout }) => {
  return isAuthenticated ? (
    <button onClick={onLogout}>Logout</button>
  ) : (
    <button>Login</button>
  );
};

export default AuthButton;