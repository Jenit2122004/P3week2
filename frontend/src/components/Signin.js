import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signin = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signin', { username, password });
            alert('Logged in successfully');
            login(res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response.data.message || 'Signin failed');
        }
    };

    // Rest of the code
};
