import React, {useEffect, lazy, Suspense} from 'react';
import {GlobalStyle} from "./global.styles.js";
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/header/header.jsx";
import {useSelector, useDispatch } from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors.js";
import {checkUserSession} from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./components/homepage/HomePage.jsx"));
const ShopPage = lazy (() => import("./components/shop/ShopPage.jsx"));
const SignInPage = lazy(() => import("./components/sign-in-page/sign-in-page.jsx"));
const CheckoutPage = lazy(() => import("./components/checkout-page/checkout-page.jsx"));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage}/>
              <Route path="/shop" component={ShopPage}/>
              <Route exact path="/checkout" component={CheckoutPage}/>
              <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInPage/>)}/>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
  );
}




export default App;
