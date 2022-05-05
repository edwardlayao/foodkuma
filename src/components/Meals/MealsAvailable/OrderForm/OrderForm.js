import React, { useContext, useState } from "react";
import styles from "./OrderForm.module.css";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import CartStore from "../../../../stores/CartStore";

const OrderForm = (props) => {
  const ctx_cart = useContext(CartStore);
  const [formInput, setFormInput] = useState("");

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
    ctx_cart.addToCart({
      name: props.name,
      desc: props.desc,
      price: props.price,
      count: 1,
    });
  }
};

export default OrderForm;
