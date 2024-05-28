import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart";

export const CartContext = createContext();
const initialStates = {
  cartProducts: [],
  message: "",
  isError: false,
  isLoading: false,
};

const CartProvider = ({ children }) => {
  const [cartStates, dispatch] = useReducer(cartReducer, initialStates);
  return (
    <CartContext.Provider value={{ cartStates, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
