import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <>
      <div className={styles["input-container"]}>
        <label
          className={`${styles["input-container-label"]} ${props.appendClass.label}`}
        >
          {props.label}
        </label>
        <input
          className={`${styles.input} ${props.appendClass.input}`}
          {...props.inputOptions}
        ></input>
      </div>
    </>
  );
};

export default Input;
