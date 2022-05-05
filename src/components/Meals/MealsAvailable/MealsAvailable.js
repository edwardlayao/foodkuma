import React from "react";
import style from "./MealsAvailable.module.css";
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
      <Card appendClass={style.menuListContainer}>{menuItemRender}</Card>
    </React.Fragment>
  );
};

export default MealsAvailable;
