import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import NewHome from "./pages/NewHome";
import CreateGroup from "./pages/CreateGroup/CreateGroup"
import JoinGroup from "./pages/JoinGroup/JoinGroup"

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      
        <Route exact path="/">
          {user ? <NewHome /> : <Register />}
        </Route>
        
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">
        <Register />
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
        {/* route to the messenger page */}
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path='/create-group'> <CreateGroup /> </Route>
        <Route path='/join-group'><JoinGroup /></Route>
      </Switch>
    </Router>
  );
}

export default App;
