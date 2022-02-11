import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Mycomponents/Navbar/Navbar";
import Home from "./Mycomponents/Home/Home";

import Comments from "./Mycomponents/Home/Comments";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comments" component={Comments} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
