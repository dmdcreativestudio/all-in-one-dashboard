import React, { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <Login onLogin={() => setIsLoggedIn(true)} />
        <h2>or Register</h2>
        <Register />
      </div>
    );
  }

  return <Dashboard />;
}

export default App;