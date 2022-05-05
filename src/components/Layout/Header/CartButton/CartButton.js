import React from "react";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <React.Fragment>
      <div className={styles.cartContainer}>
        <button className={styles.cartbtn} onClick={props.clickHandler}>
          <img src="https://img.icons8.com/fluency/48/000000/shopping-cart-promotion.png" />
        </button>
        <p className={styles.yourcart}>Your Cart</p>
        <p className={styles.count}>3</p>
      </div>
    </React.Fragment>
  );
};

export default CartButton;
