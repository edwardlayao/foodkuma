import React from "react";
import Card from "../../../UI/Card/Card";
import OrderForm from "../OrderForm/OrderForm";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <React.Fragment>
      <Card appendClass={styles.menuItemContainer}>
        <div className={styles.itemsLeftDivider}>
          <p className={styles.headertext}>{props.name}</p>
          <p className={styles.desc}>{props.desc}</p>
          <p className={styles.price}>${props.price}</p>
          <OrderForm
            id={props.id}
            name={props.name}
            desc={props.desc}
            price={props.price}
          ></OrderForm>
        </div>
        <div className={styles.itemsRightDivider}>
          <img className={styles.menuImg} src={`${props.img}`} alt="food" />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default MenuItem;
