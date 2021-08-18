export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartId) => {
  return cartItems.filter((item) => item.id !== cartId);
};

export const removeItemFromCart = (cartItems, cartId) => {
  const existingCartItem = cartItems.find((item) => item.id === cartId);

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartId);
  }
  return cartItems.map((item) =>
    item.id === cartId ? { ...item, quantity: item.quantity - 1 } : item
  );
};
