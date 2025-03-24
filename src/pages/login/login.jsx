import './login.css';
import Logo from '../../assets/bandeira.webp';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Alterado para 'useNavigate'


function Login() {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Alterado para 'useNavigate'

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            // Armazenar o token no localStorage
            localStorage.setItem('token', response.data.token);

            // Redirecionar para a página /home após o login
            navigate('/home'); // Usando 'navigate' para redirecionamento
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Erro no servidor');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin} className="form-login">
                <img className='logo-login' src={Logo} alt="logo" />
                <div>
                    <h1>Bandeira</h1>
                    <h4>Horários Escolares</h4>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input type="text" placeholder="Email" value={email} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit" className='btnLogin'>Entrar</button>
            </form>
        </div>
    );
}

export default Login;