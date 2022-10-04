import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = ({ show }) => {
  return (
    <div className="wrapper">
      <div className="header-title">
        <Link to="/">
          <img src="/assets/shared/logo.svg" alt="logo" className="title" />
        </Link>
      </div>

      <Link to={!show ? "/slideshow" : "/"}>
        <p className="slideshow">
          {!show ? "Start slideshow" : "Stop slideshow"}
        </p>
      </Link>
    </div>
  );
};

export default Header;
