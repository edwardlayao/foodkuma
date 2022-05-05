import React, { useReducer } from "react";

const CartStore = React.createContext({
  cartItemList: [],
  cartItemCount: "0",
  addToCart: () => {},
});

export default CartStore;

const cartItemsReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    let newCart = [...state.cartItemList, action.payload];
    return { cartItemList: newCart, cartItemCount: newCart.length };
  }
};

export function CartStoreProvider(props) {
  //dont forget to add default reducer values
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {
    cartItemList: [],
    cartItemCount: 0,
  });

  function addCart(menuItem) {
    dispatchCartItems({ type: "ADD_CART", payload: menuItem });
  }

  return (
    <CartStore.Provider
      value={{
        cartItemList: cartItems.cartItemList,
        cartItemCount: cartItems.cartItemCount,
        addToCart: addCart,
      }}
    >
      {props.children}
    </CartStore.Provider>
  );
}
