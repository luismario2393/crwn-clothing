import { createActions } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1 if it is remove that item from the cart
  if (existingCartitem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with maching cart item with reduced quiantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) =>
  createActions(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);

  return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemToCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);

  return createActions(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
