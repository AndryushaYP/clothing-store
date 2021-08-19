import React from "react";
import "./Header.styles.scss";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./Header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const isHidden = useSelector((state) => selectCartHidden(state));

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {!currentUser ? (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        ) : (
          <OptionLink to="/" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!isHidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
