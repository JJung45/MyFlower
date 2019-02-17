import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import FlowerList from './components/FlowerList';
import Wrapping from './components/wrap/Wrapping';
import Cart from './components/cart/CartList';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar />
        <Switch>
          <Route exact path="/" component={FlowerList} />
          <Route path="/cart" component={Cart} />
          <Route path="/wrapping" component={Wrapping} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
