import React, { useContext } from "react";
import styles from "./CartButton.module.css";
import CartStore from "../../../../stores/CartStore";

const CartButton = (props) => {
  const ctx_cart = useContext(CartStore);

  return (
    <React.Fragment>
      <div className={styles.cartContainer}>
        <button className={styles.cartbtn} onClick={props.clickHandler}>
          <img
            src="https://img.icons8.com/fluency/48/000000/shopping-cart-promotion.png"
            alt="cart button"
          />
        </button>
        <p className={styles.yourcart}>Your Cart</p>
        <p className={styles.count}>{ctx_cart.cartItemCount}</p>
      </div>
    </React.Fragment>
  );
};

export default CartButton;
