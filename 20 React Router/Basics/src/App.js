import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </Fragment >
  )
};

export default App;