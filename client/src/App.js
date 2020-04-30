import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import './app.css'
import Products from './Products';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import Home from './Home';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
          <Switch>
            <Route exact path= "/">
              <Home/>
            </Route>
            <Route exact path ="/products">
              <Products />
            </Route>
            <Route exact path ="/login">
              <Login/>
            </Route>
            <Route exact path ="/signup">
              <SignUp/>
            </Route>
          </Switch>
        
      </div>
    </BrowserRouter>
  );
}


export default App;