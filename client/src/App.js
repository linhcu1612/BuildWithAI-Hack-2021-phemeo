/** @format */

import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Layout from "./components/Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path='/about_us'>
              <About />
            </Route>
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
