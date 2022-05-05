import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import CartStore from "../../../stores/CartStore";

const CartItem = (props) => {
  const ctx_cart = useContext(CartStore);
  return (
    <>
      <Card appendClass={styles["cart-item-container"]}>
        <h4>{props.name}</h4>
        <div className={styles["amount-price-container"]}>
          <h4>x{props.amount}</h4>
          <h4>${props.price}</h4>
          <Button
            onClickHandler={onClickHandler}
            appendClass={styles.deleteBtn}
          >
            <img
              className={styles.delete}
              src="https://img.icons8.com/stickers/100/000000/delete-forever.png"
              alt="delete"
            />
          </Button>
        </div>
      </Card>
    </>
  );

  function onClickHandler() {
    ctx_cart.removeFromCart(props.id);
  }
};

export default CartItem;
