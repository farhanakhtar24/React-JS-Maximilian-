import React, { useState } from 'react';
import Cart from './components/Cart/Cart.js';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import CartProvider from './store/CartProvider.js';

const App = function (props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = function () {
    setCartIsShown(true);
  }

  const hideCartHandler = function () {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={ hideCartHandler }></Cart> }
      <Header onShowCart={ showCartHandler }></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
