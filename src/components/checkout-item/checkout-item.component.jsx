import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  clearItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quiantity,
  RemoveButton,
  Value,
} from "./chekcout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(clearItemToCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quiantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quiantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
