import React, { useState } from 'react';
import './app.css'
import Products from './Products';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from './Home';


function App() {


  const [token, setToken] = useState(null)


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1><span className="green">Quel</span> <span className="white">Mazzolin di</span> <span className="red">Fiori</span></h1>
          <nav>
            <ul>
              <li>
                <NavLink activeStyle={{ color: "white" }} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "white" }} to="/products">Products</NavLink>
              </li>
              {/* <li>
                <NavLink activeStyle={{ color: "white" }} to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "white" }} to="/login">Login</NavLink>
              </li> */}
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} setToken={setToken} />} />


          <Route exact path="/products" render={(props) => <Products {...props} token={token} />} />


        </Switch>

      </div>
    </BrowserRouter>
  );
}


export default App;