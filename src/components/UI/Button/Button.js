import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <div className={styles["button-container"]}>
        <button
          onClick={props.onClickHandler}
          className={`${styles.button} ${props.appendClass}`}
        >
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
