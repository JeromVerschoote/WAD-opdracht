import React, { Component } from "react";
import "../css/App.css";

import Navigation from "../containers/Navigation";
import Content from "../containers/Content";

class App extends Component {
  render() {
    return (
      <div className='application'>
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
