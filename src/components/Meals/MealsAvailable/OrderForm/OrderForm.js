import React, { useContext, useRef } from "react";
import styles from "./OrderForm.module.css";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import CartStore from "../../../../stores/CartStore";

const OrderForm = (props) => {
  const ctx_cart = useContext(CartStore);
  const inputRef = useRef();

  return (
    <>
      <div className={styles["order-form-container"]}>
        <form
          onSubmit={onSubmitHandler}
          className={styles["order-form-control"]}
        >
          <Input
            ref={inputRef}
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
          <Button appendClass={styles["add2cart-btn"]} onClickHandler={null}>
            Add to Cart
          </Button>
        </form>
      </div>
    </>
  );
  function onSubmitHandler(event) {
    event.preventDefault();
    const amountInput = inputRef.current.value;
    let totalPrice = props.price * parseInt(amountInput);

    ctx_cart.addToCart({
      id: `${Date.now()}*${Math.random()}`,
      name: props.name,
      desc: props.desc,
      amount: parseInt(amountInput),
      price: totalPrice.toFixed(2),
    });
    inputRef.current.value = "1";
  }
};

export default OrderForm;
