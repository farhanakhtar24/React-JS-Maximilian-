import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CheckOut from './CheckOut';

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = function () {
    setIsCheckOut(true);
  }


  const submitHandler = async function (userData) {
    setIsSubmitting(true);
    await fetch('https://react-meals-app-4ef95-default-rtdb.firebaseio.com/orders.json', {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={ classes['cart-items'] }>
      { cartCtx.items.map((item) => (
        <CartItem
          key={ item.id }
          name={ item.name }
          amount={ item.amount }
          price={ item.price }
          onRemove={ cartItemRemoveHandler.bind(null, item.id) }
          onAdd={ cartItemAddHandler.bind(null, item) }
        />
      )) }
    </ul>
  );

  const modalAction = (
    <div className={ classes.actions }>
      <button className={ classes['button--alt'] } onClick={ props.onClose }>
        Close
      </button>
      { hasItems && <button className={ classes.button } onClick={ orderHandler }>Order</button> }
    </div>
  );


  const cartModal = (
    <Fragment>
      { cartItems }
      <div className={ classes.total }>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      { isCheckOut && <CheckOut onCancel={ props.onClose } onConfirm={ submitHandler }></CheckOut> }
      { !isCheckOut && modalAction }

    </Fragment>
  );

  const submittingCartModal = <p>Sending order Data...</p>;


  const didSubmitCartModal = <p>Successfully submitted order</p>


  return (
    <Modal onClose={ props.onClose }>
      { !isSubmitting && !didSubmit && cartModal }
      { isSubmitting && submittingCartModal }
      { !isSubmitting && didSubmit && didSubmitCartModal }
    </Modal>
  );
};

export default Cart;
