import React, { useState } from 'react';
import api from '../axios';

function OrderForm({ clienteId }) {
  const [productId, setProductId] = useState('');

  const handleSubmit = async () => {
    await api.post('/pedidos', { clienteId, productId });
    alert('Pedido realizado');
  };

  return (
    <div>
      <input type="text" placeholder="ID do Produto" onChange={(e) => setProductId(e.target.value)} />
      <button onClick={handleSubmit}>Finalizar Pedido</button>
    </div>
  );
}

export default OrderForm;
