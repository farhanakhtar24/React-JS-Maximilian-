import React, { Fragment } from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Routes>
          {/* <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route> */}
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Routes>
      </main>
    </Fragment >
  )
};

export default App;