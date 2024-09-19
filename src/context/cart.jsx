import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, playload: actionPlayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPlayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }

      return [
        ...state,
        {
          ...actionPlayload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPlayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity -= 1;
        if (newCart[productInCartIndex].quantity <= 0) {
          newCart.splice(productInCartIndex, 1);
        }
        return newCart;
      }

      return state.filter((item) => item.id !== id);
    }
    case "CLEAN_CART": {
      return initialState;
    }
  }

  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      playload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      playload: product,
    });
  const cleanCart = () =>
    dispatch({
      type: "CLEAN_CART",
    });

  return (
    <CartContext.Provider
      value={{ cart: state, removeFromCart, addToCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
