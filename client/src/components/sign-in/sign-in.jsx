import React, {useState} from 'react';
import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx"
import "./sign-in.scss";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions.js";
import {useDispatch} from "react-redux";


const SignIn = () => {
  const [userCredentials, setCredentials] = useState({ email: "", password:""});
  const {email, password} = userCredentials;
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(emailSignInStart({email, password}));
  };

  const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({ ...userCredentials, [name]:value});

  };


  return(
    <div className="sign-in">
      <h2 className="title" >I already have an account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="email"
          required value={email} />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          label="password"
          required value={password} />

        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn > Sign In with Google</CustomButton>
        </div>

        </form>
      </div>


)};



export default SignIn;
