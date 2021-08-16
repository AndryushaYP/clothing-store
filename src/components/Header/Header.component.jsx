import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
      </nav>
    </header>
  );
};

export default Header;
