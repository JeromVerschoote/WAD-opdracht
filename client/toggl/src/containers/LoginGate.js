import React, { Component } from "react";

//import {Mutation} from 'react-apollo';
//import ADD_USER from '../graphql/addUser';
//import GET_ALL_USERS from '../graphql/getAllUsers';
import GET_CURRENT_USER from '../graphql/getCurrentUser';
import { Query } from "react-apollo";

import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

class LoginGate extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegister: true };
  }

  handleSignOut = client => {
    localStorage.removeItem(`jwt`);
    client.resetStore();
  };

  name = null;
  email = null;

  render() {
    return (
      <section className="user">
      <h2>User</h2>
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data, client }) => {
          if (loading) return null;
          if (error) return null;
          if (data.currentUser) {
            return (
              <div>
                <p className="signedin">
                  Signed in as {data.currentUser.name}
                </p>
                <button onClick={() => this.handleSignOut(client)}>
                  Sign Out
                </button>
              </div>
            );
          }
          return (
            <div>
              <Register />
              <Login client={client} />
            </div>
          );
        }}
      </Query>
    </section>
);
}
}

export default LoginGate;
