import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = async function () {
      const response = await fetch('https://react-http-db141-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        })

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
    }

    sendCartData();
  }, [cart]);

  return (
    <Layout>
      { cartVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
