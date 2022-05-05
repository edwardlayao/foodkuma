import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

const overlayElement = document.getElementById("overlays");

const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <Overlay>{props.children}</Overlay>
        </Backdrop>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
