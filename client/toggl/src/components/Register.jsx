import React, { Component } from "react";
import REGISTER from "../graphql/register";
import { Mutation } from "react-apollo";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegister: true };
  }

  handleSubmit = async (e, register) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data } = await register({ variables: { name, email, password } });
    if (data.user.email) {
      this.setState({ showRegister: false });
    }
  };

  render() {
    return (
      <article>
        <h3>Register</h3>
        {this.state.showRegister ? (
          <Mutation mutation={REGISTER}>
            {register => (
              <form className="user-form" onSubmit={e => this.handleSubmit(e, register)}>
                <label htmlFor="registration-name">Name</label>
                <input type="text" id="registration-name" name="name" required />
                <label htmlFor="registration-email">E-mail</label>
                <input type="email" id="registration-email" name="email" required />
                <label htmlFor="registration-pwd">Password</label>
                <input type="password" id="registration-pwd" name="password" required />
                <input type="submit" value="Register" />
              </form>
            )}
          </Mutation>
        ) : (
          <p>Registered, now log in!</p>
        )}
      </article>
    );
  }
}

export default Register;
