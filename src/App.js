import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// pages imports
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/Dashboard";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.setPrivateRoutes({
  //     home: "home"
  //   });

  //   this.props.setPublicRoutes({
  //     home: "home"
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/access/login" component={LoginPage} />
            <Route exact path="/access/register" component={RegisterPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPrivateRoutes: privateRoutes =>
      dispatch({ type: "SET_PRIVATE_ROUTES", payload: privateRoutes }),
    setPublicRoutes: publicRoutes =>
      dispatch({ type: "SET_PUBLIC_ROUTES", payload: publicRoutes })
  };
};

export default connect(mapDispatchToProps)(App);
