import React, { useReducer } from "react";

const CartStore = React.createContext({
  cartItemList: [],
  cartItemCount: "0",
  cartTotalPrice: "0",
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartStore;

const cartItemsReducer = (state, action) => {
  function computeTotalPrice(cartItems) {
    let values = cartItems.map((items) => {
      return parseFloat(items.price);
    });
    let sum = 0;
    values.forEach((num) => {
      sum = sum + num;
    });
    return sum.toFixed(2);
  }

  if (action.type === "ADD_CART") {
    let newCart = [...state.cartItemList, action.payload];
    let newTotal = computeTotalPrice(newCart);
    return {
      cartItemList: newCart,
      cartItemCount: newCart.length,
      cartTotalPrice: newTotal,
    };
  }

  if (action.type === "REMOVE_CART") {
    let newCart = state.cartItemList.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    let newTotal = computeTotalPrice(newCart);
    return {
      cartItemList: newCart,
      cartItemCount: newCart.length,
      cartTotalPrice: newTotal,
    };
  }
};

export function CartStoreProvider(props) {
  //dont forget to add default reducer values
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {
    cartItemList: [],
    cartItemCount: 0,
    cartTotalPrice: 0,
  });

  function addCart(menuItem) {
    dispatchCartItems({ type: "ADD_CART", payload: menuItem });
  }

  function removeCart(id) {
    dispatchCartItems({ type: "REMOVE_CART", payload: id });
  }

  return (
    <CartStore.Provider
      value={{
        cartItemList: cartItems.cartItemList,
        cartItemCount: cartItems.cartItemCount,
        cartTotalPrice: cartItems.cartTotalPrice,
        addToCart: addCart,
        removeFromCart: removeCart,
      }}
    >
      {props.children}
    </CartStore.Provider>
  );
}
