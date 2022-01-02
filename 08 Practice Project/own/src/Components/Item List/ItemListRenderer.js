import React from "react";
import ItemListDivs from "./ItemListDivs";
import classes from './ItemListRenderer.module.css';


const ItemListRenderer = function (props) {
    return (
        <div className={ classes.ItemListRendererDiv }>
            { props.UserList.map(userObject => {
                return (
                    <ItemListDivs>{ userObject.username } ( { userObject.age } years old )</ItemListDivs>
                );
            }) }
        </div>
    );
}

export default ItemListRenderer;