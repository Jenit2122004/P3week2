import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate('/signin');
    }, [token, navigate]);

    // Rest of the Dashboard code
};
