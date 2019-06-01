import React from "react";
import Login from "../components/auth/Login";

export default function LoginPage() {
  return (
    <div className="row mt-5">
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-primary text-center">Login</h1>
          <Login />
        </div>
      </div>
    </div>
  );
}
