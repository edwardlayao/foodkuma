import sroe_img from "../../../assets/sroe_crop.jpg";
import grill_img from "../../../assets/grill.png";
import ps_img from "../../../assets/ps_crop.jpg";

const DUMMY_MENU = [
  {
    id: `${Date.now.toString()} : ${Math.random()}`,
    name: "Salmon Roe Sushi",
    desc: "Fresh Salmon Roe, Made into a sushi.",
    price: 22.99,
    img: sroe_img,
  },
  {
    id: "m2",
    name: "Honey-Brined Grilled Salmon",
    desc: "Fresh Salmon, marinated in Honey and special spices.",
    price: 41.99,
    img: grill_img,
  },
  {
    id: "m3",
    name: "Pan Seared Salmon",
    desc: "Salmon, marinated with special spices, pan seared to perfection",
    price: 22.99,
    img: ps_img,
  },
];

export default DUMMY_MENU;
