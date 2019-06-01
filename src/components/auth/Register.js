import React from "react";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={""}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" />
            <div className="invalid-text">Error</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" />
            <div className="invalid-text">Error</div>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-success btn-block"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
