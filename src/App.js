import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/">
        <Home items={pizzas} />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
  );
}
