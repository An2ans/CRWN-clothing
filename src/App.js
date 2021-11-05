import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import ShopPage from "./components/shop/ShopPage.jsx";
import SignInPage from "./components/sign-in-page/sign-in-page.jsx";
import Header from "./components/header/header.jsx";
import {auth, createUserProfileDocument} from "./firebase/firebase.js";


class App  extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  };
}

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id:snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });

    }else{
    this.setState({currentUser: userAuth});
  }
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInPage}/>

      </Switch>
    </div>
  );
}}

export default App;
