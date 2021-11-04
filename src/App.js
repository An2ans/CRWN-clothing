import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import ShopPage from "./components/shop/ShopPage.jsx";
import Header from "./components/header/header.jsx";



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
