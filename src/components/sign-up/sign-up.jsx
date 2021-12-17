import React, {useState} from 'react';
import './sign-up.scss';
import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx";
import {connect} from "react-redux";
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {
  const [userCredentials, setCredentials] = useState({ email: "", password:"", displayName:"", confirmPassword:""});
  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword){
      alert("Passwords don't match, please try again");
      return;
    }

    signUpStart({ email, password, displayName})
  };

  const handleChange= event =>{
    const {name, value} = event.target

    setCredentials({...userCredentials, [name]:value});
  }

  return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required/>
          <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required/>
          <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required/>
          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required/>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>

      </div>
    )};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(
    signUpStart(userCredentials))
});




export default connect(null, mapDispatchToProps)(SignUp);
