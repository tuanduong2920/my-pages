import React, { useState } from "react";
import { Collapse } from "reactstrap";

import { NavLink, useRouteMatch } from "react-router-dom";

const Nav = (props) => {
  const [isOpen, setOpen] = useState(true);
  console.log(useRouteMatch().path);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Tuan Duong</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/img/profile.jpg"
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Collapse isOpen={isOpen} className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link js-scroll-trigger"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li> */}
          <li className="nav-item">
            <NavLink
              className="nav-link js-scroll-trigger"
              activeClassName="active"
              to="/education"
            >
              Education
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link js-scroll-trigger"
              activeClassName="active"
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link js-scroll-trigger"
              activeClassName="active"
              to="/interests"
            >
              Interests
            </NavLink>
          </li>
        </ul>
      </Collapse>
    </nav>
  );
};

export default Nav;
