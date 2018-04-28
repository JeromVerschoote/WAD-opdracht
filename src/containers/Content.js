import React, { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import store from '../store';

import NotFound from '../components/NotFound';

import NewPanel from "../containers/NewPanel";
import ProjectPanel from "../containers/ProjectPanel";
import TimerPanel from "../containers/TimerPanel";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path ='/' exact render={() => <Redirect to='/home'/>}/>
        <Route path ='/home' exact render=
        {() => {
          return (
            <div className='application-content'>
              <NewPanel />
              <div className='content-container'>
                <ProjectPanel />
                <TimerPanel />
              </div>
            </div>
          )
        }}
      />
      <Route path ='/home/project' exact render={() => <Redirect to='/home'/>}/>
      <Route path ='/home/project/:id' exact render=
      {({match}) => {
        store.currentProject = store.projects[store.getIndexFromId(match.params.id)];
        return store.projects[store.getIndexFromId(match.params.id)]?(
          <div className='application-content'>
            <NewPanel />
            <div className='content-container'>
              <ProjectPanel />
              <TimerPanel />
            </div>
          </div>
        ):<NotFound />
      }}
    />
    <Route path='/settings' exact render={() => <h1>Settings</h1>}/>
    <Route path='/profile' exact render={() => <h1>Profile</h1>}/>
    <Route component={NotFound}/>
  </Switch>
);
}
}

export default Content;
