import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector.js";

import { ReactComponent as CrwmLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwmLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
