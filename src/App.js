import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route path="/about" component={About} />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
