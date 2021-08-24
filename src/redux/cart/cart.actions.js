import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (cartId) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartId,
});

export const removeItemFromCart = (cartId) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: cartId,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
