import React, { useContext } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ShowModal from "../../../stores/ShowModal";

const overlayElement = document.getElementById("overlays");

const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const ctx_modal = useContext(ShowModal);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={ctx_modal.hide}>
          <Overlay>{props.children}</Overlay>
        </Backdrop>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
