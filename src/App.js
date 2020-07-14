import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import SingInContainer from "./Component/SingIn/SingInContainer";
import UsersContainer from "./Component/Users/UsersContainer";

function App() {
  return (
      <div className="App">
          <Route exact path='/' render={() =>
              <SingInContainer/>
          }/>
          <Route exact path='/Users' render={() =>
              <UsersContainer/>
          }/>
      </div>
  );
}

export default App;
