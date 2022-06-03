import React from "react";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div classNameName="container-fluid originalBackground d-flex align-items-center">
      <div classNameName="container d-flex justify-content-between align-items-center">
        <div classNameName="welcome">
          <h3>Logo</h3>
          <aside>Welcome</aside>
          <p>
            This application helps you in following up your work and providing a
            <br />
            measure of efficiency and good performance for customers and
            <br />
            following up on employees
          </p>
          <Link to="home" classNameName="btn buttonclassName text-white">
            Sign up
          </Link>
        </div>
        <div classNameName="d-flex justify-content-between">
          <div></div>
          <div>
            <form>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    className="form-control"
                    id="staticEmail"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
