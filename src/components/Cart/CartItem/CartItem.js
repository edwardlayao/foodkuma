import React from "react";
import styles from "./CartItem.module.css";
import Card from "../../UI/Card/Card";

const CartItem = () => {
  return (
    <>
      <Card appendClass={styles["cart-item-container"]}>
        <h4>Sushi</h4>
        <h4>$100.00</h4>
      </Card>
    </>
  );
};

export default CartItem;
