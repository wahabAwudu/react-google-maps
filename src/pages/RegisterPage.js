import React from "react";
import Register from "../components/auth/Register";

export default function RegisterPage() {
  return (
    <div className="row mt-5">
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-info text-center">Register</h1>
          <Register />
        </div>
      </div>
    </div>
  );
}
