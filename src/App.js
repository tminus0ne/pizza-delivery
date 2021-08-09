import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { setPizzas } from './redux/actions/pizzas';

// export function App() {
//   React.useEffect(() => {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => setPizzas(data.pizzas));
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <Route exact path="/">
//         <Home items={pizzas} />
//       </Route>
//       <Route exact path="/cart">
//         <Cart />
//       </Route>
//     </div>
//   );
// }

// import { store } from './redux/store';
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route exact path="/">
          <Home items={this.props.items} />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.pizzas.items };
};

// const mapDispatchToProps = { setPizzas }; <- shorter version of code beneath thi line
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (item) => dispatch(setPizzas(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
