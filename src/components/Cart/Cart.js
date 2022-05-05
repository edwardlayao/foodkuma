import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Button from "../UI/Button/Button";
import ShowModal from "../../stores/ShowModal";
import CartStore from "../../stores/CartStore";

const Cart = (props) => {
  const ctx_modal = useContext(ShowModal);
  const ctx_cart = useContext(CartStore);
  // default value
  let cartListRender = (
    <>
      <h1>
        Looks like the Cart is empty, Please select Add to Cart on the Menu
        Items
      </h1>
      <p className={styles["total-price-text"]}></p>
    </>
  );

  if (ctx_cart.cartItemList.length > 0) {
    cartListRender = ctx_cart.cartItemList.map((cartItem) => {
      return (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          name={cartItem.name}
          amount={cartItem.amount}
          price={cartItem.price}
        ></CartItem>
      );
    });
  }
  return (
    <Modal>
      <Card appendClass={styles["cart-container"]}>
        <div className={styles["total-items-container"]}>
          {cartListRender}
          <h1>Total Price: {ctx_cart.cartTotalPrice}</h1>
        </div>
        <div className={styles["button-container"]}>
          <Button
            onClickHandler={ctx_modal.hide}
            appendClass={styles["close-btn"]}
          >
            Close
          </Button>
          <Button appendClass={styles["order-btn"]}>Order</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
