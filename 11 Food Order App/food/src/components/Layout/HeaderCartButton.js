import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
// import Cart from '../Cart/Cart';

const HeaderCartButtom = function (props) {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((acc, item, index) => {
        return acc + item.amount;
    }, 0);

    return (
        <button className={ classes.button } onClick={ props.onClick }>
            <span className={ classes.icon }>
                <CartIcon></CartIcon>
            </span>
            <span>
                Your Cart
            </span>
            <span className={ classes.badge }>
                { numberOfCartItems }
            </span>
        </button>
    )
}

export default HeaderCartButtom;