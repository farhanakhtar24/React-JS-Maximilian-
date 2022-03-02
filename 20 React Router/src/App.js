import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail></ProductDetail>
      </Route>
    </Fragment>
  )
};

export default App;