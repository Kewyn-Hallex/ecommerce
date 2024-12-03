import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (cliente) => {
    setUser(cliente);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          {user ? (
            <>
              <Link to="/pedidos">Meus Pedidos</Link>
              <OrderForm clienteId={user.id} />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Registrar</Link>
            </>
          )}
        </nav>

        <Switch>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/produtos">
            <ProductList onAddProduct={(product) => alert(`Produto adicionado: ${product.name}`)} />
          </Route>
          <Route path="/pedidos">
            <OrderList />
          </Route>
          <Route exact path="/">
            <h1>Bem-vindo ao E-commerce</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
