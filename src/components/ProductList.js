import React, { useState, useEffect } from 'react';
import api from '../axios';

function ProductList({ onAddProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/produtos');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => onAddProduct(product)}>Adicionar ao Pedido</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
