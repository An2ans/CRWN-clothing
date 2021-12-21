import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {useDispatch, useSelector} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import {selectCartHidden} from "../../redux/cart/cart.selectors.js";
import {selectCurrentUser} from "../../redux/user/user.selectors.js";
import {signOutStart} from "../../redux/user/user.actions.js";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return(
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
        <OptionLink as="div" onClick={() => dispatch(signOutStart())}>SIGN OUT </OptionLink>
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
}


export default Header;
