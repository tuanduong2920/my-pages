import React from "react";


const Education = (props) => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">UNIVERSITY OF TRANSPORT TECHNOLOGY</h3>
            <div className="subheading mb-3">BACHELOR OF information technology</div>
            <div>Information Technology</div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2018 - Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
