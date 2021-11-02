/** @format */

import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Behind from "./pages/Behind";
import Layout from "./components/Layout";

import { createClient, Provider } from "urql";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const client = createClient({
  url: "https://build-with-ai-be.herokuapp.com/graphql",
});

function App() {
  return (
    <Provider value={client}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/about_us'>
              <About />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/behind_the_scene'>
              <Behind />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
