import React, { Component } from "react";
import "../css/App.css";
import store from '../store';

import Navigation from "../components/Navigation";
import AddProject from "../components/AddProject";
import AllTodos from "../components/AllTodos";
import RecentTodos from "../components/RecentTodos";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation store={store}/>
        <div className='application-window application-window--content'>
          <AddProject store={store}/>
          <div className='panel-management'>
            <RecentTodos store={store}/>
            <AllTodos store={store}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
