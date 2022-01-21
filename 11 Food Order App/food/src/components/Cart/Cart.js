import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = function (props) {
    const cartItems = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: '2',
            price: '12.99',
        }
    ];

    return (
        <Modal onClose={ props.onClose }>
            <ul className={ classes["cart-items"] }>
                {
                    cartItems.map((item) => {
                        return <li>{ item.name }</li>
                    })
                }
            </ul>
            <div className={ classes.total }>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={ classes.actions }>
                <button className={ classes["button--alt"] } onClick={ props.onClose }>Close</button>
                <button className={ classes.button }>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;