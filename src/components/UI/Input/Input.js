import React from "react";
import styles from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={styles["input-container"]}>
        <label
          className={`${styles["input-container-label"]} ${props.appendClass.label}`}
        >
          {props.label}
        </label>
        <input
          ref={ref}
          className={`${styles.input} ${props.appendClass.input}`}
          {...props.inputOptions}
        ></input>
      </div>
    </>
  );
});

export default Input;
