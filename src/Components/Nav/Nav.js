import React, { useState } from "react";
import { Collapse } from "reactstrap";

import { NavLink, Link } from "react-router-dom";
import Avatar from "../../assets/img/Capture.PNG";

const Nav = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand js-scroll-trigger" to="/">
        <span className="d-block d-lg-none">Tuan Duong</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={Avatar}
            alt=""
          />
        </span>
      </Link>
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
              to="/project"
            >
              Project
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
