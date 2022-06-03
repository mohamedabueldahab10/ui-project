import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container d-flex justify-content-between align-items-center py-1">
      <div className="mx-5">
        <Link className="navbar-brand fw-bolder text-dark me-5" to="home">
          <p className="logoName d-inline">VHub</p>
        </Link>
        <Link className="navbar-brand fw-bolder text-dark ms-5" to="login">
          <p className="logoName d-inline">Login</p>
        </Link>
      </div>

      <div className="d-flex justify-content-center mx-4">
        <div className="searchbtn">
          <form class="d-flex position-relative" role="search">
            <div className="searchicon">
              <i class="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle pe-2"></i>
            </div>
            <input
              class="form-control me-2 rounded-pill shadow-sm "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        <div className="nav-item me-3 d-flex align-items-center">
          <i className="icon fa-solid fa-comment-dots mx-3">
            <span className="iconSpan rounded-pill bg-primary d-flex justify-content-center align-items-center">
              <span className="iconNum">13</span>
            </span>
          </i>
          <i className="icon fa-solid fa-bell mx-3">
            <span className="iconSpan rounded-pill bg-primary d-flex justify-content-center align-items-center">
              <span className="iconNum">2</span>
            </span>
          </i>
          <i className="icon brdr fa-solid fa-user ms-3"></i>
          <i className="icon brdr fa-solid fa-caret-down me-3"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
