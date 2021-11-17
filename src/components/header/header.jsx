import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.js";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selectors.js";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles.jsx";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT </OptionLink>
      ):(
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>

      )}
    <CartIcon />
    </OptionsContainer>
    {
      !hidden &&(
        <CartDropdown />
      )
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
