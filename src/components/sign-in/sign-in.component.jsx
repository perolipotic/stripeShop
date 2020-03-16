import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, singInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} action="">
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            label="Email"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
