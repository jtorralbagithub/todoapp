import { Route, Switch, Link } from "react-router-dom";
import Todo from "./Home";
import About from "./About";

export default function App() {
  return (
    <div>
      <span style={{padding: "5px"}}>
        <Link to="/">Todo</Link>
      </span>
      <span style={{padding: "5px"}}>
        <Link to="/about">About</Link>
      </span>
      <Switch>
        <Route path="/" component={Todo} exact />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
