import React, { useContext, useState } from "react";
import { Spinner } from "reactstrap";

import { AboutContext } from "../../Provider/About/AboutContext";

const About = (props) => {
  const [aboutState, setAboutState] = useState({
    loading: false,
  });

  const context = useContext(AboutContext);
  const { about, getCv } = context;
  const { name, address, age, description, email, job, link } = about;

  const onClickGetCv = async () => {
    setAboutState({ loading: true });
    await getCv();
    setAboutState({ loading: false });
  };

  let linkSocial = {};
  if (link !== undefined) {
    linkSocial = link;
  }
  const { linkedin, github, facebook } = linkSocial;

  //handle description
  let descriptionArr = [];
  if (description !== undefined) {
    descriptionArr = description.split(".");
    descriptionArr.pop();
  }

  let spinner = "";
  if (aboutState.loading) {
    spinner = <Spinner size="sm" />;
  }

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Tuan
          <span className="text-primary"> Duong</span>
        </h1>
        <div className="subheading mb-5 mt-5">
          <ul className="list-inline">
            <li className="list-inline-item infor-item">
              <span className="text-primary">Full name:</span> {name}
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Age:</span> {age}
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Job:</span> {job}
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Address:</span> {address}
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Email:</span> {email}
            </li>
          </ul>
        </div>

        <p className="lead mb-5">
          {descriptionArr.map((content, inx) => (
            <span key={inx}>
              <span>{content}.</span> <br />
            </span>
          ))}
        </p>

        <div className="mb-5">
          <button
            className="btn"
            disabled={aboutState.loading}
            onClick={onClickGetCv}
          >
            {spinner} Download CV
          </button>
        </div>

        <div className="social-icons">
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href={linkedin}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href={github}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href={facebook}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
