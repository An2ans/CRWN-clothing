import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.js";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selectors.js";


const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/CRWN-clothing/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/CRWN-clothing/shop">
        SHOP
      </Link>
      <Link className="option" to="/CRWN-clothing/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT </div>
      ):(
        <Link className="option" to="/CRWN-clothing/signin">
          SIGN IN
        </Link>

      )}
    <CartIcon />
    </div>
    {
      !hidden &&(
        <CartDropdown />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
