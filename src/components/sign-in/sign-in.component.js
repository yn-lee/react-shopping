import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-btn/custom-btn.component";

import { signInwithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;