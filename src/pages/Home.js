import React, { Component } from "react";
import { connect } from "react-redux";
import MapHome from "../components/MapHome";

class Home extends Component {
  componentDidMount() {
    this.props.setUser({
      type: "SET_USER",
      payload: { id: "1245", token: "sljflkjs" }
    });
  }
  render() {
    return (
      <div className="container">
        <MapHome />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: action => dispatch({ type: action.type, payload: action.payload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
