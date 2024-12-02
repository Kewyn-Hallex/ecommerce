import React, { useState } from 'react';
import api from '../axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await api.post('/clientes', { name, email, password });
      alert('Cliente registrado');
    } catch (error) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Register;
