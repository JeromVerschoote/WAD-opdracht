import React, { Component } from "react";

import {Mutation} from 'react-apollo';
import ADD_USER from '../graphql/addUser';
import GET_ALL_USERS from '../graphql/getAllUsers';

class Profile extends Component {

  name = null;
  email = null;

  render() {
    return (
      <section className='profile'>
        <h2>Users</h2>
        <p>Select your user-account to login or make a new one.</p>
        <form className='profile-form'>
          {
            this.props.users.map(user =>
              <div className='profile-user' key={user._id}>
                <input type='radio' value={user.name} name='user'/>
                <div className='user-container'>
                  <label className='user-name'>{user.name}</label>
                  <label className='user-email'>{user.email}</label>
                  <div>
                    <input type='checkbox'/>
                    <label className='user-check'>receive report after finishing project.</label>
                  </div>
                </div>
              </div>
            )
          }
        </form>
        <Mutation mutation={ADD_USER} update={
        (cache, {data:{addUser}}) => {
          const data = cache.readQuery({
            query: GET_ALL_USERS
          });

          data.getAllUsers.push(addUser);
          cache.writeQuery({
            query: ADD_USER,
            data: data
          });
        }}>
          {addUser => (
            <form className='addUser-form' onSubmit={e => {
              e.preventDefault();
              if (this.name.value && this.email.value) {
                addUser({variables:{name:this.name.value, email:this.email.value}});
                }
              }
            }>
            <input className="input-content" autoFocus ref={field => this.name = field} placeholder='Username'/>
            <input className="input-content" ref={field => this.email = field} placeholder='Email'/>
            <input className="button" type="submit" value="+" />
          </form>
        )}
    </Mutation>
  </section>
);
}
}

export default Profile;
