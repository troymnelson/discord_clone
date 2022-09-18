import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
