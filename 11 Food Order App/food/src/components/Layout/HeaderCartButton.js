import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
// import Cart from '../Cart/Cart';

const HeaderCartButtom = function (props) {
    const [buttonIsHighlighted, setbuttonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((acc, item, index) => {
        return acc + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setbuttonIsHighlighted(true);
        const timer = setTimeout(() => {
            setbuttonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout();
        }
    }, [items]);

    return (
        <button className={ btnClasses } onClick={ props.onClick }>
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