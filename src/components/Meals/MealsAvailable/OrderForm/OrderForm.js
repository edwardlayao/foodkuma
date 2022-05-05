import React from "react";
import styles from "./OrderForm.module.css";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

const OrderForm = (props) => {
  return (
    <>
      <div className={styles["order-form-container"]}>
        <form
          onSubmit={onSubmitHandler}
          className={styles["order-form-control"]}
        >
          <Input
            appendClass={{ label: styles["label"], input: "" }}
            inputOptions={{
              id: props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
            label={"Amount"}
          ></Input>
          <Button
            appendClass={styles["add2cart-btn"]}
            onClickHandler={null}
            text={"Add to Cart"}
          ></Button>
        </form>
      </div>
    </>
  );
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(event);
  }
};

export default OrderForm;
