import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import ShopPage from "./components/shop/ShopPage.jsx";
import SignInPage from "./components/sign-in-page/sign-in-page.jsx";
import Header from "./components/header/header.jsx";
import CheckoutPage from "./components/checkout-page/checkout-page.jsx";
import {auth, createUserProfileDocument} from "./firebase/firebase.js";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions.js";
import {selectCurrentUser} from "./redux/user/user.selectors.js";
import {createStructuredSelector} from "reselect";


class App  extends React.Component {


unsubscribeFromAuth = null;

componentDidMount(){
  const {setCurrentUser} = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });

    }else{
    setCurrentUser(userAuth);
  }
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/CRWN-clothing/" component={HomePage}/>
        <Route path="/CRWN-clothing/shop" component={ShopPage}/>
        <Route exact path="/CRWN-clothing/checkout" component={CheckoutPage}/>
        <Route exact path="/CRWN-clothing/signin" render={() => this.props.currentUser ? (<Redirect to="/CRWN-clothing/" />) : (<SignInPage/>)}/>

      </Switch>
    </div>
  );
}}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
