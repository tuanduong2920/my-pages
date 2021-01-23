import React, { useContext } from "react";
import { EducationContext } from "../../Provider/Education/EducationContext";

const Education = (props) => {
  const context = useContext(EducationContext);
  console.log(context);

  let educatiuons = [];
  if (context !== null) {
    educatiuons = context.map((education, inx) => (
      <div
        key={inx}
        className="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div className="flex-grow-1">
          <h3 className="mb-0">{education.university}</h3>
          <div className="subheading mb-3">{education.bachelor}</div>
          <div>{education.department}</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            {education.start} - {education.end}
          </span>
        </div>
      </div>
    ));
  }

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>

        {educatiuons}
      </div>
    </section>
  );
};

export default Education;
