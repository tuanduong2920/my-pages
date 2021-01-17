import React from "react";

const Skill = (props) => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item" style={{ color: "#E65100" }}>
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#039BE5" }}>
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#FFD600" }}>
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#DD2C00" }}>
            <i className="fab fa-angular"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#80DEEA" }}>
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#4CAF50" }}>
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item" style={{ color: "#D50000" }}>
            <i className="fab fa-npm"></i>
          </li>
        </ul>
        <div className="subheading mb-3">Coding skills</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            HTML / CSS
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            React / Angular / JavaScript
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            NodeJs
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            JQuery
          </li>
        </ul>
        <div className="subheading mb-3 mt-3">KNOWLEDGE</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Restful API, JSON Data
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            UI , UX Design
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Graphics and animations
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Presentation and teamwork skills
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
