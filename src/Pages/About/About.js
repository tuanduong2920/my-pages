import React from "react";

const About = (props) => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          I'm Tuan
          <span className="text-primary"> Duong</span>
        </h1>
        <div className="subheading mb-5 mt-5">
          <ul className="list-inline">
            <li className="list-inline-item infor-item">
              <span className="text-primary">Full name:</span> Dau Tuan Duong
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Age:</span> 21
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Job:</span> Web Developer
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Adress:</span> 54 Trieu Khuc -
              Thanh Xuan - Ha Noi
            </li>
            <li className="list-inline-item infor-item">
              <span className="text-primary">Email:</span>{" "}
              tuanduong2920@gmail.com
            </li>
          </ul>
        </div>

        <p className="lead mb-5">
          My name is Duong and i'm a front-end web
          developer.
          <br />
          I’m serious about my work but quite easy-going in life.
          <br />
          As a front-end web developer, I have experience in using javascript
          frameworks to build a web application.
        </p>

        <div className="mb-5">
          <button className="btn">Download CV</button>
        </div>

        <div className="social-icons">
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/duong-tuan-748a011b3/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/tuanduong2920"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/tuanduong2920"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default About;
