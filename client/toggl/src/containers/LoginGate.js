import React, { Component } from "react";

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

  render() {
    return (
      <section className="user">
      <h2 className='hidden'>User</h2>
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data, client }) => {
          if (loading) return null;
          if (error) return null;
          if (data.currentUser) {
            return (
              <div className='active-user'>
                <h2>{data.currentUser.name}</h2>
                <button className='button--secundairy button--delete' onClick={() => this.handleSignOut(client)}>Sign Out</button>
              </div>
            );
          }
          return (
            <div className='user-container'>
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
