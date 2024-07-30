import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Setup/Context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const { login } = useContext(AuthContext);

    const toggleRole = () => {
        setIsAdmin(!isAdmin);
    };

    const handleAdminLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            login();
            localStorage.setItem('loggedIn', 'true'); // Example of persisting login status
        }
    };

    const handleGuestLogin = (e) => {
        e.preventDefault();
        if (name && contact) {
            login();
            localStorage.setItem('loggedIn', 'true'); // Example of persisting login status
        }
    };

    return (
        <div className="login-page">
            <div className="role-switch">
                <button onClick={toggleRole}>
                    {isAdmin ? 'Switch to Guest' : 'Switch to Admin'}
                </button>
            </div>
            {isAdmin ? (
                <div className="admin-login">
                    <h2>Admin Login</h2>
                    <form className='login-form' onSubmit={handleAdminLogin}>
                        <input
                            type="text"
                            name="username"
                            placeholder='Enter Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            ) : (
                <div className="guest-login">
                    <h2>Guest Login</h2>
                    <form className='login-form' onSubmit={handleGuestLogin}>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Full Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="contact"
                            placeholder='Enter Contact Number'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <button type="submit">Go to Dashboard</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
