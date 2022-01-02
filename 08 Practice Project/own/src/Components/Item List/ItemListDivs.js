import React from "react";
import classes from './ItemListDivs.module.css';

const ItemListDivs = function (props) {
    return (
        <div className={ classes.ItemDivs }>
            { props.children }
        </div>
    );
}

export default ItemListDivs;