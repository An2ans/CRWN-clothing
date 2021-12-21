import React, {useEffect} from 'react';
import {GlobalStyle} from "./global.styles.js";
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import ShopPage from "./components/shop/ShopPage.jsx";
import SignInPage from "./components/sign-in-page/sign-in-page.jsx";
import Header from "./components/header/header.jsx";
import CheckoutPage from "./components/checkout-page/checkout-page.jsx";
import {useSelector, useDispatch } from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors.js";
import {checkUserSession} from "./redux/user/user.actions";


const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

 //Pasamos dispatch porque una vez que se crea el metodo no vuelve a cambiar, por lo que dispatch no cambia y asi no caemos en el loop

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInPage/>)}/>

        </Switch>
      </div>
  );
}




export default App;
