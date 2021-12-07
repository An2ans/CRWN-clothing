import React from 'react';
import FormInput from "../form-input/form-input.jsx";
import CustomButton from "../custom-button/custom-button.jsx"
import "./sign-in.scss";
import {auth, signInWithGoogle} from "../../firebase/firebase.js";
import {googleSignInStart} from "../../redux/user/user.actions.js";
import {connect} from "react-redux";


class SignIn extends React.Component{

  constructor(){
    super();

    this.state ={
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state({email:"", password:""});

    } catch (e) {
      console.log(e);

    }

  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]:value});

  }


  render(){
    const {googleSignInStart} = this.props;

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
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn > Sign In with Google</CustomButton>
        </div>

        </form>
      </div>


  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
