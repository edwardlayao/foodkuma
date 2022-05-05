import React from "react";
import styles from "./MealsAvailable.module.css";
import DUMMY_MENU from "./dummyMenu";
import MenuItem from "./MenuItem/MenuItem";
import Card from "../../UI/Card/Card";

// we render the menuitems
const menuItemRender = DUMMY_MENU.map((menu) => {
  return (
    <MenuItem
      key={menu.id}
      name={menu.name}
      desc={menu.desc}
      price={menu.price}
      img={menu.img}
    ></MenuItem>
  );
});

const MealsAvailable = () => {
  return (
    <React.Fragment>
      <Card appendClass={styles.menuListContainer}>
        <Card appendClass={styles.menuHeader}>
          <img
            src="https://img.icons8.com/stickers/100/000000/whole-fish.png"
            alt="fish logo"
          />
          <img
            src="https://img.icons8.com/stickers/100/000000/steak.png"
            alt="steak logo"
          />
          <img
            src="https://img.icons8.com/stickers/100/000000/orange-soda.png"
            alt="soda logo"
          />
          <img
            src="https://img.icons8.com/stickers/100/000000/cupcake.png"
            alt="cupcake logo"
          />
        </Card>

        {menuItemRender}
      </Card>
    </React.Fragment>
  );
};

export default MealsAvailable;
