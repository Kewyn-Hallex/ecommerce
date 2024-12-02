import React, { useState } from 'react';
import api from '../axios';

function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await api.post('/produtos', { name, description });
    alert('Produto adicionado');
  };

  return (
    <div>
      <input type="text" placeholder="Nome do Produto" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Adicionar Produto</button>
    </div>
  );
}

export default ProductForm;
