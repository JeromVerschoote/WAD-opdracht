import React, { Component } from "react";
import LOGIN from "../graphql/login";
import { Mutation } from "react-apollo";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: `` };
  }

  handleSubmit = async (e, login) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const { data } = await login({ variables: { email, password } });
      if (data.user) {
        localStorage.setItem(`jwt`, data.user.jwt);
        this.props.client.writeData({
          data: { currentUser: data.user }
        });
      }
    } catch (error) {
      console.log(error)
      this.setState({ errorMessage: error.graphQLErrors[0].message });
    }
  };

  render() {
    return (
      <article>
        <h3>Sign in</h3>
        <Mutation mutation={LOGIN}>
          {(login, { loading, error }) => {
            return (
              <form className="userform" onSubmit={e => this.handleSubmit(e, login)}>
                <label htmlFor="sig-email">E-mail</label>
                <input
                  type="email"
                  id="sig-email"
                  name="email"
                  required
                />
                <label htmlFor="sig-pwd">Password</label>
                <input
                  type="password"
                  id="sig-pwd"
                  name="password"
                  required
                />
                <input type="submit" value="Sign in" />
                <p>{this.state.errorMessage}</p>
              </form>
            );
          }}
        </Mutation>
      </article>
    );
  }
}

export default Login;
