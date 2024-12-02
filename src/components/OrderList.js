import React, { useState, useEffect } from 'react';
import api from '../axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get('/pedidos');
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Pedidos</h2>
      {orders.map(order => (
        <div key={order.id}>
          <p>Pedido para o cliente {order.clienteId}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
