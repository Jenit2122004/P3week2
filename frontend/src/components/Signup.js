import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', { username, password });
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data.message || 'Signup failed');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
