import React, { useState } from 'react';
import Login from './pages/login/Login';
import AppLayout from './layout/AppLayout';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

    // Real login transition
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            {isLoggedIn ? <AppLayout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        </div>
    );
}

export default App;
