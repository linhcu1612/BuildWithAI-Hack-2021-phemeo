/** @format */

import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path='/team_members'>{/* <About /> */}</Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
