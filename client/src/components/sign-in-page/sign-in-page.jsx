import React from 'react';
import SignIn from "../sign-in/sign-in.jsx";
import SignUp from "../sign-up/sign-up.jsx";

import "./sign-in-page.scss";

const SignInPage = () => (
  <div className="sign-in-page">
    <SignIn />
    <SignUp />

  </div>

);

export default SignInPage;
