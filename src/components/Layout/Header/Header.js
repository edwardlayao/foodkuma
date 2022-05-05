import React, { useContext } from "react";
import styles from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";
import CartButton from "./CartButton/CartButton";
import ShowModal from "../../../stores/ShowModal";

const Header = () => {
  const ctx_modal = useContext(ShowModal);
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles["header-inner"]}>
          <a href="/" className={styles["header-brand"]}>
            <img src="https://img.icons8.com/emoji/96/000000/bear-emoji.png" />
            <h1>DeliveryBear</h1>
          </a>
          <CartButton clickHandler={ctx_modal.show}></CartButton>
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
