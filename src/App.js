import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Bookroom from './Components/Bookroom/Bookroom';
import Roomdetails from './Components/Roomdetails/Roomdetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/bookroom">
          <Bookroom></Bookroom>
        </Route>
        <PrivateRoute path="/roomdetails">
          <Roomdetails></Roomdetails>
        </PrivateRoute>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
