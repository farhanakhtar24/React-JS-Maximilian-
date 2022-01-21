import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';



const Backdrop = function (props) {
    return (
        <div className={ classes.backdrop } onClick={ props.onClose }></div>
    );
}

const ModalOverlay = function (props) {
    return (
        <div className={ classes.modal }>
            <div className={ classes.content }>{ props.children }</div>
        </div>
    )
}


const portalElement = document.getElementById('overlays');

const Modal = function (props) {
    return (
        <Fragment>
            { ReactDOM.createPortal(<Backdrop onClose={ props.onClose }></Backdrop>, portalElement) }
            { ReactDOM.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalElement) }
        </Fragment>
    );
}

export default Modal;