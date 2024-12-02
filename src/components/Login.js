import React, { useState } from 'react';
import api from '../axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.get(`/clientes?email=${email}&password=${password}`);
      if (response.data.length) {
        onLogin(response.data[0]);
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      alert('Erro de autenticação');
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
