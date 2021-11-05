import React from 'react';
import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx"
import "./sign-in.scss";
import {signInWithGoogle} from "../../firebase/firebase.js";


class SignIn extends React.Component{

  constructor(){
    super();

    this.state ={
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email:"", password:""});
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]:value});

  }


  render(){
    return <div className="sign-in">
      <h2 className="title" >I already have an account</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={this.handleChange}
          label="email"
          required value={this.state.email} />

        <FormInput
          name="password"
          type="password"
          handleChange={this.handleChange}
          label="password"
          required value={this.state.password} />

        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
        </div>

        </form>
      </div>


  }
}

export default SignIn;