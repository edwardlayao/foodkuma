import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Button from "../UI/Button/Button";
import ShowModal from "../../stores/ShowModal";

const Cart = (props) => {
  const ctx_modal = useContext(ShowModal);
  return (
    <Modal>
      <Card appendClass={styles["cart-container"]}>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <div className={styles["total-items-container"]}>
          <p className={styles["total-price-text"]}>Total Price: $400</p>
        </div>
        <div className={styles["button-container"]}>
          <Button
            onClickHandler={ctx_modal.hide}
            appendClass={styles["close-btn"]}
            text={"Close"}
          ></Button>
          <Button appendClass={styles["order-btn"]} text={"Order"}></Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
