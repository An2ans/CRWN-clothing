import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import ShopPage from "./components/shop/ShopPage.jsx";
import SignInPage from "./components/sign-in-page/sign-in-page.jsx";
import Header from "./components/header/header.jsx";
import CheckoutPage from "./components/checkout-page/checkout-page.jsx";
import {connect} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors.js";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user.actions";


class App  extends React.Component {


unsubscribeFromAuth = null;

componentDidMount(){
  const {checkUserSession} = this.props;
  checkUserSession();
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInPage/>)}/>

      </Switch>
    </div>
  );
}}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});




export default connect(mapStateToProps, mapDispatchToProps)(App);
