import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import NewComponent from './components/newComponent/NewComponent';

export default function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'));

  useEffect(() => {
    const storedJwtToken = localStorage.getItem('jwtToken');
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setJwtToken(null);
  };

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Login/>}/>
        {jwtToken ? (
          <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />}/>
        ) : (
          <Route path="/" element={<Login/>}/>
        )}
        </Routes>
    </div>
  );
}