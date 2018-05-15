import React, { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import store from '../store';

import NotFound from '../components/NotFound';

import LoginGate from '../containers/LoginGate';
import Home from '../containers/Home';
import Settings from '../containers/Settings';
//import Profile from '../containers/Profile';

import ProtectedRoute from "../components/ProtectedRoute";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path ='/' exact render={() => <Redirect to='/home'/>}/>
          <Route path ='/home/project' exact render={() => <Redirect to='/home'/>}/>
          <Route path ='/home/project/:id' exact render=
            {({match}) => {
             const index = store.findProjectIndexFromId(match.params.id)
             const project = store.projects[index];
             return project?<Home project={project}/>:<NotFound />
            }}
          />
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/profile" component={LoginGate} />
        <ProtectedRoute path='/settings' component={Settings}/>
        <Route path ='/login' exact render={() => (<LoginGate />)}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default Content;
