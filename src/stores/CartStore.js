import React, { useReducer } from "react";

const CartStore = React.createContext({
  cartItemList: [],
  addToCart: () => {},
});

export default CartStore;

const cartItemsReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    return { cartItems: [...state, action.payload] };
  }
};

export function CartStoreProvider(props) {
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {
    cartList: [],
  });

  function addCart(menuItem) {
    dispatchCartItems({ type: "ADD_CART", payload: menuItem });
  }

  return (
    <CartStore.Provider value={{ cartItemList: cartItems, addToCart: addCart }}>
      {props.children}
    </CartStore.Provider>
  );
}
