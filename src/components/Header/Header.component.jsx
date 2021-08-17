import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
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
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        ) : (
          <Link to="/" onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </Link>
        )}
        <CartIcon />
      </nav>
      {!isHidden && <CartDropdown />}
    </header>
  );
};

export default Header;
