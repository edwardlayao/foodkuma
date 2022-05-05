import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

export default Backdrop;
